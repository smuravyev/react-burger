import { errorRaiseAction } from '../actions/error-message';

import type { TAppThunk  } from '../store';

export const setError : TAppThunk = (sErrorMessage : string,
                                     bCanProceed : boolean = false) =>
                                                                   dispatch => {
    dispatch(errorRaiseAction(sErrorMessage,bCanProceed));
};