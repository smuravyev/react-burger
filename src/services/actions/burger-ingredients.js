import { BUSY_SET,
         BUSY_CLEAR } from './app.js';

import { setError } from './error-message.js';

import { oErrorCodes,
         oIngredientTypes,
         aIngredientsTemplate,
         oIngredientDragTypes } from '../../utils/constants.js';

import { oSettings } from '../../config/config.js'; 

export const GET_INGREDIENTS_REQUEST =
                                   '@BurgerIngredients/GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS =
                                   '@BurgerIngredients/GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED =
                                    '@BurgerIngredients/GET_INGREDIENTS_FAILED';

const splitByTypes = (aIngredients) => {
    /* Modify our ingredients array to make it more easily operated: split
       by ingredient types and add some properties like drag type. */
    const aData = aIngredientsTemplate;
    [ oIngredientTypes.oBun.sName,
      oIngredientTypes.oSauce.sName,
      oIngredientTypes.oMain.sName ].forEach((sType) =>{
        const nIndex = aData.findIndex((oItem) => oItem.sType === sType); 
        aData[nIndex].aSet = aIngredients.filter(oItem => oItem.type === sType);
        aData[nIndex].aSet.forEach((oElement) => {
            oElement.sDragType = (sType === oIngredientTypes.oBun.sName) ?
                                 oIngredientDragTypes.sBun :
                                 oIngredientDragTypes.sFilling; 
        });
    });
    return aData;
};

export const getIngredients = () => async (dispatch, getState) => {
    const state = getState();
    if(state.burgerIngredients.bLoadedSuccessful) return; // Do not load twice!
    dispatch({type: BUSY_SET});
    dispatch({type: GET_INGREDIENTS_REQUEST});
    try{
        const oResponse = await fetch(oSettings.sAPIBaseURL +
                                               oSettings.oAPIURIS.sIngredients);
        if(oResponse.ok){
            const oData = await oResponse.json();
            if((!(oData.success)) ||
               (!(Array.isArray(oData.data)))){
                dispatch({ type: GET_INGREDIENTS_FAILED });
                dispatch(setError(oErrorCodes.EC_INVALID_INGREDIENTS_DATA));
            }
            else {
                dispatch({type: GET_INGREDIENTS_SUCCESS,
                          payload: { aIngredients: splitByTypes(oData.data) }});
            }
        }
        else{
            dispatch({ type: GET_INGREDIENTS_FAILED });
            dispatch(setError(oErrorCodes.EC_COULD_NOT_FETCH_INGREDIENTS));
        }
    }
    catch(erError){
        dispatch({ type: GET_INGREDIENTS_FAILED });
        dispatch(setError(oErrorCodes.EC_COULD_NOT_FETCH_INGREDIENTS));
    }
    // Always end with clear our busy status.
    dispatch({type: BUSY_CLEAR});
};