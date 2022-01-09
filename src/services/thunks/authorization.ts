import Cookies from 'js-cookie';

import type { TAppThunk, 
              TRootState } from '../store';

import { setIsBusyAction,
         clearIsBusyAction } from '../actions/app';

import { setLoginRequestAction, 
         setLoginFailedAction, 
         setLoginSuccessAction,
         setUserAction,
         setForgotPasswordRequestAction,
         setForgotPasswordFailedAction,
         setForgotPasswordSuccessAction,
         saveEnteredEmailAction,
         setResetPasswordRequestAction,
         setResetPasswordFailedAction,
         setResetPasswordSuccessAction,
         resetForgotPasswordDataAction,
         setRegisterUserRequestAction,
         setRegisterUserSuccessAction,
         setRegisterUserFailedAction,
         setAuthCheckDoneAction,
         resetUserAction,
         setUpdateUserRequestAction,
         setUpdateUserFailedAction,
         setUpdateUserSuccessAction } from '../actions/authorization';

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
   dispatch(setIsBusyAction());
    try{
        dispatch(setLoginRequestAction());
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
                dispatch(setLoginFailedAction());
                dispatch(setError(oErrorCodes.EC_CANNOT_LOGIN, true));
            }
            else{
                saveTokens({ accessToken: oData.accessToken,
                             refreshToken: oData.refreshToken });
                dispatch(setLoginSuccessAction());
                dispatch(setUserAction(oData["user"]["email"], 
                                       oData["user"]["name"]));
            }
        }
        else{
            dispatch(setLoginFailedAction());
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
        dispatch(setLoginFailedAction());
        dispatch(setError(oErrorCodes.EC_ERROR_LOGGING_IN, true));
    }
    finally{
        dispatch(clearIsBusyAction());
    }
};

export const requestForgotPassword : TAppThunk =
                                           ({ sEmail } : { sEmail : string }) =>
                                                             async dispatch => {
   dispatch(setIsBusyAction());
    try{
        dispatch(setForgotPasswordRequestAction());
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
                dispatch(setForgotPasswordFailedAction());
                dispatch(setError(oErrorCodes.EC_CANNOT_FIND_EMAIL, true));
            }
            else{
                dispatch(setForgotPasswordSuccessAction());
                dispatch(saveEnteredEmailAction(sEmail));
            }
        }
        else{
            dispatch(setForgotPasswordSuccessAction());
            dispatch(setError(oErrorCodes.EC_ERROR_FORGOT_PASSWORD, true));
        }
    }
    catch(_){
        dispatch(setForgotPasswordSuccessAction());
        dispatch(setError(oErrorCodes.EC_ERROR_FORGOT_PASSWORD, true));
    }
    finally{
        dispatch(clearIsBusyAction());
    }
};

export const requestResetPassword : TAppThunk =
          ({ sNewPassword, sCode } : { sNewPassword : string, sCode: string}) =>
                                                 async (dispatch, getState) => {
    dispatch(setIsBusyAction());
    try{
        dispatch(setResetPasswordRequestAction());
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
                dispatch(setResetPasswordFailedAction());
                dispatch(setError(oErrorCodes.EC_CANNOT_RESET_PASSWORD, true));
            }
            else{
                dispatch(setResetPasswordSuccessAction());
                dispatch(resetForgotPasswordDataAction());
                const store : TRootState = getState();
                const sEmail = store.authorization.sEnteredEmail;
                dispatch(requestLogin({sEmail : sEmail,
                                       sPassword: sNewPassword}));
            }
        }
        else{
            dispatch(setResetPasswordFailedAction());
            dispatch(setError(oErrorCodes.EC_ERROR_RESET_PASSWORD, true));
        }
    }
    catch(_){
        dispatch(setResetPasswordFailedAction());
        dispatch(setError(oErrorCodes.EC_ERROR_RESET_PASSWORD, true));
    }
    finally{
        dispatch(clearIsBusyAction());
    }
};

export const requestRegisterUser : TAppThunk =
                      ({ sEmail, sPassword, sName } :
                       { sEmail: string, sPassword: string, sName: string }) =>
                                                             async dispatch => {
    dispatch(setIsBusyAction());
    try{
        dispatch(setRegisterUserRequestAction());
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
                dispatch(setRegisterUserFailedAction());
                dispatch(setError(oErrorCodes.EC_CANNOT_REGISTER_USER, true));
            }
            else{
                saveTokens(oData);
                dispatch(setRegisterUserSuccessAction());
                dispatch(setUserAction(oData["user"]["email"],
                                       oData["user"]["name"]));
            }
        }
        else{
            dispatch(setRegisterUserFailedAction());
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
        dispatch(setRegisterUserFailedAction());
        dispatch(setError(oErrorCodes.EC_ERROR_REGISTERING_USER, true));
    }
    finally{
        dispatch(clearIsBusyAction());
    }
};

export const requestAuthorizationCheck : TAppThunk =
      (callback : ( () => void ) | undefined = undefined) => async dispatch => {
    dispatch(setIsBusyAction());
    try{
        if(Cookies.get('accessToken')){
            const oUser = await fetchWithAuth(oSettings.sAPIBaseURL + 
                                                   oSettings.oAPIURIS.sUserData,
                                        { method: "GET",
                                          headers:
                           new Headers({"Content-Type" : "application/json"})});
            if(oUser.success){
                const oUserData = oUser as IUserDataResult;
                dispatch(setUserAction(oUserData["user"]["email"],
                                      oUserData["user"]["name"]));
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
        dispatch(clearIsBusyAction());
        dispatch(setAuthCheckDoneAction());
    }
};

export const updateUser : TAppThunk = ({ oProfile } :
                                           { oProfile : { name: string,
                                                          email: string,
                                                          password: string}}) =>
                                                             async dispatch => {
    dispatch(setIsBusyAction());
    try{
        //Start requesting...
        dispatch(setUpdateUserRequestAction());
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
            dispatch(setUpdateUserFailedAction());
            dispatch(setError(oErrorCodes.EC_CANNOT_UPDATE_USER, true));
        }
        else{
            const oUserData  = oData as IUserDataResult;
            dispatch(setUpdateUserSuccessAction());
            dispatch(setUserAction(oUserData["user"]["email"],
                                   oUserData["user"]["name"]));
        }
    }
    catch(_){
        dispatch(setUpdateUserFailedAction());
        dispatch(setError(oErrorCodes.EC_ERROR_UPDATING_USER, true));
    }
    finally{
        dispatch(clearIsBusyAction());
    }
};

export const exitRequest : TAppThunk = () => async dispatch => {
    dispatch(setIsBusyAction());
    
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
        dispatch(resetUserAction());
        dispatch(clearIsBusyAction());
    }
};