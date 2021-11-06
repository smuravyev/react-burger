import { BUSY_SET,
         BUSY_CLEAR } from './app.js';

import { setError } from './error-message.js';

import { oErrorCodes } from '../../utils/constants.js';

import { oSettings } from '../../config/config.js'; 


export const CLEAR_ORDER_NUMBER = '@OrderDetails/CLEAR_ORDER_NUMBER';
export const ORDER_REQUEST = '@OrderDetails/ORDER_REQUEST';
export const ORDER_SUCCESS = '@OrderDetails/ORDER_SUCCESS';
export const ORDER_FAILED = '@OrderDetails/ORDER_FAILED';


export const sendOrder = () => async (dispatch, getState) => {
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
            const aIngredientsToTheKitchen =
                                           [constructedBurger.present.oBun._id];
            constructedBurger.present.aContent.forEach((oElement) => {
                aIngredientsToTheKitchen.push(oElement._id);
            });
        
            //Start requesting...
            dispatch({type: ORDER_REQUEST});
            const oResponse =
                 await fetch(oSettings.sAPIBaseURL + oSettings.oAPIURIS.sOrders,
                             { method: 'POST',
                               cache: 'no-cache',
                               headers: { 'Content-Type': 'application/json' },
                               redirect: 'follow',
                               body: JSON.stringify({ingredients:
                                                   aIngredientsToTheKitchen})});
            if(oResponse.ok){
                const oData = await oResponse.json();
                if((!(oData.success)) ||
                    (!(oData.order)) ||
                    (!(oData.order.number))){
                    dispatch({ type: ORDER_FAILED });
                    dispatch(setError(oErrorCodes.EC_CANNOT_CREATE_ORDER));
                }
                else{
                    dispatch({type: ORDER_SUCCESS,
                              payload:
                               { nOrderNumber: parseInt(oData.order.number) }});
                }
             }
             else{
                dispatch({ type: ORDER_FAILED });
                dispatch(setError(oErrorCodes.EC_CANNOT_CREATE_ORDER));
             }
         }
    }
    catch(erError){
        dispatch({ type: ORDER_FAILED });
        dispatch(setError(oErrorCodes.EC_CANNOT_CREATE_ORDER));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};