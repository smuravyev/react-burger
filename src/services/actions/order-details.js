import { BUSY_SET,
         BUSY_CLEAR } from './app.js';

import { ERROR_RAISE } from './error-message.js';

import { oErrorCodes } from '../../utils/constants.js';

import { oSettings } from '../../config/config.js'; 


export const CLEAR_ORDER_NUMBER = '@OrderDetails/CLEAR_ORDER_NUMBER';
export const ORDER_REQUEST = '@OrderDetails/ORDER_REQUEST';
export const ORDER_SUCCESS = '@OrderDetails/ORDER_SUCCESS';
export const ORDER_FAILED = '@OrderDetails/ORDER_FAILED';


export const sendOrder = () => async (dispatch, getState) => {
    // We are busy
    dispatch({type: BUSY_SET});
    dispatch({type: ORDER_REQUEST});
    
    // Prepare ingredients list for the kitchen in the correct order
    const { constructedBurger } = getState();
    const aIngredientsToTheKitchen = [constructedBurger.oBun._id];
    
    constructedBurger.aContent.forEach((oElement) => {
        aIngredientsToTheKitchen.push(oElement._id);
    });
    
    //Make a request
    try{
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
                throw new Error(oErrorCodes.EC_CANNOT_CREATE_ORDER);
            }
            dispatch({type: ORDER_SUCCESS,
                      payload: { nOrderNumber: parseInt(oData.order.number) }});
        }
        else{
            throw new Error(oErrorCodes.EC_CANNOT_CREATE_ORDER);
        }
    }
    catch(erError){
        dispatch({ type: ORDER_FAILED });
        dispatch({ type: ERROR_RAISE,
                   payload: { erError : erError,
                              bCanProceed : true }});
    }
    // Always end with clear our busy status.
    dispatch({type: BUSY_CLEAR});
};