import { CLEAR_BURGER,
         ADD_INGREDIENT,
         REMOVE_INGREDIENT,
         SWAP_INGREDIENTS,
         SET_BUN } from '../action-types/burger-constructor';

import type { IDraggableIngredient } from '../../utils/types';

import { moveIngredient,
         addIngredient,
         addIngredientBefore,
         addIngredientAfter,
         moveIngredientBefore,
         moveIngredientAfter } from '../thunks/burger-constructor';
         
export { CLEAR_BURGER,
         ADD_INGREDIENT,
         REMOVE_INGREDIENT,
         SWAP_INGREDIENTS,
         SET_BUN,
         moveIngredient,
         addIngredient,
         addIngredientBefore,
         addIngredientAfter,
         moveIngredientBefore,
         moveIngredientAfter };

export interface IClearBurgerAction {
    readonly type : typeof CLEAR_BURGER;
};

export interface IAddIngredientAction {
    readonly type : typeof ADD_INGREDIENT;
    readonly payload : {
        readonly nIndex : number;
        readonly oIngredient : IDraggableIngredient;
    };
};

export interface IRemoveIngredientAction {
    readonly type : typeof REMOVE_INGREDIENT;
    readonly payload : {
        readonly sID : string;
    }
};

export interface ISwapIngredientsAction {
    readonly type : typeof SWAP_INGREDIENTS;
    readonly payload : {
        readonly nFirst : number;
        readonly nSecond : number;
    }
};

export interface ISetBunAction {
    readonly type : typeof SET_BUN;
    readonly payload : {
        readonly oBun : IDraggableIngredient;
    }
};

export type TBurgerConstructorAction = IClearBurgerAction | 
                                       IAddIngredientAction |
                                       IRemoveIngredientAction |
                                       ISwapIngredientsAction |
                                       ISetBunAction;

export const clearBurgerAction = () : IClearBurgerAction =>
                                                       ({ type: CLEAR_BURGER });

export const addIngredientAction = (nIndex : number,
                                    oIngredient : IDraggableIngredient) :
                                                         IAddIngredientAction =>
                                    ({ type: ADD_INGREDIENT,
                                       payload: { nIndex : nIndex,
                                                  oIngredient: oIngredient } });

export const
            removeIngredientAction = (sID : string) : IRemoveIngredientAction =>
                                                   ({ type: REMOVE_INGREDIENT,
                                                      payload: { sID : sID } });

export const
          swapIngredientsAction = (nFirst: number,
                                   nSecond : number) : ISwapIngredientsAction =>
                                            ({ type: SWAP_INGREDIENTS,
                                               payload: { nFirst: nFirst,
                                                          nSecond: nSecond } });

export const setBunAction = (oBun : IDraggableIngredient) : ISetBunAction => 
                                                 ({ type : SET_BUN,
                                                    payload: { oBun : oBun } });