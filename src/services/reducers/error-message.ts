import { ERROR_RAISE,
         ERROR_CLEAR } from '../actions/error-message';

import type { TErrorMessageAction } from '../../utils/types'; 
         
const stateInitialErrors = {
    aErrors : [] as Array<string>,
    bCanProceedWithError : true
};

export const reducerErrorMessage = (state = stateInitialErrors,
                                    action :TErrorMessageAction) => {
    switch(action.type){
        case ERROR_RAISE: {
            // There could be several errors, so we have to save them all.
            // We can proceed only if ALL those errors came with
            // bCanProceed = true.
            if((action.payload !== undefined) &&
               (action.payload !== null)){            
                return { ...state,
                     bCanProceedWithError : state.bCanProceedWithError &&
                                                     action.payload.bCanProceed,
                     aErrors : [...state.aErrors, action.payload.sMessage]
                };
            }
            else{
                return state;
            }
        }

        case ERROR_CLEAR: {
            return stateInitialErrors;
        }

        default: {
            return state;
        }
    }
}