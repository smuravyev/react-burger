import { BUSY_SET,
         BUSY_CLEAR } from '../action-types/app';

export { BUSY_SET,
         BUSY_CLEAR };

export interface IBusySetAction {
    readonly type : typeof BUSY_SET;
};

export interface IBusyClearAction {
    readonly type : typeof BUSY_CLEAR;
};

export type TAppAction = IBusyClearAction |
                         IBusySetAction;
                         
export const setIsBusyAction = () : IBusySetAction => ({ type: BUSY_SET });

export const clearIsBusyAction = () : IBusyClearAction => ({ type: BUSY_CLEAR });