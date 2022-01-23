import { reducerOrderDetails } from './order-details'

import { CLEAR_ORDER_NUMBER,
         ORDER_REQUEST,
         ORDER_SUCCESS,
         ORDER_FAILED } from '../actions/order-details';
         
import { TOrderDetailsAction } from '../actions/order-details'
    
describe('Testing the Order details reducer', () => {
    it('Returns the initial state', () => {
        expect(reducerOrderDetails(undefined,
                                   {} as TOrderDetailsAction)).toEqual({
            nOrderNumber : -1,
            bIsRequesting : false,
            bIsRequestFailed : false
        });
    });
    
     describe('CLEAR_ORDER_NUMBER action tests', () => {

        it('CLEAR_ORDER_NUMBER: reverts the nOrderNumber to the initial ' +
           'condition, all other data left intact.', () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : false,
                bIsRequestFailed : false }, { type : CLEAR_ORDER_NUMBER } ))
                                                                      .toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : false });
        });
    });

     describe('ORDER_REQUEST action tests', () => {

        it('ORDER_REQUEST: reverts the nOrderNumber to the initial ' +
           'condition, sets bIsRequesting to true, bRequestFailed to false, ' +
           'initial flags: false, false',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : false,
                bIsRequestFailed : false }, { type : ORDER_REQUEST } ))
                                                                      .toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : true,
                    bIsRequestFailed : false });
        });

        it('ORDER_REQUEST: reverts the nOrderNumber to the initial ' +
           'condition, sets bIsRequesting to true, bRequestFailed to false, ' +
           'initial flags: true, false',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : true,
                bIsRequestFailed : false }, { type : ORDER_REQUEST } ))
                                                                      .toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : true,
                    bIsRequestFailed : false });
        });

        it('ORDER_REQUEST: reverts the nOrderNumber to the initial ' +
           'condition, sets bIsRequesting to true, bRequestFailed to false, ' +
           'initial flags: false, true',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : false,
                bIsRequestFailed : true }, { type : ORDER_REQUEST } ))
                                                                      .toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : true,
                    bIsRequestFailed : false });
        });

        it('ORDER_REQUEST: reverts the nOrderNumber to the initial ' +
           'condition, sets bIsRequesting to true, bRequestFailed to false, ' +
           'initial flags: true, true',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : true,
                bIsRequestFailed : true }, { type : ORDER_REQUEST } ))
                                                                      .toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : true,
                    bIsRequestFailed : false });
        });
    });

     describe('ORDER_FAILED action tests', () => {

        it('ORDER_FAILED: reverts the nOrderNumber to the initial ' +
           'condition, sets bIsRequesting to false, bRequestFailed to true, ' +
           'initial flags: false, false',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : false,
                bIsRequestFailed : false }, { type : ORDER_FAILED } )).toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : true });
        });

        it('ORDER_FAILED: reverts the nOrderNumber to the initial ' +
           'condition, sets bIsRequesting to false, bRequestFailed to true, ' +
           'initial flags: true, false',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : true,
                bIsRequestFailed : false }, { type : ORDER_FAILED } )).toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : true });
        });

        it('ORDER_FAILED: reverts the nOrderNumber to the initial ' +
           'condition, sets bIsRequesting to false, bRequestFailed to true, ' +
           'initial flags: false, true',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : false,
                bIsRequestFailed : true }, { type : ORDER_FAILED } )).toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : true });
        });

        it('ORDER_FAILED: reverts the nOrderNumber to the initial ' +
           'condition, sets bIsRequesting to false, bRequestFailed to true, ' +
           'initial flags: true, true',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({
                nOrderNumber : 100500,
                bIsRequesting : true,
                bIsRequestFailed : true }, { type : ORDER_FAILED } )).toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : true });
        });
    });

     describe('ORDER_SUCCESS action tests', () => {

        it('ORDER_SUCCESS: sets nOrderNumber as provided, ' +
           'sets bIsRequesting to false, bRequestFailed to false, ' +
           'initial flags: false, false',
           () => {
            expect(reducerOrderDetails({ nOrderNumber : -1,
                                         bIsRequesting : false,
                                         bIsRequestFailed : false },
                                       { type : ORDER_SUCCESS,
                                         payload : {
                                            nOrderNumber : 100500
                                        } } )).toEqual({
                    nOrderNumber : 100500,
                    bIsRequesting : false,
                    bIsRequestFailed : false });
        });

        it('ORDER_SUCCESS: sets nOrderNumber as provided, ' +
           'sets bIsRequesting to false, bRequestFailed to false, ' +
           'initial flags: true, false',
           () => {
            expect(reducerOrderDetails({ nOrderNumber : -1,
                                         bIsRequesting : true,
                                         bIsRequestFailed : false },
                                       { type : ORDER_SUCCESS,
                                         payload : {
                                            nOrderNumber : 100500
                                        } } )).toEqual({
                    nOrderNumber : 100500,
                    bIsRequesting : false,
                    bIsRequestFailed : false });
        });

        it('ORDER_SUCCESS: sets nOrderNumber as provided, ' +
           'sets bIsRequesting to false, bRequestFailed to false, ' +
           'initial flags: false, true',
           () => {
            expect(reducerOrderDetails({ nOrderNumber : -1,
                                         bIsRequesting : false,
                                         bIsRequestFailed : true },
                                       { type : ORDER_SUCCESS,
                                         payload : {
                                            nOrderNumber : 100500
                                        } } )).toEqual({
                    nOrderNumber : 100500,
                    bIsRequesting : false,
                    bIsRequestFailed : false });
        });

        it('ORDER_SUCCESS: sets nOrderNumber as provided, ' +
           'sets bIsRequesting to false, bRequestFailed to false, ' +
           'initial flags: true, true',
           () => {
            expect(reducerOrderDetails({ nOrderNumber : -1,
                                         bIsRequesting : true,
                                         bIsRequestFailed : true },
                                       { type : ORDER_SUCCESS,
                                         payload : {
                                            nOrderNumber : 100500
                                        } } )).toEqual({
                    nOrderNumber : 100500,
                    bIsRequesting : false,
                    bIsRequestFailed : false });
        });

        it('ORDER_SUCCESS: sets nOrderNumber to the initial state if no ' +
           'payload passed',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({ nOrderNumber : 100500,
                                         bIsRequesting : true,
                                         bIsRequestFailed : true },
                                       { type : ORDER_SUCCESS } as
                                                 TOrderDetailsAction)).toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : false });
        });

        it('ORDER_SUCCESS: sets nOrderNumber to the initial state if the ' +
           'payload passed, but no nOrderNumber there',
           () => {
            const stateInitial = reducerOrderDetails(undefined,
                                                     {} as TOrderDetailsAction);
            expect(reducerOrderDetails({ nOrderNumber : 100500,
                                         bIsRequesting : true,
                                         bIsRequestFailed : true },
                                       { type : ORDER_SUCCESS, 
                                         payload : {} } as
                                                 TOrderDetailsAction)).toEqual({
                    nOrderNumber : stateInitial.nOrderNumber,
                    bIsRequesting : false,
                    bIsRequestFailed : false });
        });
    });
});