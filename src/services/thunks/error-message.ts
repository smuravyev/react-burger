import { ERROR_RAISE } from '../actions/error-message';

import type { TAppThunk } from '../store';

export const setError : TAppThunk = (sErrorMessage : string,
                                     bCanProceed : boolean = false) =>
                                                                   dispatch => {
    dispatch({ type : ERROR_RAISE,
               payload : { sMessage : sErrorMessage,
                           bCanProceed : bCanProceed }});
};