import { setIsBusyAction,
         clearIsBusyAction,
         BUSY_SET,
         BUSY_CLEAR } from './app';
         
describe('Testing the App action creators', () => {

    it('Calls setIsBusyAction, returns a correct BUSY_SET action', () => {
        expect(setIsBusyAction()).toEqual({ type: BUSY_SET });
    });

    it('Calls clearIsBusyAction, returns a correct BUSY_CLEAR action', () => {
        expect(clearIsBusyAction()).toEqual({ type: BUSY_CLEAR });
    });
});