import { reducerAuthorization } from './authorization'

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
         RESET_USER } from '../actions/authorization';


import type { TAuthorizationAction } from'../actions/authorization';
    
describe('Testing the Authorization reducer', () => {
    it('Returns the initial state', () => {
        expect(reducerAuthorization(undefined,
                                    {} as TAuthorizationAction)).toEqual({
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
            oUser : {
                sEmail: "",
                sName: ""
            },
            sReturnPath : '/',
            bAuthCheckDone : false
        });
    });
    
    describe('UPDATE_USER_REQUEST action tests', () => {

        it('UPDATE_USER_REQUEST: set bIsUpdateUserRequesting, ' +
           'clear bIsUpdateUserRequestSuccess, bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_REQUEST: set bIsUpdateUserRequesting, ' +
           'clear bIsUpdateUserRequestSuccess, bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });


        it('UPDATE_USER_REQUEST: set bIsUpdateUserRequesting, ' +
           'clear bIsUpdateUserRequestSuccess, bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });


        it('UPDATE_USER_REQUEST: set bIsUpdateUserRequesting, ' +
           'clear bIsUpdateUserRequestSuccess, bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_REQUEST: set bIsUpdateUserRequesting, ' +
           'clear bIsUpdateUserRequestSuccess, bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_REQUEST: set bIsUpdateUserRequesting, ' +
           'clear bIsUpdateUserRequestSuccess, bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_REQUEST: set bIsUpdateUserRequesting, ' +
           'clear bIsUpdateUserRequestSuccess, bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_REQUEST: set bIsUpdateUserRequesting, ' +
           'clear bIsUpdateUserRequestSuccess, bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('UPDATE_USER_SUCCESS action tests', () => {

        it('UPDATE_USER_SUCCESS: clear bIsUpdateUserRequesting, ' +
           'set bIsUpdateUserRequestSuccess, ' +
           'clear bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_SUCCESS: clear bIsUpdateUserRequesting, ' +
           'set bIsUpdateUserRequestSuccess, ' +
           'clear bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_SUCCESS: clear bIsUpdateUserRequesting, ' +
           'set bIsUpdateUserRequestSuccess, ' +
           'clear bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_SUCCESS: clear bIsUpdateUserRequesting, ' +
           'set bIsUpdateUserRequestSuccess, ' +
           'clear bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_SUCCESS: clear bIsUpdateUserRequesting, ' +
           'set bIsUpdateUserRequestSuccess, ' +
           'clear bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_SUCCESS: clear bIsUpdateUserRequesting, ' +
           'set bIsUpdateUserRequestSuccess, ' +
           'clear bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_SUCCESS: clear bIsUpdateUserRequesting, ' +
           'set bIsUpdateUserRequestSuccess, ' +
           'clear bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_SUCCESS: clear bIsUpdateUserRequesting, ' +
           'set bIsUpdateUserRequestSuccess, ' +
           'clear bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('UPDATE_USER_FAILED action tests', () => {

        it('UPDATE_USER_FAILED: clear bIsUpdateUserRequesting, ' +
           'bIsUpdateUserRequestSuccess, ' +
           'set bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_FAILED: clear bIsUpdateUserRequesting, ' +
           'bIsUpdateUserRequestSuccess, ' +
           'set bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
          ' initial states: true, false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_FAILED: clear bIsUpdateUserRequesting, ' +
           'bIsUpdateUserRequestSuccess, ' +
           'set bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_FAILED: clear bIsUpdateUserRequesting, ' +
           'bIsUpdateUserRequestSuccess, ' +
           'set bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_FAILED: clear bIsUpdateUserRequesting, ' +
           'bIsUpdateUserRequestSuccess, ' +
           'set bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_FAILED: clear bIsUpdateUserRequesting, ' +
           'bIsUpdateUserRequestSuccess, ' +
           'set bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: false, true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_FAILED: clear bIsUpdateUserRequesting, ' +
           'bIsUpdateUserRequestSuccess, ' +
           'set bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('UPDATE_USER_FAILED: clear bIsUpdateUserRequesting, ' +
           'bIsUpdateUserRequestSuccess, ' +
           'set bIsUpdateUserRequestFailed' +
           ', the rest left intact,' + 
           ' initial states: true, true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : true,
                                          bIsUpdateUserRequestSuccess : true,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : UPDATE_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : true,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('AUTH_CHECK_DONE action tests', () => {

        it('AUTH_CHECK_DONE: set bAuthCheckDone' +
           ', the rest left intact,' + 
           ' initial state: false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : AUTH_CHECK_DONE } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : true });
        });

        it('AUTH_CHECK_DONE: set bAuthCheckDone' +
           ', the rest left intact,' + 
           ' initial state: true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : true },
                                        { type : AUTH_CHECK_DONE } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : true });
        });
    });

    describe('SET_RETURN_PATH action tests', () => {

        it('SET_RETURN_PATH: empty payload passed, should set sReturnPath to ' +
           'the string, defined in the initial state. Other fields left ' + 
           'intact' , () => {
            const stateInitial =
                    reducerAuthorization(undefined, {} as TAuthorizationAction);
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_RETURN_PATH } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath :
                                                       stateInitial.sReturnPath,
                                          bAuthCheckDone : false });
        });

        it('SET_RETURN_PATH: payload passed, but no sReturnPath field there, ' +
           'should set sReturnPath to ' +
           'the string, defined in the initial state. Other fields left ' + 
           'intact' , () => {
            const stateInitial =
                    reducerAuthorization(undefined, {} as TAuthorizationAction);
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_RETURN_PATH,
                                          payload: "/somepath" } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath :
                                                       stateInitial.sReturnPath,
                                          bAuthCheckDone : false });
        });


        it('SET_RETURN_PATH: try tp set sReturnPath to empty string. Should ' +
           'set "/". Other fields ' +
           'left intact' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_RETURN_PATH,
                                          payload : { sReturnPath : "" } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : "/",
                                          bAuthCheckDone : false });
        });

        it('SET_RETURN_PATH: set sReturnPath to some path. Other fields ' +
           'left intact' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_RETURN_PATH,
                                          payload : {
                                              sReturnPath : "/somepath"
                                          } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : "/somepath",
                                          bAuthCheckDone : false });
        });
    });
    
    describe('SET_USER action tests', () => {

        it('SET_USER: empty payload passed, should set all oUser fields to ' +
           'empty strings. bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "",
                                                    sName: "" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: empty payload passed, should set all oUser fields to ' +
           'empty strings. bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "",
                                                    sName: "" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, no sEmail, sName fields,' + 
           ' should set oUser fields to ' +
           'empty strings. bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {} } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "",
                                                    sName: "" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, no sEmail, sName fields,' + 
           ' should set oUser fields to ' +
           'empty strings. bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {} } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "",
                                                    sName: "" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, sEmail is set, no sName field,' + 
           ' should set sEmail, empty sName. ' +
           'bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sEmail : "test@test.ru"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "test@test.ru",
                                                    sName: "" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, sEmail is set, no sName field,' + 
           ' should set sEmail, empty sName. ' +
           'bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sEmail : "test@test.ru"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "test@test.ru",
                                                    sName: "" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, no sEmail field, sName set,' + 
           ' should set sName, empty sEmail. ' +
           'bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, no sEmail field, sName set,' + 
           ' should set sName, empty sEmail. ' +
           'bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, both fields set,' + 
           ' should set sEmail, sName. ' +
           'bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail : "email@test.ru"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "email@test.ru",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, both fields set,' +
           ' should set sEmail, sName. ' +
           'bIsUserSet is set always after this action. Other ' +
           'fields left intact. Initial bIseUserSet is false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail : "email@test.ru"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "email@test.ru",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: payload passed, both fields set,' +
           ' we pass email with 2 @. Should set email to empty string. ' +
           'bIsUserSet is set always after this action. Other ' +
           'fields left intact.' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail : "e@m@test.ru"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: we pass email with a xn--... domain. '+
           'Should set sEmail to punycoded cyrillic domain. Other fields ' +
           'intact' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail :
                                                         "m@xn--e1aybc.xn--p1ai"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "m@тест.рф",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: we pass email with a xn--... domain in CAPITAL LETTERS. '+
           'Should set sEmail to punycoded cyrillic domain. Other fields ' +
           'intact' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail :
                                                         "m@XN--E1AYBC.XN--P1AI"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "m@тест.рф",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: we pass email with a normal domain in CAPITAL LETTERS. '+
           'Should set sEmail to punycoded cyrillic domain. Other fields ' +
           'left intact' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail :
                                                         "m@TEST.RU"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "m@test.ru",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: we pass email with cyrillic before @. '+
           'Should set sEmail before @ "as is". No error raised. Other fields' +
           ' left intact' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail :
                                                         "оймороз@TEST.RU"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "оймороз@test.ru",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: we pass WRONG punycoded domain, error before --. '+
           'Should set sEmail "as is". No error raised. Other fields intact',
           () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail :
                                                         "test@x---ar.ru"
                                                    } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "test@x---ar.ru",
                                                    sName: "This is name" },
                                          sReturnPath : "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SET_USER: we pass WRONG punycoded domain, error after --. Should '+
           'set sEmail to string. Result is unpredictable, but it is OK. ' +
           'No error should be raised (!)' , () => {
            const state = reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SET_USER,
                                          payload : {
                                                        sName : "This is name",
                                                        sEmail :
                                                    "test@xn--asdasdarasdasd.ru"
                                                    } } as
                                                TAuthorizationAction);
            expect(typeof state.oUser.sEmail).toEqual("string");
        });
    });

 describe('RESET_USER action tests', () => {

        it('RESET_USER: bUserSet should be set to false. oUser fields should ' +
           ' be the same as at the initial state. Other fields left ' + 
           'intact. Currently bIsUserSet is false' , () => {
            const stateInitial =
                    reducerAuthorization(undefined, {} as TAuthorizationAction);
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_USER } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail:
                                                      stateInitial.oUser.sEmail,
                                                    sName:
                                                     stateInitial.oUser.sName },
                                          sReturnPath :
                                                       "somereturnpath",
                                          bAuthCheckDone : false });
        });


        it('RESET_USER: bUserSet should be set to false. oUser fields should ' +
           ' be the same as at the initial state. Other fields left ' + 
           'intact. Currently bIsUserSet is true' , () => {
            const stateInitial =
                    reducerAuthorization(undefined, {} as TAuthorizationAction);
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : true,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_USER } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail:
                                                      stateInitial.oUser.sEmail,
                                                    sName:
                                                     stateInitial.oUser.sName },
                                          sReturnPath :
                                                       'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });


    describe('SAVE_ENTERED_EMAIL action tests', () => {

        it('SAVE_ENTERED_EMAIL: No payload passed. Should set saved email to ' + 
           'empty. Other fields left intact', () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SAVE_ENTERED_EMAIL } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath :
                                                       "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SAVE_ENTERED_EMAIL: Payload passed, but no sEmail field.' +
           ' Should set saved email to ' + 
           'empty. Other fields left intact', () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SAVE_ENTERED_EMAIL,
                                          payload : {} } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath :
                                                       "somereturnpath",
                                          bAuthCheckDone : false });
        });

        it('SAVE_ENTERED_EMAIL: Payload passed, the sEmail field set.' +
           ' Should set saved email to ' + 
           'the specified string. Other fields left intact', () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : SAVE_ENTERED_EMAIL,
                                          payload : {
                                              sEmail : "test@test.ru"
                                          } } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "test@test.ru",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "somename" },
                                          sReturnPath :
                                                       "somereturnpath",
                                          bAuthCheckDone : false });
        });
    });

   
    describe('LOGIN_REQUEST action tests', () => {

        it('LOGIN_REQUEST: set bIsLoginRequesting, ' +
           'clear bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('LOGIN_REQUEST: set bIsLoginRequesting, ' +
           'clear bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('LOGIN_REQUEST: set bIsLoginRequesting, ' +
           'clear bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('LOGIN_REQUEST: set bIsLoginRequesting, ' +
           'clear bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('LOGIN_SUCCESS action tests', () => {

        it('LOGIN_SUCCESS: clear bIsLoginRequesting, ' +
           'set bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('LOGIN_SUCCESS: clear bIsLoginRequesting, ' +
           'set bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });


        it('LOGIN_SUCCESS: clear bIsLoginRequesting, ' +
           'set bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('LOGIN_SUCCESS: clear bIsLoginRequesting, ' +
           'set bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('LOGIN_FAILED action tests', () => {

        it('LOGIN_FAILED: clear bIsLoginRequesting, ' +
           'clear bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('LOGIN_FAILED: clear bIsLoginRequesting, ' +
           'clear bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('LOGIN_FAILED: clear bIsLoginRequesting, ' +
           'clear bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('LOGIN_FAILED: clear bIsLoginRequesting, ' +
           'clear bIsLoginRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : true,
                                          bIsLoginRequestSuccess : true,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : LOGIN_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('REGISTER_USER_REQUEST action tests', () => {

        it('REGISTER_USER_REQUEST: set bIsRegisterUserRequesting, ' +
           'clear bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_REQUEST: set bIsRegisterUserRequesting, ' +
           'clear bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_REQUEST: set bIsRegisterUserRequesting, ' +
           'clear bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_REQUEST: set bIsRegisterUserRequesting, ' +
           'clear bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('REGISTER_USER_SUCCESS action tests', () => {

        it('REGISTER_USER_SUCCESS: clear bIsRegisterUserRequesting, ' +
           'set bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_SUCCESS: clear bIsRegisterUserRequesting, ' +
           'set bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_SUCCESS: clear bIsRegisterUserRequesting, ' +
           'set bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_SUCCESS: clear bIsRegisterUserRequesting, ' +
           'set bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('REGISTER_USER_FAILED action tests', () => {

        it('REGISTER_USER_FAILED: clear bIsRegisterUserRequesting, ' +
           'clear bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_FAILED: clear bIsRegisterUserRequesting, ' +
           'clear bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_FAILED: clear bIsRegisterUserRequesting, ' +
           'clear bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('REGISTER_USER_FAILED: clear bIsRegisterUserRequesting, ' +
           'clear bIsRegisterUserSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : true,
                                          bIsRegisterUserSuccess : true,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : REGISTER_USER_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('RESET_PASSWORD_REQUEST action tests', () => {

        it('RESET_PASSWORD_REQUEST: set bIsResetPasswordRequesting, ' +
           'clear bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_PASSWORD_REQUEST: set bIsResetPasswordRequesting, ' +
           'clear bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
        
        it('RESET_PASSWORD_REQUEST: set bIsResetPasswordRequesting, ' +
           'clear bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_PASSWORD_REQUEST: set bIsResetPasswordRequesting, ' +
           'clear bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });


    describe('RESET_PASSWORD_SUCCESS action tests', () => {

        it('RESET_PASSWORD_SUCCESS: clear bIsResetPasswordRequesting, ' +
           'set bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_PASSWORD_SUCCESS: clear bIsResetPasswordRequesting, ' +
           'set bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_PASSWORD_SUCCESS: clear bIsResetPasswordRequesting, ' +
           'set bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_PASSWORD_SUCCESS: clear bIsResetPasswordRequesting, ' +
           'set bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('RESET_PASSWORD_FAILED action tests', () => {

        it('RESET_PASSWORD_FAILED: clear bIsResetPasswordRequesting, ' +
           'clear bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_PASSWORD_FAILED: clear bIsResetPasswordRequesting, ' +
           'clear bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_PASSWORD_FAILED: clear bIsResetPasswordRequesting, ' +
           'clear bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_PASSWORD_FAILED: clear bIsResetPasswordRequesting, ' +
           'clear bIsResetPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : true,
                                          bIsResetPasswordRequestSuccess : true,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_PASSWORD_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });


    describe('FORGOT_PASSWORD_REQUEST action tests', () => {

        it('FORGOT_PASSWORD_REQUEST: set bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('FORGOT_PASSWORD_REQUEST: set bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('FORGOT_PASSWORD_REQUEST: set bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                           true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('FORGOT_PASSWORD_REQUEST: set bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                           true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_REQUEST } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('FORGOT_PASSWORD_SUCCESS action tests', () => {

        it('FORGOT_PASSWORD_SUCCESS: clear bIsForgotPasswordRequesting, ' +
           'set bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
        
        it('FORGOT_PASSWORD_SUCCESS: clear bIsForgotPasswordRequesting, ' +
           'set bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('FORGOT_PASSWORD_SUCCESS: clear bIsForgotPasswordRequesting, ' +
           'set bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                           true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('FORGOT_PASSWORD_SUCCESS: clear bIsForgotPasswordRequesting, ' +
           'set bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                           true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_SUCCESS } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });

    describe('FORGOT_PASSWORD_FAILED action tests', () => {

        it('FORGOT_PASSWORD_FAILED: clear bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('FORGOT_PASSWORD_FAILED: clear bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('FORGOT_PASSWORD_FAILED: clear bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                           true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('FORGOT_PASSWORD_FAILED: clear bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                           true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : FORGOT_PASSWORD_FAILED } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });
    
    describe('RESET_FORGOT_PASSWORD_DATA action tests', () => {

        it('RESET_FORGOT_PASSWORD_DATA: clear bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_FORGOT_PASSWORD_DATA } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_FORGOT_PASSWORD_DATA: clear bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, false' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_FORGOT_PASSWORD_DATA } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_FORGOT_PASSWORD_DATA: clear bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: false, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                           true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_FORGOT_PASSWORD_DATA } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });

        it('RESET_FORGOT_PASSWORD_DATA: clear bIsForgotPasswordRequesting, ' +
           'clear bIsForgotPasswordRequestSuccess' +
           ', the rest left intact,' + 
           ' initial states: true, true' , () => {
            expect(reducerAuthorization({ sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : true,
                                          bIsForgotPasswordRequestSuccess :
                                                                           true,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false },
                                        { type : RESET_FORGOT_PASSWORD_DATA } as
                                                TAuthorizationAction)).toEqual({
                                          sEnteredEmail : "something",
                                          bIsForgotPasswordRequesting : false,
                                          bIsForgotPasswordRequestSuccess :
                                                                          false,
                                          bIsResetPasswordRequesting : false,
                                          bIsResetPasswordRequestSuccess :
                                                                          false,
                                          bIsRegisterUserRequesting : false,
                                          bIsRegisterUserSuccess : false,
                                          bIsLoginRequesting : false,
                                          bIsLoginRequestSuccess : false,
                                          bIsUpdateUserRequesting : false,
                                          bIsUpdateUserRequestSuccess : false,
                                          bIsUpdateUserRequestFailed : false,
                                          bIsUserSet : false,
                                          oUser : { sEmail: "someemail",
                                                    sName: "" },
                                          sReturnPath : 'somereturnpath',
                                          bAuthCheckDone : false });
        });
    });
});