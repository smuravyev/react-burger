import Cookies from 'js-cookie';

import { BUSY_SET,
         BUSY_CLEAR } from './app';

import { setError } from './error-message';

import { oErrorCodes } from '../../utils/constants';

import { oSettings } from '../../config/config';

import { fetchWithAuth, saveTokens } from '../../utils/functions'; 

export const SAVE_ENTERED_EMAIL = '@Authorization/SAVE_ENTERED_EMAIL';
export const FORGOT_PASSWORD_REQUEST = '@Authorization/FORGOT_PASSWORD_REQUEST';
export const RESET_FORGOT_PASSWORD_DATA =
                                    '@Authorization/RESET_FORGOT_PASSWORD_DATA';
export const FORGOT_PASSWORD_SUCCESS = '@Authorization/FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = '@Authorization/FORGOT_PASSWORD_FAILED';
export const RESET_PASSWORD_REQUEST = '@Authorization/RESET_PASSWORD_RESET';
export const RESET_RESET_PASSWORD_DATA =
                                     '@Authorization/RESET_RESET_PASSWORD_DATA';
export const RESET_PASSWORD_SUCCESS = '@Authorization/RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = '@Authorization/RESET_PASSWORD_FAILED';
export const REGISTER_USER_REQUEST = '@Authorization/REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = '@Authorization/REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = '@Authorization/REGISTER_USER_FAILED';
export const RESET_REGISTER_USER_DATA =
                                      '@Authorization/RESET_REGISTER_USER_DATA';
export const LOGIN_REQUEST = '@Authorization/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@Authorization/LOGIN_SUCCESS';
export const LOGIN_FAILED = '@Authorization/LOGIN_FAILED';
export const RESET_LOGIN_DATA = '@Authorization/RESET_LOGIN_DATA';

export const UPDATE_USER_REQUEST = '@Authorization/UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = '@Authorization/UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = '@Authorization/UPDATE_USER_FAILED';

export const SET_USER = '@Authorization/SET_USER';
export const RESET_USER = '@Authorization/RESET_USER';
export const SET_RETURN_PATH = '@Authorization/SET_RETURN_PATH';
export const AUTH_CHECK_DONE = '@Authorization/AUTH_CHECK_DONE';

export const requestLogin = ({ sEmail,
                               sPassword }) => async (dispatch) => {
   dispatch({ type: BUSY_SET });
    try{
        dispatch({type: LOGIN_REQUEST});
        const punycode = require("punycode/");
        const oResponse =
            await fetch(oSettings.sAPIBaseURL +
                                             oSettings.oAPIURIS.sLogin,
                             { method: 'POST',
                               cache: 'no-cache',
                               headers: { 'Content-Type': 'application/json' },
                               redirect: 'follow',
                               body: JSON.stringify({"email":
                                                       punycode.toASCII(sEmail),
                                                     "password" : sPassword})});
       if(oResponse.ok){
            const oData = await oResponse.json();
            if(!(oData.success)){
                dispatch({ type: LOGIN_FAILED });
                dispatch(setError(oErrorCodes.EC_CANNOT_LOGIN, true));
            }
            else{
                saveTokens(oData);
                dispatch({type: LOGIN_SUCCESS});
                dispatch({type: SET_USER,
                          payload: { sEmail : oData["user"]["email"],
                                     sName : oData["user"]["name"] }});
            }
        }
        else{
            dispatch({ type: LOGIN_FAILED });
            const oData = await oResponse.json();
            if(oData.message === "email or password are incorrect"){
                dispatch(setError(oErrorCodes.EC_INVALID_PASSWORD, true));
            }
            else{
                dispatch(setError(oErrorCodes.EC_ERROR_LOGGING_IN, true));           
            }
        }
    }
    catch(erError){
        dispatch({ type: LOGIN_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_LOGGING_IN, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const requestForgotPassword = ({ sEmail }) => async (dispatch) => {
   dispatch({ type: BUSY_SET });
    try{
        dispatch({type: FORGOT_PASSWORD_REQUEST});
        const punycode = require("punycode/");
        const oResponse =
            await fetch(oSettings.sAPIBaseURL +
                                             oSettings.oAPIURIS.sForgotPassword,
                             { method: 'POST',
                               cache: 'no-cache',
                               headers: { 'Content-Type': 'application/json' },
                               redirect: 'follow',
                               body: JSON.stringify({"email":
                                                   punycode.toASCII(sEmail)})});
        if(oResponse.ok){
            const oData = await oResponse.json();
            if(!(oData.success)){
                dispatch({ type: FORGOT_PASSWORD_FAILED });
                dispatch(setError(oErrorCodes.EC_CANNOT_FIND_EMAIL, true));
            }
            else{
                dispatch({type: FORGOT_PASSWORD_SUCCESS});
                dispatch({type: SAVE_ENTERED_EMAIL,
                          payload: { sEmail : sEmail}});
            }
        }
        else{
            dispatch({ type: FORGOT_PASSWORD_FAILED });
            dispatch(setError(oErrorCodes.EC_ERROR_FORGOT_PASSWORD, true));
        }
    }
    catch(erError){
        dispatch({ type: FORGOT_PASSWORD_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_FORGOT_PASSWORD, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const requestResetPassword = ({ sNewPassword,
                                       sCode }) => async (dispatch,
                                                          getState) => {
    dispatch({ type: BUSY_SET });

    try{
        dispatch({type: RESET_PASSWORD_REQUEST});
        const oResponse =
            await fetch(oSettings.sAPIBaseURL +
                                              oSettings.oAPIURIS.sResetPassword,
                             { method: 'POST',
                               cache: 'no-cache',
                               headers: { 'Content-Type': 'application/json' },
                               redirect: 'follow',
                               body: JSON.stringify({"password" : sNewPassword,
                                                     "token" : sCode })});
        if(oResponse.ok){
            const oData = await oResponse.json();
            if(!(oData.success)){
                dispatch({ type: RESET_PASSWORD_FAILED });
                dispatch(setError(oErrorCodes.EC_CANNOT_RESET_PASSWORD, true));
            }
            else{
                dispatch({type: RESET_PASSWORD_SUCCESS});
                dispatch({type: RESET_FORGOT_PASSWORD_DATA});
                const store = getState();
                const sEmail = store.authorization.sEnteredEmail;
                dispatch(requestLogin({sEmail : sEmail,
                                       sPassword: sNewPassword}));
            }
        }
        else{
            dispatch({ type: RESET_PASSWORD_FAILED });
            dispatch(setError(oErrorCodes.EC_ERROR_RESET_PASSWORD, true));
        }
    }
    catch(erError){
        dispatch({ type: RESET_PASSWORD_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_RESET_PASSWORD, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const requestRegisterUser = ({ sEmail,
                                      sPassword,
                                      sName}) => async (dispatch) => {
    dispatch({ type: BUSY_SET });
    try{
        dispatch({type: REGISTER_USER_REQUEST});
        const punycode = require("punycode/");
        const oResponse =
            await fetch(oSettings.sAPIBaseURL +
                                               oSettings.oAPIURIS.sRegisterUser,
                             { method: 'POST',
                               cache: 'no-cache',
                               headers: { 'Content-Type': 'application/json' },
                               redirect: 'follow',
                               body: JSON.stringify({"email" :
                                                       punycode.toASCII(sEmail),
                                                     "password" : sPassword,
                                                     "name" : sName })});
        if(oResponse.ok){
            const oData = await oResponse.json();
            if(!(oData.success)){
                dispatch({ type: REGISTER_USER_FAILED });
                dispatch(setError(oErrorCodes.EC_CANNOT_REGISTER_USER, true));
            }
            else{
                saveTokens(oData);
                dispatch({type: REGISTER_USER_SUCCESS});
                dispatch({type: SET_USER,
                          payload: { sEmail : oData["user"]["email"],
                                     sName : oData["user"]["name"] }});
            }
        }
        else{
            dispatch({ type: REGISTER_USER_FAILED });
            const oData = await oResponse.json();
            if(oData.message === "User already exists"){
                dispatch(setError(oErrorCodes.EC_USER_ALREADY_EXISTS, true));
            }
            else{
                dispatch(setError(oErrorCodes.EC_ERROR_REGISTERING_USER, true));           
            }
        }
    }
    catch(erError){
        dispatch({ type: REGISTER_USER_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_REGISTERING_USER, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const requestAuthorizationCheck = () => async (dispatch) => {
    dispatch({ type: BUSY_SET });
    try{
        if(Cookies.get('accessToken')){
            const oUser = await fetchWithAuth(oSettings.sAPIBaseURL + 
                                                   oSettings.oAPIURIS.sUserData,
                                        { method: "GET",
                                          headers:
                           new Headers({"Content-Type" : "application/json"})});
            if(oUser.success){
                dispatch({ type: SET_USER,
                           payload: { sEmail : oUser["user"]["email"],
                                     sName : oUser["user"]["name"] }});
            }
        } 
    }
    catch(erError){
        //Do nothing, we are not authorized, so... Silently ignoring
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
        dispatch({ type: AUTH_CHECK_DONE });
    }
};

export const updateUser = ({ oProfile }) => async (dispatch) => {
    dispatch({type: BUSY_SET});
    try{
        //Start requesting...
        dispatch({type: UPDATE_USER_REQUEST});
        const oData =
             await fetchWithAuth(oSettings.sAPIBaseURL +
                                 oSettings.oAPIURIS.sUserData,
                                 { method: 'PATCH',
                                   cache: 'no-cache',
                                   headers: new Headers({'Content-Type':
                                                      'application/json' }),
                                   redirect: 'follow',
                                   body: JSON.stringify(oProfile)});
        if((!(oData.success))){
            dispatch({ type: UPDATE_USER_FAILED });
            dispatch(setError(oErrorCodes.EC_CANNOT_UPDATE_USER, true));
        }
        else{
            dispatch({ type: UPDATE_USER_SUCCESS });
            dispatch({ type: SET_USER,
                       payload: { sEmail : oData["user"]["email"],
                                  sName : oData["user"]["name"] }});
        }
    }
    catch(erError){
        alert(erError.message);
        dispatch({ type: UPDATE_USER_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_UPDATING_USER, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const exitRequest = () => async (dispatch) => {
    dispatch({ type: BUSY_SET });
    
    // No error handling/response processing. Request sent to the bacekend,
    // cookies removed, data cleared, and we're done
    try{
        await fetch(oSettings.sAPIBaseURL + oSettings.oAPIURIS.sExit,
                    { method: 'POST',
                      cache: 'no-cache',
                      headers: { 'Content-Type': 'application/json' },
                      redirect: 'follow',
                      body: JSON.stringify({"token" :
                                                Cookies.get("refreshToken")})});
    }
    catch(erError){
        //Do nothing! Error? Does not matter.
    }
    finally{
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        dispatch({ type: RESET_USER });
        dispatch({ type: BUSY_CLEAR });
    }
};