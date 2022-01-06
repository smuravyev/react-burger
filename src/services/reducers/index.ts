import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import { reducerBurgerIngredients } from './burger-ingredients';
import { reducerBurgerConstructor } from './burger-constructor';
import { reducerOrderDetails } from './order-details';
import { reducerApp } from './app';
import { reducerErrorMessage } from './error-message';
import { reducerAuthorization } from './authorization';

export const reducerRoot = combineReducers({
    app: reducerApp,
    authorization: reducerAuthorization,
    constructedBurger: undoable(reducerBurgerConstructor),
    burgerIngredients: reducerBurgerIngredients,
    orderDetails : reducerOrderDetails,
    errorMessage: reducerErrorMessage
});

