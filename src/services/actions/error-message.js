export const ERROR_RAISE = '@ErrorMessage/ERROR_RAISE';
export const ERROR_CLEAR = '@ErrorMessage/ERROR_CLEAR';

export const setError = (sErrorMessage,
                              bCanProceed = false) => (dispatch) => {
    dispatch({ type : ERROR_RAISE,
               payload : { erError : new Error(sErrorMessage),
                           bCanProceed : bCanProceed }});
};