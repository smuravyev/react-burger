export const CLEAR_BURGER = '@BurgerConstructor/CLEAR_BURGER';
export const ADD_INGREDIENT = '@BurgerConstructor/ADD_INGREDIENT';
export const REMOVE_INGREDIENT = '@BurgerConstructor/REMOVE_INGREDIENT';
export const SWAP_INGREDIENTS = '@BurgerConstructor/SWAP_INGREDIENTS';
export const SET_BUN = '@BurgerConstructor/SET_BUN';
 
const moveIngredient = ({ sID, sTargetID = '', bIsBefore = false }) =>
                                                       (dispatch, getState) => {
    const { constructedBurger } = getState();

    // Index of the dragging object
    const nSourceIndex = constructedBurger.aContent.findIndex(oElement =>
                                                     oElement.sInnerID === sID);

    // Index of the drop target object
    const nTargetIndex = constructedBurger.aContent.findIndex(oElement =>
                                              oElement.sInnerID === sTargetID);

    // If source index less than target index, and we are adding BEFORE the
    // target element, we need to substract 1 from the index, i. e. swap with
    // the PREVIOUS object.
    //  
    // If the source index is more than target Index, we need to ADD 1 to target
    // index IF we adding AFTER that, i .e. swap with the NEXT object.
    const nAddition = (nSourceIndex <= nTargetIndex) ?
                  ((bIsBefore && nTargetIndex > 0) ? -1 : 0) :
                  ((!bIsBefore) && nTargetIndex <
                                 constructedBurger.aContent.length - 1) ? 1 : 0;

    // Aaaaand... Swap! 
    dispatch({type: SWAP_INGREDIENTS,
              payload: { nFirst : nSourceIndex,
                         nSecond : nTargetIndex + nAddition}})
};

export const addIngredient = ({ oIngredient,
                                sTargetID = '',
                                bIsBefore = false }) =>
                                                       (dispatch, getState) => {
    const { constructedBurger } = getState();
    const nTargetIndex = constructedBurger.aContent.findIndex(oElement =>
                                              oElement.sInnerID === sTargetID);
    dispatch({type: ADD_INGREDIENT,
              payload: {nIndex: bIsBefore ? nTargetIndex : nTargetIndex + 1,
                        oIngredient: oIngredient}});
};

export const addIngredientBefore = (oIngredient, sTargetID = '') => {
    return addIngredient({oIngredient: oIngredient,
                          sTargetID : sTargetID,
                          bIsBefore : true});
};

export const addIngredientAfter = (oIngredient, sTargetID = '') => {
    return addIngredient({oIngredient: oIngredient,
                          sTargetID : sTargetID,
                          bIsBefore : false});
}; 

export const moveIngredientBefore = (sID, sTargetID = '') => {
    return moveIngredient({sID : sID,
                           sTargetID : sTargetID,
                           bIsBefore : true});
};
export const moveIngredientAfter = (sID, sTargetID = '') => {
    return moveIngredient({sID : sID,
                           sTargetID : sTargetID,
                           bIsBefore : false});
};