import { SET_CURRENT_INGREDIENT,
         CLEAR_CURRENT_INGREDIENT } from '../action-types/ingredient-details';

import type { TIngredientDetailsAction } from '../actions/ingredient-details';
         
import type { IDraggableIngredient } from '../../utils/types';

export type TCurrentIngredientState = IDraggableIngredient | null; 

const stateInitialCurrentIngredient : TCurrentIngredientState = null;

export const reducerIngredientDetails =
             (state : TCurrentIngredientState = stateInitialCurrentIngredient,
              action : TIngredientDetailsAction ) : TCurrentIngredientState => {
    switch(action.type){
        case SET_CURRENT_INGREDIENT: {
            if(action.payload){
                if(action.payload.oIngredient){
                    return action.payload.oIngredient;
                }
                else{
                    return null;
                }
            }
            else{
                return null;
            }
        }
        
        case CLEAR_CURRENT_INGREDIENT: {
            return null;
        }
        
        default: {
            return state;
        }
    }
}