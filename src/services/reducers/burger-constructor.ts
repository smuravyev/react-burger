import { CLEAR_BURGER,
         ADD_INGREDIENT,
         REMOVE_INGREDIENT,
         SWAP_INGREDIENTS,
         SET_BUN } from '../actions/burger-constructor';

import { nMaximumRandomNumberForID } from '../../utils/constants';

import type { TBurgerConstructorAction } from '../actions/burger-constructor'

import type { IDraggableIngredient } from '../../utils/types';

export type TBurgerConstructorState = {
    oBun : IDraggableIngredient | null;
    aContent : Array<IDraggableIngredient>;
};

/**
 * This state Will be with past, present, future, as this part of the state
 * will be used with undo/redo abilities.
 */
const stateInitialBurgerConstructor : TBurgerConstructorState 
                                    = { oBun : null,
                                        aContent : [] }

export const reducerBurgerConstructor =
              (state  = stateInitialBurgerConstructor,
               action : TBurgerConstructorAction) : TBurgerConstructorState => {
    switch(action.type){
        
        case CLEAR_BURGER: {
            return stateInitialBurgerConstructor;
        }
        
        case ADD_INGREDIENT: {
            if((action.payload !== undefined) &&
               (action.payload !== null)){
                const aContent = [...state.aContent];
                const nIndex = ((action.payload.nIndex !== undefined) &&
                            (action.payload.nIndex >= 0) && 
                            (action.payload.nIndex <= aContent.length)) ?
                           action.payload.nIndex : 0;
                // By default, we'll add to the top
                if(action.payload.oIngredient){
                    aContent.splice(nIndex, 0,
                                    { ...action.payload.oIngredient,
                                      sInnerID : "" +
                                               Math.floor(Math.random() *
                                               nMaximumRandomNumberForID) 
                                               + Date.now()});
                    return { ...state,
                             aContent : aContent };
                }
            }
            return state;
        }

        case REMOVE_INGREDIENT: {
            const aContent = [...state.aContent];
            const nIndex = aContent.findIndex((oElement) =>
                                     oElement.sInnerID === action.payload?.sID);
            if(nIndex >=0){
                aContent.splice(aContent.findIndex((oElement) =>
                                     oElement.sInnerID === action.payload?.sID),
                                1);
            }
            return {...state,
                    aContent : aContent};
        }

        case SWAP_INGREDIENTS: {
            const aContent = [...state.aContent];
            const nFirstIndex = ((action.payload?.nFirst !== undefined) &&
                                 (action.payload?.nFirst >= 0) && 
                                 (action.payload?.nFirst < aContent.length)) ?
                                action.payload.nFirst : 0;
            const nSecondIndex = ((action.payload?.nSecond !== undefined) &&
                                  (action.payload?.nSecond >= 0) && 
                                  (action.payload?.nSecond < aContent.length)) ?
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
            if(action.payload?.oBun){
                return {...state,
                        oBun : action.payload?.oBun};
            }
            return state;
        }
        
        default: {
            return state;
        }
    }
};