import type { Location as ILocation } from 'react-router-dom';

import { oIngredientDragTypes } from './constants';

export type TBackgroundLocationState = {
    oBackground: ILocation
} | null | undefined; 

export type TIngredientType = "bun" | "sauce" | "main";

export interface IPureIngredient {
    readonly name : string;
    readonly calories : number;
    readonly carbohydrates : number;
    readonly proteins : number;
    readonly fat : number;
    readonly image_large : string;
};

export interface IIngredient extends IPureIngredient {
   readonly _id : string;
   readonly type : TIngredientType;
   readonly price : number;
   readonly image: string;
   readonly image_mobile? : string;
   readonly __v : number;
};

export interface IDraggableIngredient extends IIngredient{
    nIndex? : number,
    sInnerID? : string,
    sDragType? :
                 typeof oIngredientDragTypes[keyof typeof oIngredientDragTypes];
};

export type TArrayOfIngredients = Array<{ sName : string;
                                          sType : TIngredientType
                                          aSet: Array<IDraggableIngredient> }>; 

export type TToASCIIFunction = ((input: string) => string);
export type TToUnicodeFunction = ((input: string) => string);

export interface IUser {
    readonly email :  string,
    readonly name : string
};

export interface IAPIRequestData {
    readonly success : boolean;
};

export interface ILoginRequestData extends IAPIRequestData {
    readonly user: IUser;
    readonly accessToken : string;
    readonly refreshToken : string;
};

export interface IRegisterUserRequestData extends IAPIRequestData {
    readonly user: IUser;
    readonly accessToken : string;
    readonly refreshToken : string;
};

export interface IForgotPasswordRequestData extends IAPIRequestData {
    readonly message?: string;
};

export interface IResetPasswordRequestData extends IAPIRequestData {
    readonly message?: string;
};

export interface IAPIErrorData {
    readonly message?: string;
};

export interface IIngredientsRequestData extends IAPIRequestData {
    readonly data : Array<IIngredient>;
}

export type TOrderStatus = "done" | "cancelled" | "pending" | "created"; 

export interface IOrderProperties {
    _id : string;
    status: TOrderStatus;
    name : string;
    createdAt : string;
    updatedAt : string;
    number: number;
};

export interface IOrderWithIngredientsProperties extends IOrderProperties {
    ingredients : Array<string>;
};

export interface IProcessedForFeedIngredient {
        price?: number;
        image: string;
        type?: string;
        name?: string;
};

export interface IOrderWithProcessedIngredientsProperties
                                                       extends IOrderProperties{
    ingredients : Array<IProcessedForFeedIngredient>;
    price : number;
};

export interface IOrdersFeedData {
    success : boolean;
    orders : Array<IOrderWithIngredientsProperties>;
    total : number,
    totalToday: number;
    message?: string;    
};

export interface IProcessedOrdersFeedData {
    aOrders : Array<IOrderWithProcessedIngredientsProperties>;
    nTotal : number,
    nTotalToday : number,
    aReadyOrders : Array<Array<number>>;
    aPendingOrders : Array<Array<number>>;
};

export interface IOrderNumberAndTime {
    nNumber: number;
    nTimeUpdated : number;
};