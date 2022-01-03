import { BUSY_SET,
         BUSY_CLEAR } from '../actions/app';

import { setError } from '../actions/error-message';

import { fetchWithAuth } from '../../utils/functions';

import { oErrorCodes } from '../../utils/constants';

import { oSettings } from '../../config/config'; 

import { ORDER_REQUEST,
         ORDER_SUCCESS,
         ORDER_FAILED } from '../actions/order-details';

import type { TAppThunk, 
              TAppDispatch,
              TGetStateFunction} from '../store';

import type { IOrderRequestResult } from '../../utils/functions';

export const sendOrder : TAppThunk = () =>
                                       async (dispatch : TAppDispatch,
                                              getState : TGetStateFunction) => {
    dispatch({type: BUSY_SET});
    try{
        const { constructedBurger } = getState();
        if(!(constructedBurger.present.oBun &&
             constructedBurger.present.oBun._id)){
            //Suddenly we have no bun (I don't know why, but it so)
            dispatch(setError(oErrorCodes.EC_MUST_HAVE_A_BUN, true));
            //We did not started a request, so we won't dispath anything else.
        }
        else {
            // Prepare ingredients list for the kitchen in the correct order
            const aIngredientsToTheKitchen : Array<string> =
                                           [constructedBurger.present.oBun._id];
            constructedBurger.present.aContent.forEach((oElement) => {
                aIngredientsToTheKitchen.push(oElement._id);
            });
        
            //Start requesting...
            dispatch({type: ORDER_REQUEST});
            const oData =
                 await fetchWithAuth(oSettings.sAPIBaseURL +
                                     oSettings.oAPIURIS.sOrders,
                                     { method: 'POST',
                                       cache: 'no-cache',
                                       headers: new Headers({'Content-Type':
                                                          'application/json' }),
                                       redirect: 'follow',
                                       body: JSON.stringify({ingredients:
                                                 aIngredientsToTheKitchen})}) as
                                                            IOrderRequestResult;
            if((!(oData.success)) ||
               (!(oData.order)) ||
               (!(oData.order.number))){
                dispatch({ type: ORDER_FAILED });
                dispatch(setError(oErrorCodes.EC_CANNOT_CREATE_ORDER, true));
            }
            else{
                dispatch({type: ORDER_SUCCESS,
                          payload:
                               { nOrderNumber: oData.order.number }});
            }
        }
    }
    catch(_){
        dispatch({ type: ORDER_FAILED });
        dispatch(setError(oErrorCodes.EC_CANNOT_CREATE_ORDER, true));
    }
    finally{
    }
        dispatch({ type: BUSY_CLEAR });
};