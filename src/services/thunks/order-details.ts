import { setIsBusyAction,
         clearIsBusyAction } from '../actions/app';

import { setError } from '../actions/error-message';

import { fetchWithAuth } from '../../utils/functions';

import { oErrorCodes } from '../../utils/constants';

import { oSettings } from '../../config/config'; 

import { setOrderRequestAction,
         setOrderSuccessAction,
         setOrderFailedAction } from '../actions/order-details';

import type { TAppThunk} from '../store';

import type { IOrderRequestResult } from '../../utils/functions';

export const sendOrder : TAppThunk = () => async (dispatch, getState) => {
    dispatch(setIsBusyAction());
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
            dispatch(setOrderRequestAction());
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
                dispatch(setOrderFailedAction());
                dispatch(setError(oErrorCodes.EC_CANNOT_CREATE_ORDER, true));
            }
            else{
                dispatch(setOrderSuccessAction(oData.order.number));
            }
        }
    }
    catch(_){
        dispatch(setOrderFailedAction());
        dispatch(setError(oErrorCodes.EC_CANNOT_CREATE_ORDER, true));
    }
    finally{
    }
        dispatch(clearIsBusyAction());
};