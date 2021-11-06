import { SET_CURRENT_INGREDIENT,
         CLEAR_CURRENT_INGREDIENT } from '../actions/ingredient-details';

export const reducerIngredientDetails = (state = null, action) => {
    switch(action.type){
        case SET_CURRENT_INGREDIENT: {
            return action.payload.oIngredient;
        }
        
        case CLEAR_CURRENT_INGREDIENT: {
            return null;
        }
        
        default: {
            return state;
        }
    }
}