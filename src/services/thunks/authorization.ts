import Cookies from 'js-cookie';

import type { TAppThunk, 
              TRootState } from '../store';

import { BUSY_SET,
         BUSY_CLEAR } from '../actions/app';

import { LOGIN_REQUEST, 
         LOGIN_FAILED, 
         LOGIN_SUCCESS,
         SET_USER,
         FORGOT_PASSWORD_REQUEST,
         FORGOT_PASSWORD_FAILED,
         FORGOT_PASSWORD_SUCCESS,
         SAVE_ENTERED_EMAIL,
         RESET_PASSWORD_REQUEST,
         RESET_PASSWORD_FAILED,
         RESET_PASSWORD_SUCCESS,
         RESET_FORGOT_PASSWORD_DATA,
         REGISTER_USER_REQUEST,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_FAILED,
         AUTH_CHECK_DONE,
         RESET_USER,
         UPDATE_USER_REQUEST,
         UPDATE_USER_FAILED,
         UPDATE_USER_SUCCESS } from '../actions/authorization';

import { setError } from '../actions/error-message';

import { oErrorCodes } from '../../utils/constants';

import { oSettings } from '../../config/config';

import { fetchWithAuth, saveTokens } from '../../utils/functions';

import type { IUserDataResult } from '../../utils/functions'; 

import type { TToASCIIFunction,
              IAPIErrorData,
              IForgotPasswordRequestData,
              IResetPasswordRequestData,
              IRegisterUserRequestData,
              ILoginRequestData } from '../../utils/types';

export const requestLogin : TAppThunk =
            ({ sEmail, sPassword } : { sEmail : string, sPassword : string }) =>
                                                             async dispatch => {
   dispatch({ type: BUSY_SET });
    try{
        dispatch({type: LOGIN_REQUEST});
        const punycode : { toASCII : TToASCIIFunction } = require("punycode/");
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
            const oData : ILoginRequestData = await oResponse.json();
            if(!(oData.success)){
                dispatch({ type: LOGIN_FAILED });
                dispatch(setError(oErrorCodes.EC_CANNOT_LOGIN, true));
            }
            else{
                saveTokens({ accessToken: oData.accessToken,
                             refreshToken: oData.refreshToken });
                dispatch({type: LOGIN_SUCCESS});
                dispatch({type: SET_USER,
                          payload: { sEmail : oData["user"]["email"],
                                     sName : oData["user"]["name"] }});
            }
        }
        else{
            dispatch({ type: LOGIN_FAILED });
            const oData : IAPIErrorData = await oResponse.json();
            if(oData.message === "email or password are incorrect"){
                dispatch(setError(oErrorCodes.EC_INVALID_PASSWORD, true));
            }
            else{
                dispatch(setError(oErrorCodes.EC_ERROR_LOGGING_IN, true));           
            }
        }
    }
    catch(_){
        dispatch({ type: LOGIN_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_LOGGING_IN, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const requestForgotPassword : TAppThunk =
                                           ({ sEmail } : { sEmail : string }) =>
                                                             async dispatch => {
   dispatch({ type: BUSY_SET });
    try{
        dispatch({type: FORGOT_PASSWORD_REQUEST});
        const punycode : { toASCII : TToASCIIFunction } = require("punycode/");
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
            const oData : IForgotPasswordRequestData = await oResponse.json();
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
    catch(_){
        dispatch({ type: FORGOT_PASSWORD_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_FORGOT_PASSWORD, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const requestResetPassword : TAppThunk =
          ({ sNewPassword, sCode } : { sNewPassword : string, sCode: string}) =>
                                                 async (dispatch, getState) => {
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
            const oData : IResetPasswordRequestData = await oResponse.json();
            if(!(oData.success)){
                dispatch({ type: RESET_PASSWORD_FAILED });
                dispatch(setError(oErrorCodes.EC_CANNOT_RESET_PASSWORD, true));
            }
            else{
                dispatch({type: RESET_PASSWORD_SUCCESS});
                dispatch({type: RESET_FORGOT_PASSWORD_DATA});
                const store : TRootState = getState();
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
    catch(_){
        dispatch({ type: RESET_PASSWORD_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_RESET_PASSWORD, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const requestRegisterUser : TAppThunk =
                      ({ sEmail, sPassword, sName } :
                       { sEmail: string, sPassword: string, sName: string }) =>
                                                             async dispatch => {
    dispatch({ type: BUSY_SET });
    try{
        dispatch({type: REGISTER_USER_REQUEST});
        const punycode : { toASCII : TToASCIIFunction } = require("punycode/");
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
            const oData : IRegisterUserRequestData = await oResponse.json();
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
            const oData : IAPIErrorData = await oResponse.json();
            if(oData.message === "User already exists"){
                dispatch(setError(oErrorCodes.EC_USER_ALREADY_EXISTS, true));
            }
            else{
                dispatch(setError(oErrorCodes.EC_ERROR_REGISTERING_USER, true));           
            }
        }
    }
    catch(_){
        dispatch({ type: REGISTER_USER_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_REGISTERING_USER, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const requestAuthorizationCheck : TAppThunk =
      (callback : ( () => void ) | undefined = undefined) => async dispatch => {
    dispatch({ type: BUSY_SET });
    try{
        if(Cookies.get('accessToken')){
            const oUser = await fetchWithAuth(oSettings.sAPIBaseURL + 
                                                   oSettings.oAPIURIS.sUserData,
                                        { method: "GET",
                                          headers:
                           new Headers({"Content-Type" : "application/json"})});
            if(oUser.success){
                const oUserData = oUser as IUserDataResult;
                dispatch({ type: SET_USER,
                           payload: { sEmail : oUserData["user"]["email"],
                                      sName : oUserData["user"]["name"] }});
               if(typeof callback === "function"){
                   callback();
                }
            }
        } 
    }
    catch(_){
        //Do nothing, we are not authorized, so... Silently ignoring
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
        dispatch({ type: AUTH_CHECK_DONE });
    }
};

export const updateUser : TAppThunk = ({ oProfile } :
                                           { oProfile : { name: string,
                                                          email: string,
                                                          password: string}}) =>
                                                             async dispatch => {
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
            const oUserData  = oData as IUserDataResult;
            dispatch({ type: UPDATE_USER_SUCCESS });
            dispatch({ type: SET_USER,
                       payload: { sEmail : oUserData["user"]["email"],
                                  sName : oUserData["user"]["name"] }});
        }
    }
    catch(_){
        dispatch({ type: UPDATE_USER_FAILED });
        dispatch(setError(oErrorCodes.EC_ERROR_UPDATING_USER, true));
    }
    finally{
        dispatch({ type: BUSY_CLEAR });
    }
};

export const exitRequest : TAppThunk = () => async dispatch => {
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
    catch(_){
        //Do nothing! Error? Does not matter.
    }
    finally{
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        dispatch({ type: RESET_USER });
        dispatch({ type: BUSY_CLEAR });
    }
};