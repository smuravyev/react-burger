import { FORGOT_PASSWORD_REQUEST,
         FORGOT_PASSWORD_SUCCESS,
         FORGOT_PASSWORD_FAILED,
         RESET_FORGOT_PASSWORD_DATA,
         RESET_PASSWORD_REQUEST,
         RESET_PASSWORD_SUCCESS,
         RESET_PASSWORD_FAILED,
         REGISTER_USER_REQUEST,
         REGISTER_USER_FAILED,
         REGISTER_USER_SUCCESS,
         LOGIN_REQUEST,
         LOGIN_FAILED,
         LOGIN_SUCCESS,
         SAVE_ENTERED_EMAIL,
         SET_USER,
         SET_RETURN_PATH,
         UPDATE_USER_REQUEST,
         UPDATE_USER_SUCCESS,
         UPDATE_USER_FAILED,
         AUTH_CHECK_DONE,
         RESET_USER } from '../action-types/authorization';

import { exitRequest,
         updateUser,
         requestAuthorizationCheck,
         requestResetPassword,
         requestForgotPassword,
         requestLogin,
         requestRegisterUser } from '../thunks/authorization'; 
 
export { FORGOT_PASSWORD_REQUEST,
         FORGOT_PASSWORD_SUCCESS,
         FORGOT_PASSWORD_FAILED,
         RESET_FORGOT_PASSWORD_DATA,
         RESET_PASSWORD_REQUEST,
         RESET_PASSWORD_SUCCESS,
         RESET_PASSWORD_FAILED,
         REGISTER_USER_REQUEST,
         REGISTER_USER_FAILED,
         REGISTER_USER_SUCCESS,
         LOGIN_REQUEST,
         LOGIN_FAILED,
         LOGIN_SUCCESS,
         SAVE_ENTERED_EMAIL,
         SET_USER,
         SET_RETURN_PATH,
         UPDATE_USER_REQUEST,
         UPDATE_USER_SUCCESS,
         UPDATE_USER_FAILED,
         AUTH_CHECK_DONE,
         RESET_USER,
         exitRequest,
         updateUser,
         requestAuthorizationCheck,
         requestResetPassword,
         requestForgotPassword,
         requestLogin,
         requestRegisterUser };

export interface IForgotPasswordRequestAction {
    readonly type : typeof FORGOT_PASSWORD_REQUEST;
};

export interface IForgotPasswordSuccessAction {
    readonly type : typeof FORGOT_PASSWORD_SUCCESS;
};

export interface IForgotPasswordFailedAction {
    readonly type : typeof FORGOT_PASSWORD_FAILED;
};

export interface IResetForgotPasswordDataAction {
    readonly type : typeof RESET_FORGOT_PASSWORD_DATA;
};

export interface IResetPasswordRequestAction {
    readonly type : typeof RESET_PASSWORD_REQUEST;
};

export interface IResetPasswordSuccessAction {
    readonly type : typeof RESET_PASSWORD_SUCCESS;
};

export interface IResetPasswordFailedAction {
    readonly type : typeof RESET_PASSWORD_FAILED;
};

export interface IRegisterUserRequestAction {
    readonly type : typeof REGISTER_USER_REQUEST;
};

export interface IRegisterUserSuccessAction {
    readonly type : typeof REGISTER_USER_SUCCESS;
};

export interface IRegisterUserFailedAction {
    readonly type : typeof REGISTER_USER_FAILED;
};

export interface ILoginRequestAction {
    readonly type : typeof LOGIN_REQUEST;
};

export interface ILoginSuccessAction {
    readonly type : typeof LOGIN_SUCCESS;
};

export interface ILoginFailedAction {
    readonly type : typeof LOGIN_FAILED;
};

export interface ISaveEnteredEmailAction {
    readonly type : typeof SAVE_ENTERED_EMAIL;
    readonly payload : {
        readonly sEmail : string;
    };
};

export interface ISetUserAction {
    readonly type : typeof SET_USER;
    readonly payload : {
        readonly sEmail : string;
        readonly sName : string;
    };
};

export interface ISetReturnPathAction {
    readonly type : typeof SET_RETURN_PATH;
    readonly payload : {
        readonly sReturnPath? : string;
    }
};

export interface IUpdateUserRequestAction {
    readonly type : typeof UPDATE_USER_REQUEST;
};

export interface IUpdateUserSuccessAction {
    readonly type : typeof UPDATE_USER_SUCCESS;
};

export interface IUpdateUserFailedAction {
    readonly type : typeof UPDATE_USER_FAILED;
};

export interface IAuthCheckDoneAction {
    readonly type : typeof AUTH_CHECK_DONE;
};

export interface IResetUserAction {
    readonly type : typeof RESET_USER;
};

export type TAuthorizationAction = IForgotPasswordRequestAction |
                                   IForgotPasswordSuccessAction |
                                   IForgotPasswordFailedAction |
                                   IResetForgotPasswordDataAction |
                                   IResetPasswordRequestAction |
                                   IResetPasswordSuccessAction |
                                   IResetPasswordFailedAction |
                                   IRegisterUserRequestAction |
                                   IRegisterUserSuccessAction |
                                   IRegisterUserFailedAction |
                                   ILoginRequestAction |
                                   ILoginSuccessAction |
                                   ILoginFailedAction | 
                                   ISaveEnteredEmailAction |
                                   ISetUserAction |
                                   ISetReturnPathAction |
                                   IUpdateUserRequestAction |
                                   IUpdateUserSuccessAction |
                                   IUpdateUserFailedAction |
                                   IAuthCheckDoneAction |
                                   IResetUserAction;

export const
           setForgotPasswordRequestAction = () : IForgotPasswordRequestAction =>
                                            ({ type: FORGOT_PASSWORD_REQUEST });

export const
           setForgotPasswordSuccessAction = () : IForgotPasswordSuccessAction =>
                                            ({ type: FORGOT_PASSWORD_SUCCESS });

export const
             setForgotPasswordFailedAction = () : IForgotPasswordFailedAction =>
                                             ({ type: FORGOT_PASSWORD_FAILED });

export const
          resetForgotPasswordDataAction = () : IResetForgotPasswordDataAction =>
                                         ({ type: RESET_FORGOT_PASSWORD_DATA });

export const setResetPasswordRequestAction = () : IResetPasswordRequestAction =>
                                            ({ type : RESET_PASSWORD_REQUEST });

export const setResetPasswordSuccessAction = () : IResetPasswordSuccessAction =>
                                             ({ type: RESET_PASSWORD_SUCCESS });

export const setResetPasswordFailedAction = () : IResetPasswordFailedAction =>
                                              ({ type: RESET_PASSWORD_FAILED });

export const setRegisterUserRequestAction = () : IRegisterUserRequestAction =>
                                             ({ type : REGISTER_USER_REQUEST });

export const setRegisterUserSuccessAction = () : IRegisterUserSuccessAction =>
                                              ({ type: REGISTER_USER_SUCCESS });

export const setRegisterUserFailedAction = () : IRegisterUserFailedAction =>
                                               ({ type: REGISTER_USER_FAILED });

export const setLoginRequestAction = () : ILoginRequestAction =>
                                                      ({ type: LOGIN_REQUEST });

export const setLoginFailedAction = () : ILoginFailedAction =>
                                                       ({ type: LOGIN_FAILED });

export const setLoginSuccessAction = () : ILoginSuccessAction =>
                                                      ({ type: LOGIN_SUCCESS });

export const
        saveEnteredEmailAction = (sEmail : string) : ISaveEnteredEmailAction =>
                                               ({ type: SAVE_ENTERED_EMAIL,
                                                  payload: { sEmail : sEmail}});

export const
            setUserAction = (sEmail : string, sName: string) : ISetUserAction =>
                                                ({ type: SET_USER,
                                                   payload: { sEmail : sEmail,
                                                               sName : sName}});
 
export const
    setReturnPathAction = (sReturnPath : string = "/") : ISetReturnPathAction => 
                                     ({ type: SET_RETURN_PATH,
                                        payload: { sReturnPath : sReturnPath}});

export const setUpdateUserRequestAction = () : IUpdateUserRequestAction =>
                                                ({ type: UPDATE_USER_REQUEST });

export const setUpdateUserSuccessAction = () : IUpdateUserSuccessAction =>
                                                ({ type: UPDATE_USER_SUCCESS });

export const setUpdateUserFailedAction = () : IUpdateUserFailedAction =>
                                                 ({ type: UPDATE_USER_FAILED });

export const setAuthCheckDoneAction = () : IAuthCheckDoneAction =>
                                                    ({ type: AUTH_CHECK_DONE });

export const resetUserAction = () : IResetUserAction => ({ type: RESET_USER }); 