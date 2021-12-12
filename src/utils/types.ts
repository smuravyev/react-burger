import type { Location as ILocation } from 'react-router-dom';

import { oIngredientDragTypes } from './constants';

export type TBackgroundLocationState = {
    oBackground: ILocation
} | null | undefined; 

export interface IAction<T> {
    readonly  type : string;
    readonly  payload : T;
};

export type TIngredientType = "bun" | "sauce" | "main";

export interface IIngredient {
   readonly _id : string;
   readonly name : string
   readonly type : TIngredientType;
   readonly proteins : number;
   readonly fat : number;
   readonly carbohydrates : number;
   readonly calories : number;
   readonly price : number;
   readonly image: string;
   readonly image_mobile? : string;
   readonly image_large: string;
   readonly __v : number;
};

export interface IDraggableIngredient extends IIngredient{
    nIndex? : number,
    sInnerID ? : string,
    sDragType? :
                 typeof oIngredientDragTypes[keyof typeof oIngredientDragTypes];
} 

export type TArrayOfIngredients = Array<{ sName : string;
                                          sType : TIngredientType
                                          aSet: Array<IDraggableIngredient> }>; 

export interface IArrayOfIngredients {
    aIngredients : TArrayOfIngredients; 
};

export interface ICurrentIngredient {
    oIngredient?: IIngredient;
};

export interface IOrderDetails {
    nOrderNumber : number;
};

export interface IErrorMessage {
    sMessage : string;
    bCanProceed : boolean;
};

export interface IAuthorizationPayload {
    sEmail? : string;
    sReturnPath? : string;
    sName? : string;
};

export interface IBurgerConstructorPayload {
    nIndex? : number,
    oIngredient? : IDraggableIngredient,
    sID? : string,
    nFirst? : number,
    nSecond? : number,
    oBun? : IDraggableIngredient
}

export type TCurrentIngredientAction =
                                 IAction<ICurrentIngredient | null | undefined>;
                                 
export type TOrderDetailsAction = IAction<IOrderDetails | null | undefined>;

export type TErrorMessageAction = IAction<IErrorMessage | null | undefined>;

export type TAuthorizationAction =
                              IAction<IAuthorizationPayload | null |undefined >;

export type TBurgerConstructorAction =
                          IAction<IBurgerConstructorPayload | null | undefined>;

export type TAppAction = IAction<never>;

export type TToASCIIFunction = ((input: string) => string);
export type TToUnicodeFunction = ((input: string) => string);