import { ERROR_RAISE,
         ERROR_CLEAR } from '../action-types/error-message';
         
import { setError } from '../thunks/error-message';

export { ERROR_RAISE,
         ERROR_CLEAR,
         setError };

export interface IErrorRaiseAction {
    readonly type : typeof ERROR_RAISE;
    readonly payload : {
        readonly sMessage : string;
        readonly bCanProceed : boolean;
    };
};

export interface IErrorClearAction {
    readonly type : typeof ERROR_CLEAR;
};

export type TErrorMessageAction = IErrorRaiseAction |
                                  IErrorClearAction;