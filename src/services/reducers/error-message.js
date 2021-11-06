import { ERROR_RAISE,
         ERROR_CLEAR } from '../actions/error-message';
         
const stateInitialErrors= {
    aErrors : [],
    bCanProceedWithError : true
};

export const reducerErrorMessage = (state = stateInitialErrors, action) => {
    switch(action.type){
        case ERROR_RAISE: {
            // There could be several errors, so we have to save them all.
            // We can proceed only if ALL those errors came with
            // bCanProceed = true.
            return { ...state,
                     bCanProceedWithError : state.bCanProceedWithError &&
                                            action.payload.bCanProceed,
                     aErrors : [...state.aErrors, action.payload.sMessage]
            };
        }
        
        case ERROR_CLEAR: {
            return stateInitialErrors;
        }
        
        default: {
            return state;
        }
    }
}