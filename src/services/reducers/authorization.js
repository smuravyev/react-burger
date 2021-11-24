import { FORGOT_PASSWORD_REQUEST,
         FORGOT_PASSWORD_SUCCESS,
         FORGOT_PASSWORD_FAILED,
         RESET_FORGOT_PASSWORD_DATA,
         RESET_PASSWORD_REQUEST,
         RESET_PASSWORD_SUCCESS,
         RESET_PASSWORD_FAILED,
         RESET_RESET_PASSWORD_DATA,
         REGISTER_USER_REQUEST,
         REGISTER_USER_FAILED,
         REGISTER_USER_SUCCESS,
         RESET_REGISTER_USER_DATA,
         LOGIN_REQUEST,
         LOGIN_FAILED,
         LOGIN_SUCCESS,
         RESET_LOGIN_DATA,
         SAVE_ENTERED_EMAIL,
         SET_USER,
         SET_RETURN_PATH,
         UPDATE_USER_REQUEST,
         UPDATE_USER_SUCCESS,
         UPDATE_USER_FAILED,
         AUTH_CHECK_DONE,
         RESET_USER } from '../actions/authorization';

const stateInitialAuthorization = {
    sEnteredEmail : "",
    bIsForgotPasswordRequesting : false,
    bIsForgotPasswordRequestSuccess : false,
    bIsResetPasswordRequesting : false,
    bIsResetPasswordRequestSuccess : false,
    bIsRegisterUserRequesting : false,
    bIsRegisterUserSuccess : false,
    bIsLoginRequesting : false,
    bIsLoginRequestSuccess : false,
    bIsUpdateUserRequesting : false,
    bIsUpdateUserRequestSuccess : false,
    bIsUpdateUserRequestFailed : false,
    bIsUserSet : false,
    oUser : {},
    sReturnPath : '/',
    bAuthCheckDone : false
}
        
export const reducerAuthorization = (state = stateInitialAuthorization,
                                     action) => {
    switch(action.type){
        
        case UPDATE_USER_REQUEST: {
            return { ...state,
                     bIsUpdateUserRequsting: true,
                     bIsUpdateUserRequestSuccess : false,
                     bIsUpdateUserRequestFailed : false };
        }

        case UPDATE_USER_SUCCESS: {
            return { ...state,
                     bIsUpdateUserRequsting: false,
                     bIsUpdateUserRequestSuccess : true,
                     bIsUpdateUserRequestFailed : false };
        }

        case UPDATE_USER_FAILED: {
            return { ...state,
                     bIsUpdateUserRequsting: false,
                     bIsUpdateUserRequestSuccess : false,
                     bIsUpdateUserRequestFailed : true };
        }

        case AUTH_CHECK_DONE: {
            return { ...state,
                     bAuthCheckDone : true };
        }
        case SET_RETURN_PATH: {
            return { ...state,
                     sReturnPath: action.payload ? action.payload.sReturnPath
                                      : stateInitialAuthorization.sReturnPath };
        }
        
        // Email address saved in state unpunycoded! We don't want user to 
        // see xn--fsgfsg34. So we will convert it to punycode only upon
        // sending it to the server. And now we should unpunycode the data,
        // received from the server.
        case SET_USER: {
            const punycode = require("punycode/");
            return { ...state,
                     bIsUserSet : true,
                     oUser : { sEmail :
                                      punycode.toUnicode(action.payload.sEmail),
                               sName : action.payload.sName } };
        }

        case RESET_USER: {
            return { ...state,
                     bIsUserSet : false,
                     pUser : stateInitialAuthorization.oUser }
        }

        case LOGIN_REQUEST: {
            return { ...state,
                     bIsLoginRequesting : true,
                     bIsLoginRequestSuccess : false };
        }

        case RESET_LOGIN_DATA: {
            return { ...state,
                     bIsLoginRequesting : false,
                     bIsLoginRequestSuccess : false };
        }

        case LOGIN_SUCCESS: {
            return { ...state,
                     bIsLoginRequesting : false,
                     bIsLoginRequestSuccess : true };
        }

        case LOGIN_FAILED: {
            return { ...state,
                     bIsLoginRequesting : false,
                     bIsLoginRequestSuccess : false };
        }

        case FORGOT_PASSWORD_REQUEST: {
            return { ...state,
                     bIsForgotPasswordRequesting : true,
                     bIsForgotPasswordRequestSuccess : false };
        }

        case RESET_FORGOT_PASSWORD_DATA: {
            return { ...state,
                     bIsForgotPasswordRequesting : false,
                     bIsForgotPasswordRequestSuccess : false };
        }

        case FORGOT_PASSWORD_SUCCESS: {
            return { ...state,
                     bIsForgotPasswordRequesting : false,
                     bIsForgotPasswordRequestSuccess: true };
        }

        case FORGOT_PASSWORD_FAILED: {
            return { ...state,
                     bIsForgotPasswordRequesting : false,
                     bIsForgotPasswordRequestSuccess: false };
        }

        case RESET_PASSWORD_REQUEST: {
            return { ...state,
                     bIsResetPasswordRequesting : true,
                     bIsResetPasswordRequestSuccess : false };
        }
        
        case RESET_RESET_PASSWORD_DATA: {
            return { ...state,
                     bIsResetPasswordRequesting : false,
                     bIsResetPasswordRequestSuccess : false };
        }

        case RESET_PASSWORD_SUCCESS: {
            return { ...state,
                     bIsResetPasswordRequesting : false,
                     bIsResetPasswordRequestSuccess: true };
        }

        case RESET_PASSWORD_FAILED: {
            return { ...state,
                     bIsResetPasswordRequesting : false,
                     bIsResetPasswordRequestSuccess: false };
        }

        case REGISTER_USER_REQUEST: {
            return { ...state,
                     bIsRegisterUserRequesting : true,
                     bIsRegisterUserSuccess : false };
        }

        case REGISTER_USER_SUCCESS: {
            return { ...state,
                     bIsRegisterUserRequesting : false,
                     bIsRegisterUserSuccess : true };
        }

        case REGISTER_USER_FAILED: {
            return { ...state,
                     bIsRegisterUserRequesting : false,
                     bIsRegisterUserSuccess : false };
        }
        case RESET_REGISTER_USER_DATA: {
            return { ...state,
                     bIsRegisterUserRequesting : false,
                     bIsRegisterUserSuccess : false };
        }

        case SAVE_ENTERED_EMAIL: {
            return { ...state,
                     sEnteredEmail : action.payload && action.payload.sEmail}
        }
        default: {
            return state;
        }
    }
};