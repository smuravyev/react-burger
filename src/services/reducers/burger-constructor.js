import { CLEAR_BURGER,
         ADD_INGREDIENT,
         REMOVE_INGREDIENT,
         SWAP_INGREDIENTS,
         SET_BUN } from '../actions/burger-constructor';

/**
 * Will be with past, present, future!
 */
const stateInitialBurgerConstructor = { oBun : {},
                                        aContent : [] };

export const reducerBurgerConstructor =
                           (state  = stateInitialBurgerConstructor, action) => {
    switch(action.type){
        
        case CLEAR_BURGER: {
            return stateInitialBurgerConstructor;
        }
        
        case ADD_INGREDIENT: {
            // Adds the ingredient to the specific posiiton (index)
            const aContent = [...state.aContent];
            // I'm paranoid
            const nIndex = ((action.payload.nIndex !== undefined) &&
                            (action.payload.nIndex >= 0) && 
                            (action.payload.nIndex <= aContent.length)) ?
                           action.payload.nIndex : 0;
            // By default, we'll add to the top
            aContent.splice(nIndex, 0,
                               {...action.payload.oIngredient,
                                sInnerID : "" +
                                               Math.floor(Math.random() * 65535) 
                                               + Date.now()});
            return {...state,
                    aContent : aContent};
        }

        case REMOVE_INGREDIENT: {
            const aContent = [...state.aContent];
            const nIndex = aContent.findIndex((oElement) =>
                                      oElement.sInnerID === action.payload.sID);
            if(nIndex >=0){
                aContent.splice(aContent.findIndex((oElement) =>
                                      oElement.sInnerID === action.payload.sID),
                                1);
            }
            return {...state,
                    aContent : aContent};
        }

        case SWAP_INGREDIENTS: {
            const aContent = [...state.aContent];
            const nFirstIndex = ((action.payload.nFirst !== undefined) &&
                                 (action.payload.nFirst >= 0) && 
                                 (action.payload.nFirst < aContent.length)) ?
                                action.payload.nFirst : 0;
            const nSecondIndex = ((action.payload.nSecond !== undefined) &&
                                  (action.payload.nSecond >= 0) && 
                                  (action.payload.nSecond < aContent.length)) ?
                                 action.payload.nSecond : 0;
            if(nFirstIndex !== nSecondIndex){
                aContent.splice(nSecondIndex, 0,
                                aContent.splice(nFirstIndex, 1)[0]);
                return {...state,
                        aContent: aContent};
            }
            else{
                return state;
            }
        }
        
        case SET_BUN: {
            return {...state,
                    oBun : action.payload.oBun};
        }
        
        default: {
            return state;
        }
    }
};