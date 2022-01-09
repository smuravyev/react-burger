import { FEED_CONNECTED,
         FEED_CONNECTION_ERROR,
         FEED_DISCONNECTED,
         FEED_RECEIVED_DATA } from '../actions/feed';
         
import type { TFeedAction } from '../actions/feed';

import type { IProcessedOrdersFeedData } from '../../utils/types';
         
export type TFeedState = {
    bIsConnected : boolean;
    bHasError : boolean;
    bHasData : boolean;
    oFeedData : IProcessedOrdersFeedData;
    bWithAuthToken : boolean;
    sURL : string;
};

const stateInitialFeed : TFeedState = {
    bIsConnected : false,
    bHasError : false,
    bHasData : false,
    bWithAuthToken : false,
    sURL : "",
    oFeedData : {
        aOrders : [],
        nTotal : 0,
        nTotalToday : 0,
        aReadyOrders : [],
        aPendingOrders : []
    }
};
        
export const reducerFeed =
              (state = stateInitialFeed, action : TFeedAction) : TFeedState => {
    switch(action.type){
       case FEED_CONNECTED: {
            return { ...state,
                     bWithAuthToken : action.payload.bWithAuthToken,
                     sURL : action.payload.sURL,
                     bIsConnected  : true };
       }
       
       case FEED_CONNECTION_ERROR: {
            return { ...state,
                     bHasError : true };
       }
       
       case FEED_DISCONNECTED: {
            return { ...state,
                     bIsConnected  : false,
                     bHasData : false,
                     oFeedData : stateInitialFeed.oFeedData,
                     bWithAuthToken : false,
                     sURL : ""};
       }
       
       case FEED_RECEIVED_DATA: {
            return { ...state,
                     bHasData : true,
                     oFeedData : action.payload };
       }

        default: {
            return state; 
        }
    };
};
