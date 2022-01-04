import { SWAP_INGREDIENTS,
         ADD_INGREDIENT } from '../actions/burger-constructor';

import type { TAppThunk } from '../store';

import type { IDraggableIngredient } from '../../utils/types';
              
export const moveIngredient : TAppThunk = ({ nSourceIndex,
                                             nTargetIndex = -1,
                                             bIsBefore = false } :
                                                     { nSourceIndex : number,
                                                       nTargetIndex? : number,
                                                       bIsBefore? : boolean}) =>
                                                       (dispatch, getState) => {
    
    const { constructedBurger } = getState();

    // If source index less than target index, and we are adding BEFORE the
    // target element, we need to substract 1 from the index, i. e. swap with
    // the PREVIOUS object.
    //  
    // If the source index is more than target Index, we need to ADD 1 to target
    // index IF we adding AFTER that, i .e. swap with the NEXT object.
    const nAddition = (nSourceIndex <= nTargetIndex) ?
                  ((bIsBefore && nTargetIndex > 0) ? -1 : 0) :
                  ((!bIsBefore) && nTargetIndex <
                         constructedBurger.present.aContent.length - 1) ? 1 : 0;

    // Aaaaand... Swap! 
    dispatch({type: SWAP_INGREDIENTS,
              payload: { nFirst : nSourceIndex,
                         nSecond : nTargetIndex + nAddition}})
};

export const addIngredient : TAppThunk = ({ oIngredient,
                                            sTargetID = '',
                                            bIsBefore = false } : 
                                           { oIngredient : IDraggableIngredient,
                                             sTargetID? : string, 
                                             bIsBefore : boolean }) =>
                                                       (dispatch, getState) => {
    const { constructedBurger } = getState();
    const nTargetIndex = constructedBurger.present.aContent.findIndex(
                                   oElement => oElement.sInnerID === sTargetID);
    dispatch({type: ADD_INGREDIENT,
              payload: {nIndex: bIsBefore ? nTargetIndex : nTargetIndex + 1,
                        oIngredient: oIngredient}});
};

export const addIngredientBefore : TAppThunk =
                                            (oIngredient : IDraggableIngredient,
                                             sTargetID : string = '') => {
    return addIngredient({oIngredient: oIngredient,
                          sTargetID : sTargetID,
                          bIsBefore : true});
};

export const addIngredientAfter : TAppThunk =
                                            (oIngredient : IDraggableIngredient,
                                             sTargetID : string = '') => {
    return addIngredient({oIngredient: oIngredient,
                          sTargetID : sTargetID,
                          bIsBefore : false});
}; 

export const moveIngredientBefore : TAppThunk =
                                               (nSourceIndex : number,
                                                nTargetIndex : number = -1) => {
    return moveIngredient({nSourceIndex : nSourceIndex,
                           nTargetIndex : nTargetIndex,
                           bIsBefore : true});
};

export const moveIngredientAfter : TAppThunk = (nSourceIndex : number,
                                                nTargetIndex : number = 0) => {
    return moveIngredient({nSourceIndex : nSourceIndex,
                           nTargetIndex : nTargetIndex,
                           bIsBefore : false});
};