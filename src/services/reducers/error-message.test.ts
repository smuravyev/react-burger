import { reducerErrorMessage } from './error-message'

import { ERROR_RAISE,
         ERROR_CLEAR } from '../actions/error-message';

import type { TErrorMessageAction } from'../actions/error-message';
    
describe('Testing the Error message reducer', () => {
    it('Returns the initial state', () => {
        expect(reducerErrorMessage(undefined,
                                   {} as TErrorMessageAction)).toEqual({
            aErrors : [],
            bCanProceedWithError : true
        });
    });
    
    describe('ERROR_CLEAR action tests', () => {

        it('ERROR_CLEAR: reverts the state to the initial condition', () => {
            const stateInitial = reducerErrorMessage(undefined,
                                                     {} as TErrorMessageAction);
            expect(reducerErrorMessage({
                aErrors : ["1", "2"],
                bCanProceedWithError : false
                }, { type : ERROR_CLEAR } )).toEqual(stateInitial);
        });
    });

    describe('ERROR_RAISE action tests', () => {

        it('ERROR_RAISE: sets one error message to the aErrors, initially ' + 
           'empty', () => {
            const stateInitial = reducerErrorMessage(undefined,
                                                     {} as TErrorMessageAction);
            expect(reducerErrorMessage(stateInitial,
                                       { type : ERROR_RAISE,
                                         payload: {
                                             sMessage : "Test",
                                             bCanProceed : false
                                         } })).toEqual({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                });
        });

        it('ERROR_RAISE: adds another error message to the aErrors, to the ' + 
           'end', () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                }, { type : ERROR_RAISE,
                     payload: { sMessage : "Test 2",
                                bCanProceed : false
                   } })).toEqual({
                    aErrors : ["Test", "Test 2"],
                    bCanProceedWithError : false
                });
        });

        it('ERROR_RAISE: should leave bCanProceedWithError as true, ' +
            'initial: true, passed: true', () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : true
                }, { type : ERROR_RAISE,
                     payload: { sMessage : "Test 2",
                                bCanProceed : true
                   } })).toEqual({
                    aErrors : ["Test", "Test 2"],
                    bCanProceedWithError : true
                });
        });

        it('ERROR_RAISE: should leave bCanProceedWithError as false, ' +
            'initial: false, passed: true', () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                }, { type : ERROR_RAISE,
                     payload: { sMessage : "Test 2",
                                bCanProceed : true
                   } })).toEqual({
                    aErrors : ["Test", "Test 2"],
                    bCanProceedWithError : false
                });
        });

        it('ERROR_RAISE: should set bCanProceedWithError as false, ' +
            'initial: true, passed: false', () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : true
                }, { type : ERROR_RAISE,
                     payload: { sMessage : "Test 2",
                                bCanProceed : false
                   } })).toEqual({
                    aErrors : ["Test", "Test 2"],
                    bCanProceedWithError : false
                });
        });

        it('ERROR_RAISE: should leave bCanProceedWithError as false, ' +
            'initial: false, passed: false', () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                }, { type : ERROR_RAISE,
                     payload: { sMessage : "Test 2",
                                bCanProceed : false
                   } })).toEqual({
                    aErrors : ["Test", "Test 2"],
                    bCanProceedWithError : false
                });
        });

        it('ERROR_RAISE: should leave everything intact with no payload',
           () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                }, { type : ERROR_RAISE } as TErrorMessageAction )).toEqual({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                });
        });

        it('ERROR_RAISE: should leave everything intact with empty payload',
           () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                }, { type : ERROR_RAISE,
                     payload: {} } as TErrorMessageAction )).toEqual({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                });
        });

        it('ERROR_RAISE: should leave everything intact without sMessage',
           () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                }, { type : ERROR_RAISE,
                     payload: { bCanProceed : true } } as
                                                TErrorMessageAction )).toEqual({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                });
        });

        it('ERROR_RAISE: should leave everything intact without bCanProceed',
           () => {
            expect(reducerErrorMessage({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                }, { type : ERROR_RAISE,
                     payload: { sMessage : "Test" } } as
                                                TErrorMessageAction )).toEqual({
                    aErrors : ["Test"],
                    bCanProceedWithError : false
                });
        });
    });
});