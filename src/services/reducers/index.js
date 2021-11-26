import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import { reducerBurgerIngredients } from './burger-ingredients';
import { reducerBurgerConstructor } from './burger-constructor';
import { reducerIngredientDetails } from './ingredient-details';
import { reducerOrderDetails } from './order-details';
import { reducerApp } from './app';
import { reducerErrorMessage } from './error-message';
import { reducerAuthorization } from './authorization';

export const reducerRoot = combineReducers({
    app: reducerApp,
    authorization: reducerAuthorization,
    burgerIngredients: reducerBurgerIngredients,
    constructedBurger: undoable(reducerBurgerConstructor),
    currentIngredient : reducerIngredientDetails,
    orderDetails : reducerOrderDetails,
    errorMessage: reducerErrorMessage
});

