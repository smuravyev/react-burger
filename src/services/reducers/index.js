import { combineReducers } from 'redux';

import { reducerBurgerIngredients } from './burger-ingredients';
import { reducerBurgerConstructor } from './burger-constructor';
import { reducerIngredientDetails } from './ingredient-details';
import { reducerOrderDetails } from './order-details';
import { reducerApp } from './app'
import { reducerErrorMessage } from './error-message'  

export const reducerRoot = combineReducers({
    app: reducerApp,
    burgerIngredients: reducerBurgerIngredients,
    constructedBurger: reducerBurgerConstructor,
    currentIngredient : reducerIngredientDetails,
    orderDetails : reducerOrderDetails,
    errorMessage: reducerErrorMessage
});

