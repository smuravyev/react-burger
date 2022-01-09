import { CLEAR_ORDER_NUMBER,
         ORDER_REQUEST,
         ORDER_SUCCESS,
         ORDER_FAILED } from '../action-types/order-details';

import { sendOrder } from '../thunks/order-details'; 
         
export { CLEAR_ORDER_NUMBER,
         ORDER_REQUEST,
         ORDER_SUCCESS,
         ORDER_FAILED,
         sendOrder };

export interface IClearOrderNumberAction {
    readonly type : typeof CLEAR_ORDER_NUMBER;
};

export interface IOrderRequestAction {
    readonly type : typeof ORDER_REQUEST;
};

export interface IOrderSuccessAction {
    readonly type : typeof ORDER_SUCCESS;
    readonly payload : {
        readonly nOrderNumber : number;
    };
};

export interface IOrderFailedAction {
    readonly type : typeof ORDER_FAILED;
};

export type TOrderDetailsAction = IClearOrderNumberAction |
                                  IOrderRequestAction |
                                  IOrderSuccessAction |
                                  IOrderFailedAction;
                                  
export const clearOrderNumberAction = () : IClearOrderNumberAction => 
                                                 ({ type: CLEAR_ORDER_NUMBER });

export const setOrderRequestAction = () : IOrderRequestAction =>
                                                      ({ type: ORDER_REQUEST });

export const
        setOrderSuccessAction = (nOrderNumber : number) : IOrderSuccessAction => 
                                 ({ type: ORDER_SUCCESS,
                                    payload: { nOrderNumber : nOrderNumber } });

export const setOrderFailedAction = () : IOrderFailedAction => 
                                                       ({ type: ORDER_FAILED });