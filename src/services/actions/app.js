import { oSettings } from '../../config/config';

export const BUSY_SET = '@App/BUSY_SET';
export const BUSY_CLEAR = '@App/BUSY_CLEAR';
export const SET_CURRENT_PAGE = '@App/SET_CURRENT_PAGE';

export const setPage = (sPage) => (dispatch, getState) => {
    const oState = getState();
    if(oState.app.sCurrentPage !== sPage){
        dispatch({ type: SET_CURRENT_PAGE,
                   payload: { sPage : sPage }});
    }
}

export const setDefaultPage = () => (dispatch) => {
    dispatch(setPage(oSettings.sDefaultPage));
}
