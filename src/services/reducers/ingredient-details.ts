import { SET_CURRENT_INGREDIENT,
         CLEAR_CURRENT_INGREDIENT } from '../actions/ingredient-details';
         
import type { TCurrentIngredientAction, IIngredient } from '../../utils/types'; 

export const reducerIngredientDetails = (state : IIngredient | null = null,
                                         action : TCurrentIngredientAction) => {
    switch(action.type){
        case SET_CURRENT_INGREDIENT: {
            return action.payload?.oIngredient || null;
        }
        
        case CLEAR_CURRENT_INGREDIENT: {
            return null;
        }
        
        default: {
            return state;
        }
    }
}