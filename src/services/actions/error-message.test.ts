import { ERROR_RAISE,
         ERROR_CLEAR,
         errorRaiseAction,
         errorClearAction} from './error-message';
         
describe('Testing the Error Message action creators', () => {

    it('Calls errorRaiseAction, second parameter - true, returns a correct ' + 
       'ERROR_RAISE action', () => {
        expect(errorRaiseAction("Test", true))
                                  .toEqual({ type: ERROR_RAISE, 
                                             payload: { sMessage : "Test",
                                                        bCanProceed : true } });
    });

    it('Calls errorRaiseAction, second parameter - false, returns a correct ' + 
       'ERROR_RAISE action', () => {
        expect(errorRaiseAction("Test", false))
                                  .toEqual({ type: ERROR_RAISE, 
                                             payload: { sMessage : "Test",
                                                        bCanProceed : false } });
    });

    it('Calls errorClearAction, returns a correct ' + 
       'ERROR_CLEAR action', () => {
        expect(errorClearAction()).toEqual({ type: ERROR_CLEAR });
    });

});