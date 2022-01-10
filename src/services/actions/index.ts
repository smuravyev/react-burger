import { TAppAction } from './app';
import { TAuthorizationAction } from './authorization';
import { TBurgerIngredientsAction } from './burger-ingredients';
import { TBurgerConstructorAction } from './burger-constructor';
import { TErrorMessageAction } from './error-message';
import { TOrderDetailsAction } from './order-details';
import { TFeedAction } from './feed';
import { TSocketMiddlewareAction } from '../middleware/socket-middleware';

export type TApplicationAction = TAppAction |
                                 TAuthorizationAction |
                                 TBurgerIngredientsAction |
                                 TBurgerConstructorAction |
                                 TErrorMessageAction |
                                 TOrderDetailsAction |
                                 TFeedAction | 
                                 TSocketMiddlewareAction;

