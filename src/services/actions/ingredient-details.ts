import { SET_CURRENT_INGREDIENT,
         CLEAR_CURRENT_INGREDIENT } from '../action-types/ingredient-details';

import { IDraggableIngredient } from '../../utils/types';

export { SET_CURRENT_INGREDIENT,
         CLEAR_CURRENT_INGREDIENT };
         
export interface ISetCurrentIngredientAction {
    readonly type : typeof SET_CURRENT_INGREDIENT;
    readonly payload : {
        readonly oIngredient : IDraggableIngredient;
    }
};

export interface IClearCurrentIngredientAction {
    readonly type : typeof CLEAR_CURRENT_INGREDIENT;
};

export type TIngredientDetailsAction = ISetCurrentIngredientAction |
                                       IClearCurrentIngredientAction;