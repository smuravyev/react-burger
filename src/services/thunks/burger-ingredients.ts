import { BUSY_SET,
         BUSY_CLEAR } from '../actions/app';

import { setError } from '../actions/error-message';

import { oErrorCodes,
         oIngredientTypes,
         aIngredientsTemplate,
         oIngredientDragTypes } from '../../utils/constants';

import { oSettings } from '../../config/config'; 

import { GET_INGREDIENTS_REQUEST,
         GET_INGREDIENTS_FAILED,
         GET_INGREDIENTS_SUCCESS } from '../actions/burger-ingredients';

import type { TAppThunk,
              TRootState } from '../store';

import type { IIngredient,
              TArrayOfIngredients,
              IIngredientsRequestData } from '../../utils/types';

const splitByTypes :
                    (aIngredients : Array<IIngredient>) => TArrayOfIngredients =
                                                             (aIngredients) => {
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

export const getIngredients : TAppThunk = () => async (dispatch, getState ) => {
    const state : TRootState = getState();
    
    if(state.burgerIngredients.bLoadedSuccessful) return; // Do not load twice!
    
    dispatch({type: BUSY_SET});
    dispatch({type: GET_INGREDIENTS_REQUEST});
    try{
        const oResponse = await fetch(oSettings.sAPIBaseURL +
                                               oSettings.oAPIURIS.sIngredients);
        if(oResponse.ok){
            const oData : IIngredientsRequestData = await oResponse.json();
            if((!(oData.success)) ||
               (!(Array.isArray(oData.data)))){
                dispatch({ type: GET_INGREDIENTS_FAILED });
                dispatch(setError(oErrorCodes.EC_INVALID_INGREDIENTS_DATA));
            }
            else {
                dispatch({ type: GET_INGREDIENTS_SUCCESS,
                           payload:
                                   { aIngredients: splitByTypes(oData.data) }});
            }
        }
        else{
            dispatch({ type: GET_INGREDIENTS_FAILED });
            dispatch(setError(oErrorCodes.EC_COULD_NOT_FETCH_INGREDIENTS));
        }
    }
    catch(_){
        dispatch({ type: GET_INGREDIENTS_FAILED });
        dispatch(setError(oErrorCodes.EC_COULD_NOT_FETCH_INGREDIENTS));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};