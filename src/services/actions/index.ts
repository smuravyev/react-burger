import { TAppAction } from './app';
import { TAuthorizationAction } from './authorization';
import { TBurgerIngredientsAction } from './burger-ingredients';
import { TBurgerConstructorAction } from './burger-constructor';
import { TErrorMessageAction } from './error-message';
import { TIngredientDetailsAction } from './ingredient-details';
import { TOrderDetailsAction } from './order-details';

export type TApplicationAction = TAppAction |
                                 TAuthorizationAction |
                                 TBurgerIngredientsAction |
                                 TBurgerConstructorAction |
                                 TErrorMessageAction |
                                 TIngredientDetailsAction |
                                 TOrderDetailsAction;


