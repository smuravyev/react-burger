import { BUSY_SET,
         BUSY_CLEAR,
         SET_CURRENT_PAGE } from '../actions/app';
         
import { oSettings } from '../../config/config';
 
import { oPages } from '../../utils/constants';

const stateInitialApp= {
    nBusyCounter : 0,
    bIsBusy: false,
    sCurrentPage : oSettings.sDefaultPage
};
        
export const reducerApp = (state = stateInitialApp, action) => {
    switch(action.type){
        
       case BUSY_SET: {
            /* BUSY can be set by different async requests. Every request
               may increase the busy number. The application IS NOT busy, when
               nIsBusy = 0. */
            return { ...state,
                     bIsBusy: true,
                     nBusyCounter : state.nBusyCounter + 1 }
        }
        
        case BUSY_CLEAR: {
            /* Decreasing the busy counter and drop bIsBusy flag if 0. */ 
            const nNewBusyCounter =
                          (state.nBusyCounter > 0) ? state.nBusyCounter - 1 : 0; 
            return { ...state,
                     bIsBusy : (nNewBusyCounter !== 0),
                     nBusyCounter : nNewBusyCounter }
        }
        
        case SET_CURRENT_PAGE: {
            for (const [, sPage] of Object.entries(oPages)){
                if(sPage === action.payload.sPage){
                    return { ...state,
                             sCurrentPage : sPage };
                }
            }
            return state;
        }
        
        default: {
            return state; 
        }
    };
};