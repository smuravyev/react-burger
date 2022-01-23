import { CLEAR_ORDER_NUMBER,
         ORDER_REQUEST,
         ORDER_SUCCESS,
         ORDER_FAILED, 
         clearOrderNumberAction,
         setOrderRequestAction,
         setOrderSuccessAction,
         setOrderFailedAction } from './order-details';
         
describe('Testing the Order Details action creators', () => {

    it('Calls clearOrderNumberAction, returns a correct ' 
       + 'CLEAR_ORDER_NUMBER action', () => {
        expect(clearOrderNumberAction()).toEqual({ type: CLEAR_ORDER_NUMBER }); 
    });

    it('Calls setOrderRequestAction, returns a correct ' 
       + 'ORDER_REQUEST action', () => {
        expect(setOrderRequestAction()).toEqual({ type: ORDER_REQUEST }); 
    });

    it('Calls setOrderFailedAction, returns a correct ' 
       + 'ORDER_FAILED action', () => {
        expect(setOrderFailedAction()).toEqual({ type: ORDER_FAILED }); 
    });

    it('Calls setOrderSuccessAction, returns a correct ' 
       + 'ORDER_SUCCESS action', () => {
        expect(setOrderSuccessAction(42)).toEqual({ type: ORDER_SUCCESS,
                                                    payload : { 
                                                         nOrderNumber : 42 } }); 
    });
});