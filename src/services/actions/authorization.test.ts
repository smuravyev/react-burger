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
         RESET_USER,
         setForgotPasswordRequestAction,
         setForgotPasswordSuccessAction,
         setForgotPasswordFailedAction,
         resetForgotPasswordDataAction,
         setResetPasswordRequestAction,
         setResetPasswordSuccessAction,
         setResetPasswordFailedAction,
         setRegisterUserRequestAction,
         setRegisterUserSuccessAction,
         setRegisterUserFailedAction,
         setLoginRequestAction,
         setLoginFailedAction,
         setLoginSuccessAction,
         setUpdateUserRequestAction,
         setUpdateUserSuccessAction,
         setUpdateUserFailedAction,
         setAuthCheckDoneAction,
         resetUserAction,
         saveEnteredEmailAction,
         setUserAction,
         setReturnPathAction } from './authorization';
         
describe('Testing the Authorization action creators', () => {

    it('Calls setForgotPasswordRequestAction, returns a correct ' + 
       'FORGOT_PASSWORD_REQUEST action', () => {
        expect(setForgotPasswordRequestAction())
                                   .toEqual({ type : FORGOT_PASSWORD_REQUEST });
    });

    it('Calls setForgotPasswordSuccessAction, returns a correct ' + 
       'FORGOT_PASSWORD_SUCCESS action', () => {
        expect(setForgotPasswordSuccessAction())
                                   .toEqual({ type : FORGOT_PASSWORD_SUCCESS });
    });

    it('Calls setForgotPasswordFailedAction, returns a correct ' + 
       'FORGOT_PASSWORD_FAILED action', () => {
        expect(setForgotPasswordFailedAction())
                                    .toEqual({ type : FORGOT_PASSWORD_FAILED });
    });

    it('Calls resetForgotPasswordDataAction, returns a correct ' + 
       'RESET_FORGOT_PASSWORD_DATA action', () => {
        expect(resetForgotPasswordDataAction())
                                .toEqual({ type : RESET_FORGOT_PASSWORD_DATA });
    });

    it('Calls setResetPasswordRequestAction, returns a correct ' + 
       'RESET_PASSWORD_REQUEST action', () => {
        expect(setResetPasswordRequestAction())
                                    .toEqual({ type : RESET_PASSWORD_REQUEST });
    });

    it('Calls setResetPasswordSuccessAction, returns a correct ' + 
       'RESET_PASSWORD_SUCCESS action', () => {
        expect(setResetPasswordSuccessAction())
                                    .toEqual({ type : RESET_PASSWORD_SUCCESS });
    });

    it('Calls setResetPasswordFailedAction, returns a correct ' + 
       'RESET_PASSWORD_FAILED action', () => {
        expect(setResetPasswordFailedAction())
                                     .toEqual({ type : RESET_PASSWORD_FAILED });
    });

    it('Calls setRegisterUserRequestAction, returns a correct ' + 
       'REGISTER_USER_REQUEST action', () => {
        expect(setRegisterUserRequestAction())
                                     .toEqual({ type : REGISTER_USER_REQUEST });
    });

    it('Calls setRegisterUserSuccessAction, returns a correct ' + 
       'REGISTER_USER_SUCCESS action', () => {
        expect(setRegisterUserSuccessAction())
                                     .toEqual({ type : REGISTER_USER_SUCCESS });
    });

    it('Calls setRegisterUserFailedAction, returns a correct ' + 
       'REGISTER_USER_FAILED action', () => {
        expect(setRegisterUserFailedAction())
                                      .toEqual({ type : REGISTER_USER_FAILED });
    });

    it('Calls setLoginRequestAction, returns a correct ' + 
       'LOGIN_REQUEST action', () => {
        expect(setLoginRequestAction()).toEqual({ type : LOGIN_REQUEST });
    });

    it('Calls setLoginFailedAction, returns a correct ' + 
       'LOGIN_FAILED action', () => {
        expect(setLoginFailedAction()).toEqual({ type : LOGIN_FAILED });
    });

    it('Calls setLoginSuccessAction, returns a correct ' + 
       'LOGIN_SUCCESS action', () => {
        expect(setLoginSuccessAction()).toEqual({ type : LOGIN_SUCCESS });
    });

    it('Calls setUpdateUserRequestAction, returns a correct ' + 
       'UPDATE_USER_REQUEST action', () => {
        expect(setUpdateUserRequestAction())
                                       .toEqual({ type : UPDATE_USER_REQUEST });
    });

    it('Calls setUpdateUserSuccessAction, returns a correct ' + 
       'UPDATE_USER_SUCCESS action', () => {
        expect(setUpdateUserSuccessAction())
                                       .toEqual({ type : UPDATE_USER_SUCCESS });
    });
    
    it('Calls setUpdateUserFailedAction, returns a correct ' + 
       'UPDATE_USER_FAILED action', () => {
        expect(setUpdateUserFailedAction())
                                        .toEqual({ type : UPDATE_USER_FAILED });
    });
    
    it('Calls setAuthCheckDoneAction, returns a correct ' + 
       'AUTH_CHECK_DONE action', () => {
        expect(setAuthCheckDoneAction()).toEqual({ type : AUTH_CHECK_DONE });
    });
    
    it('Calls resetUserAction, returns a correct ' + 
       'RESET_USER action', () => {
        expect(resetUserAction()).toEqual({ type : RESET_USER });
     });

    it('Calls saveEnteredEmailAction, returns a correct ' + 
       'SAVE_ENTERED_EMAIL action', () => {
        expect(saveEnteredEmailAction("test")).toEqual({
                                               type : SAVE_ENTERED_EMAIL,
                                               payload : { sEmail : "test" } });
     });

    it('Calls setUserAction, returns a correct ' + 
       'SET_USER action', () => {
        expect(setUserAction("test email", "test name")).toEqual({
                                           type : SET_USER,
                                           payload : { sEmail : "test email",
                                                       sName : "test name" } });
     });

    it('Calls setReturnPathAction with a parameter, returns a correct ' + 
       'SET_USER action with the passed parameter in payload', () => {
        expect(setReturnPathAction("test")).toEqual({
                                          type : SET_RETURN_PATH,
                                          payload : { sReturnPath : "test" } });
     });

    it('Calls setReturnPathAction without a parameter, returns a correct ' + 
       'SET_USER action with the "/" in payload', () => {
        expect(setReturnPathAction()).toEqual({
                                             type : SET_RETURN_PATH,
                                             payload : { sReturnPath : "/" } });
     });
});