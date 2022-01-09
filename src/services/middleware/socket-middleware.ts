import { setError } from '../actions/error-message';

import { oErrorCodes,
         nSecondsUntilSocketReconnectOnError,
         nSuccessSocketCloseCode } from '../../utils/constants';

import type { Middleware } from 'redux';

import type { TAppThunk,
              TAppDispatch } from '../store';

import type { TApplicationAction } from '../actions';

// 0. Only one WS at a time!
//
// 1. We have to use this middleware to connect to at least 2 different URLs.
// 2. Each URL could be processed with its own reducers, so the functions
//    handling the errors/messages etc could be different.
// 3. We will never send anything to the server, but we have to implement
//    this into middleware according to the strange checklist.
// 4. Cannot comply with checklist: first URL will be without any tokens,
//    at the same time second will be with token. So we won't implement any
//    of tokens here, it will be implemented in the component itself.
//
// -----
//
// SO WE SHOULD NOT PASS ANY PARAMTERS TO THE MIDDLEWARE ITSELF!
// We will pass all the data as a payload for the connect action :-)
//
// Actions:
//    -- WS_CONNECT
//       payload : IWSConnectAction
//                note: if onMessage has type, then to its payload will be added
//                      the _ws_message property.
//                      if onMessage is a function, then the received message
//                      will be it's parameter.
//    -- WS_CLOSE
//       no payload
//    -- WS_SEND
//       message : text, only for text messages

export const WS_CONNECT = '@socketMiddleware/WS_CONNECT' as const;
export const WS_CLOSE = '@socketMiddleware/WS_CLOSE' as const;
export const WS_SEND = '@socketMiddleware/WS_SEND' as const;

export interface IWSConnectAction {
    readonly type : typeof WS_CONNECT;
    readonly payload : {
        readonly url : string;
        readonly onOpen? : TApplicationAction | TAppThunk;
        readonly onClose? : TApplicationAction | TAppThunk;
        readonly onError? : TApplicationAction | TAppThunk;
        readonly onMessage? : TApplicationAction | TAppThunk;
    };
};

export interface IWSCloseAction {
    readonly type: typeof WS_CLOSE;
};

export interface IWSSendAction {
    readonly type: typeof WS_SEND;
    readonly payload : {
        readonly message : string; 
    }
};

export type TSocketMiddlewareAction = IWSSendAction |
                                      IWSCloseAction |
                                      IWSConnectAction;

export const socketMiddleware : Middleware = ({ dispatch }) => {
    const mwDispatch = dispatch as TAppDispatch;
    let wsSocket : WebSocket | null = null;
    let bIsConnected : boolean = false;
    let nReconnectTimerID : ReturnType<typeof setTimeout> | null = null;
    let sURL : string = "";
    // Number of components using this socket. We won't close it until
    // it reaches zero.
    let nClientComponentsCount = 0;

    return (next) => (oAction : TSocketMiddlewareAction)  => {
        if(oAction?.type){
            switch(oAction.type){
                case WS_CONNECT: {
                    // WebSocket constructor could throw an error
                    try{
                        //DO NOT RECONNECT IF WE ARE CONNECTED & URL is the same
                        if(bIsConnected && wsSocket !== null){
                            if(sURL !== oAction.payload.url){
                                bIsConnected = false;
                                //1. Remove the timer
                                if(nReconnectTimerID){
                                    clearTimeout(nReconnectTimerID);
                                    nReconnectTimerID = null;
                                }
                                wsSocket?.close(nSuccessSocketCloseCode);
                                wsSocket = null;
                                nClientComponentsCount = 0;
                                wsSocket = new WebSocket(oAction.payload.url);
                            }
                            else{
                                // Don't touch the socket, but can redeclare
                                // the props
                            }
                        }
                        else{
                            wsSocket = new WebSocket(oAction.payload.url);
                        }
                        bIsConnected = true;
                        nClientComponentsCount++;
                        sURL = oAction.payload.url;
                        // onOnpen handler
                        if(oAction.payload.onOpen !== undefined){
                            wsSocket.onopen = () => {
                                if(oAction.payload.onOpen !== undefined){
                                    mwDispatch(oAction.payload.onOpen);
                                }
                            };
                        }
                        
                        // onClose handler, needed always
                        wsSocket.onclose = () => {
                            // We won't handle errors here
                            // But we'll try to reconnect

                            if(oAction.payload.onClose){
                                mwDispatch(oAction.payload.onClose);
                            }

                            if(bIsConnected){
                                nReconnectTimerID = setTimeout(() => {
                                    // The current WS_CONNECT action
                                    // will remain in this closure
                                    dispatch(oAction);
                                }, nSecondsUntilSocketReconnectOnError);
                            }
                        };

                        // onError handler
                        if(oAction.payload.onError){
                            // Won't pass any error details here, it's
                            // useless
                            wsSocket.onerror = () => {
                                if(typeof oAction.payload.onError
                                                              !== "undefined") {
                                     mwDispatch(oAction.payload.onError);
                                }
                            }
                        };

                        // onMessage handler
                        if(oAction.payload.onMessage){
                            //Interesting
                            wsSocket.onmessage =
                                              ({ data } : { data : string}) => {
                                // WE WILL RETURN THIS AS STRING, NO JSON
                                // PARSING! WE DON'T KNOW WHAT TO WAIT!
                                if(typeof(oAction.payload.onMessage) ===
                                                                    "function"){
                                    mwDispatch(oAction.payload.onMessage(data));
                                }
                                else{
                                    if(typeof oAction.payload.onMessage
                                                               !== "undefined"){
                                        if(oAction.payload.onMessage.type){
                                            dispatch({
                                           type: oAction.payload.onMessage.type,
                                               payload: { 
                                              _ws_message : data } });
                                        }
                                    }
                                    else{
                                        //Strange action, skipping...
                                    }
                                }
                            };
                        }
                    }
                    catch(_){
                        setError(oErrorCodes.EC_CANNOT_CREATE_WEBSOCKET, true);
                    }
                    //That's it :-)
                    break;
                }
                
                case WS_CLOSE : {
                    nClientComponentsCount--;
                    if(nClientComponentsCount === 0){
                        //0. Stop trying.
                        bIsConnected = false;
                        //1. Remove the timer
                        if(nReconnectTimerID){
                            clearTimeout(nReconnectTimerID);
                            nReconnectTimerID = null;
                        }
                        wsSocket?.close(nSuccessSocketCloseCode);
                        wsSocket = null;
                    }
                    break;
                }
                
                case WS_SEND : {
                    try{
                        // We already declared that the payload is string. So...
                        wsSocket?.send(oAction.payload.message);
                    }
                    catch(_){
                        // The developer should be fired if this will
                        // execute :-)
                        setError(oErrorCodes.EC_SEND_TO_WEBSOCKET_ERROR, true);
                    }
                    break;
                }
                default: {
                    //Do nothnig
                }
            }
        }
        next(oAction);
    };
};