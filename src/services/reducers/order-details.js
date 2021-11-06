import { CLEAR_ORDER_NUMBER,
         ORDER_REQUEST,
         ORDER_SUCCESS,
         ORDER_FAILED } from '../actions/order-details';

const stateInitialOrderDetails = {
    nOrderNumber : -1,
    bIsRequesting : false,
    bIsRequestFailed : false
}

export const reducerOrderDetails =
                                 (state = stateInitialOrderDetails, action) => {
    switch(action.type){
        case CLEAR_ORDER_NUMBER: {
            return {...state,
                    nOrderNumber : stateInitialOrderDetails.nOrderNumber};
        }
        
        case ORDER_REQUEST: {
            return {...state,
                    nOrderNumber : stateInitialOrderDetails.nOrderNumber,
                    bIsRequesting : true,
                    bIsRequestFailed : false};
        }

        case ORDER_FAILED: {
            return {...state,
                    nOrderNumber : stateInitialOrderDetails.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : true};
        }

        case ORDER_SUCCESS: {
            return {...state,
                    nOrderNumber : action.payload.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : false};
        }

        default: {
            return state;
        }
    }
}