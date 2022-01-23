import { reducerApp } from './app'

import { BUSY_SET,
         BUSY_CLEAR } from '../actions/app';

import type { TAppAction } from'../actions/app';
    
describe('Testing the App reducer', () => {
    
    it('Returns the initial state', () => {
        expect(reducerApp(undefined, {} as TAppAction )).toEqual({
            nBusyCounter : 0,
            bIsBusy : false
        });
    });

    describe('BUSY_SET action tests', () => {

        it('BUSY_SET: increment nBusyCounter by 1 and set bIsBusy flag', () => {
        expect(reducerApp({ nBusyCounter : 0, 
                            bIsBusy : false },
                          { type: BUSY_SET })).toEqual({
                nBusyCounter : 1,
                bIsBusy : true
            });
        });

        it('BUSY_SET: set nBusyCounter to 2 and leave bIsBusy flag set', () => {
        expect(reducerApp({ nBusyCounter : 1, 
                            bIsBusy : true },
                          { type: BUSY_SET })).toEqual({
                nBusyCounter : 2,
                bIsBusy : true
            });
        });

        it('BUSY_SET: set nBusyCounter to 2, set bIsBusy flag, ' + 
           'initial bIsBusy is false (wrong state)', () => {
            expect(reducerApp({ nBusyCounter : 1,
                                bIsBusy : false },
                              { type: BUSY_SET })).toEqual({
                nBusyCounter : 2,
                bIsBusy : true
            });
        });
        
        it('BUSY_SET: set nBusyCounter to 1 and set bIsBusy flag, while the ' +
           'initial nBusyCounter is less than 0, and bIsBusy is false', () => {
            expect(reducerApp({ nBusyCounter : -100500,
                                bIsBusy : false },
                              { type: BUSY_SET })).toEqual({
                nBusyCounter : 1,
                bIsBusy : true
            });
        });

        it('BUSY_SET: set nBusyCounter to 1 and leave bIsBusy flag set, while ' +
           'the initial nBusyCounter is less than 0, bIsBusy is true', () => {
            expect(reducerApp({ nBusyCounter : -100500,
                                bIsBusy : true },
                              { type: BUSY_SET })).toEqual({
                nBusyCounter : 1,
                bIsBusy : true
            });
        });

    });

    describe('BUSY_CLEAR action tests', () => {

        it('BUSY_CLEAR: set nBusyCounter to 1 and leave bIsBusy flag set', () => {
        expect(reducerApp({ nBusyCounter : 2, 
                            bIsBusy : true },
                          { type: BUSY_CLEAR })).toEqual({
                nBusyCounter : 1,
                bIsBusy : true
            });
        });

        it('BUSY_CLEAR: set nBusyCounter to 0 and unset the bIsBusy flag', () => {
        expect(reducerApp({ nBusyCounter : 1, 
                            bIsBusy : true },
                          { type: BUSY_CLEAR })).toEqual({
                nBusyCounter : 0,
                bIsBusy : false
            });
        });

        it('BUSY_CLEAR: set nBusyCounter to 2 and set bIsBusy flag,' +
           ' while the initial bIsBusy is false and nBusyCounter = 3', () => {
            expect(reducerApp({ nBusyCounter : 3,
                                bIsBusy : false },
                              { type: BUSY_CLEAR })).toEqual({
                nBusyCounter : 2,
                bIsBusy : true
            });
        });
        
        it('BUSY_CLEAR: set nBusyCounter to 0 and leave the bIsBusy flag clear,' +
           ' while the initial nBusyCounter equals 0', () => {
            expect(reducerApp({ nBusyCounter : 0,
                                bIsBusy : false },
                              { type: BUSY_CLEAR })).toEqual({
                nBusyCounter : 0,
                bIsBusy : false
            });
        });
        
        it('BUSY_CLEAR: set nBusyCounter to 0 and clear bIsBusy flag, ' +
           ' while the initial nBusyCounter equals 0 and bIsBusy is true', () => {
            expect(reducerApp({ nBusyCounter : 0,
                                bIsBusy : true },
                              { type: BUSY_CLEAR })).toEqual({
                nBusyCounter : 0,
                bIsBusy : false
            });
        });
        
        it('BUSY_CLEAR: set nBusyCounter to 0 and clear bIsBusy flag,' +
           ' while the initial nBusyCounter is less than 0', () => {
            expect(reducerApp({ nBusyCounter : -100500,
                                bIsBusy : true },
                              { type: BUSY_CLEAR })).toEqual({
                nBusyCounter : 0,
                bIsBusy : false
            });
        });
    });
});