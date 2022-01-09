import { GET_INGREDIENTS_REQUEST,
         GET_INGREDIENTS_SUCCESS,
         GET_INGREDIENTS_FAILED } from '../action-types/burger-ingredients';
         
import type { TArrayOfIngredients } from "../../utils/types";

import { getIngredients } from '../thunks/burger-ingredients';

export { GET_INGREDIENTS_REQUEST,
         GET_INGREDIENTS_SUCCESS,
         GET_INGREDIENTS_FAILED,
         getIngredients };

export interface IGetIngredientsRequestAction {
    readonly type : typeof GET_INGREDIENTS_REQUEST;
};

export interface IGetIngredientsSuccessAction {
    readonly type : typeof GET_INGREDIENTS_SUCCESS;
    readonly payload : {
        readonly aIngredients : TArrayOfIngredients;
    };
};

export interface IGetIngredientsFailedAction {
    readonly type : typeof GET_INGREDIENTS_FAILED;
};

export type TBurgerIngredientsAction = IGetIngredientsRequestAction |
                                       IGetIngredientsSuccessAction |
                                       IGetIngredientsFailedAction;

export const
           setGetIngredientsRequestAction = () : IGetIngredientsRequestAction =>
                                            ({ type: GET_INGREDIENTS_REQUEST });

export const setGetIngredientsFailedAction = () : IGetIngredientsFailedAction =>
                                             ({ type: GET_INGREDIENTS_FAILED });

export const
         setGetIngredientsSuccessAction = (aIngredients : TArrayOfIngredients) :
                                                 IGetIngredientsSuccessAction =>
                                 ({ type: GET_INGREDIENTS_SUCCESS,
                                    payload: { aIngredients : aIngredients } });