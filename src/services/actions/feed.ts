import { FEED_CONNECTED,
         FEED_CONNECTION_ERROR,
         FEED_DISCONNECTED,
         FEED_RECEIVED_DATA } from '../action-types/feed';
         
import { onSocketError,
         onSocketConnected,
         onSocketClosed,
         onSocketMessage,
         socketDisconnect,
         socketConnect } from '../thunks/feed';

import type { IProcessedOrdersFeedData } from '../../utils/types';
         
export { FEED_CONNECTED,
         FEED_CONNECTION_ERROR,
         FEED_DISCONNECTED,
         FEED_RECEIVED_DATA,
         onSocketError,
         onSocketConnected,
         onSocketMessage,
         onSocketClosed,
         socketDisconnect,
         socketConnect };

export interface IFeedConnectedAction {
    readonly type : typeof FEED_CONNECTED;
    readonly payload : {
        readonly bWithAuthToken : boolean;
        readonly sURL : string; 
    };
};

export interface IFeedConnectionErrorAction {
    readonly type : typeof FEED_CONNECTION_ERROR;
};

export interface IFeedDisconnectedAction {
    readonly type : typeof FEED_DISCONNECTED;
};

export interface IFeedReceivedDataAction {
    readonly type : typeof FEED_RECEIVED_DATA;
    readonly payload : IProcessedOrdersFeedData;
};

export type TFeedAction = IFeedConnectedAction | 
                          IFeedConnectionErrorAction |
                          IFeedDisconnectedAction |
                          IFeedReceivedDataAction;

export const setFeedConnectedAction = (bWithAuthToken : boolean,
                                       sURL : string) : IFeedConnectedAction =>
                                  ({ type: FEED_CONNECTED,
                                     payload: { bWithAuthToken : bWithAuthToken,
                                                sURL : sURL } });

export const setFeedConnectionErrorAction = () : IFeedConnectionErrorAction =>
                                              ({ type: FEED_CONNECTION_ERROR });

export const setFeedDisconnectedAction = () : IFeedDisconnectedAction =>
                                                  ({ type: FEED_DISCONNECTED });

export const
              setFeedReceivedDataAction = ( oData : IProcessedOrdersFeedData ) :
                                                      IFeedReceivedDataAction =>
                                                    ({ type: FEED_RECEIVED_DATA,
                                                       payload: oData });