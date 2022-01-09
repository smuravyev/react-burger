import { FEED_CONNECTING,
         FEED_CONNECTED,
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
         
export { FEED_CONNECTING,
         FEED_CONNECTED,
         FEED_CONNECTION_ERROR,
         FEED_DISCONNECTED,
         FEED_RECEIVED_DATA,
         onSocketError,
         onSocketConnected,
         onSocketMessage,
         onSocketClosed,
         socketDisconnect,
         socketConnect };

export interface IFeedConnectingAction {
    readonly type : typeof FEED_CONNECTING;
    readonly payload : {
        readonly bWithAuthToken : boolean;
        readonly sURL : string; 
    };
};

export interface IFeedConnectedAction {
    readonly type : typeof FEED_CONNECTED;
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

export type TFeedAction = IFeedConnectingAction |
                          IFeedConnectedAction | 
                          IFeedConnectionErrorAction |
                          IFeedDisconnectedAction |
                          IFeedReceivedDataAction;