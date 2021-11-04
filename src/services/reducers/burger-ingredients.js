import { GET_INGREDIENTS_REQUEST,
         GET_INGREDIENTS_SUCCESS,
         GET_INGREDIENTS_FAILED} from '../actions/burger-ingredients';

import { aIngredientsTemplate } from "../../utils/constants";

const stateInitialBurgerIngredients = {
    aIngredients : aIngredientsTemplate,
    bIsRequesting : false,
    bIsRequestFailed : false,
    bLoadedSuccessful : false
}

export const reducerBurgerIngredients =
                          (state  = stateInitialBurgerIngredients, action) => {
    switch(action.type){

        case GET_INGREDIENTS_REQUEST: {
            // Ingredients array are left intact, because if we already have
            // ingredients shown, the customer should be able to use them.
            return { ...state,
                     bIsRequesting : true,
                     bIsRequestFailed : false };
        }

        case GET_INGREDIENTS_SUCCESS: {
            // Save new ingredients
            return { ...state,
                     aIngredients : action.payload.aIngredients,
                     bIsRequesting : false,
                     bIsRequestFailed: false,
                     bLoadedSuccessful : true };
        }

        case GET_INGREDIENTS_FAILED: {
            // In this case we'll leave the ingredients array intact,
            // because if we already have ingredients shown, 
            // the customer should be able to use them.
            return { ...state,
                     aIngredients : stateInitialBurgerIngredients.aIngredients,
                     bIsRequesting : false,
                     bIsRequestFailed: true };
        }

        default: {
            return state;
        }

    };
};
