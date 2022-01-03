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