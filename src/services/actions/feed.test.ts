import { FEED_CONNECTED,
         FEED_CONNECTION_ERROR,
         FEED_DISCONNECTED,
         FEED_RECEIVED_DATA,
         setFeedConnectedAction,
         setFeedConnectionErrorAction,
         setFeedDisconnectedAction,
         setFeedReceivedDataAction } from './feed';
         
describe('Testing the Feed action creators', () => {

    it('Calls setFeedConnectedAction, first parameter - true, returns a correct' 
       + ' FEED_CONNECTED action', () => {
        expect(setFeedConnectedAction(true, "test"))
                                  .toEqual({
                                          type: FEED_CONNECTED, 
                                          payload: { sURL : "test",
                                                     bWithAuthToken : true } });
    });

    it('Calls setFeedConnectedAction, first parameter - false, ' +
       'returns a correct' 
       + ' FEED_CONNECTED action', () => {
        expect(setFeedConnectedAction(false, "test"))
                                  .toEqual({
                                         type: FEED_CONNECTED, 
                                         payload: { sURL : "test",
                                                    bWithAuthToken : false } });
    });

    it('Calls setFeedReceivedDataAction, ' +
       'returns a correct' 
       + ' FEED_RECEIVED_DATA action', () => {
        expect(setFeedReceivedDataAction({ aOrders : [],
                                           nTotal : 6,
                                           nTotalToday : 2,
                                           aReadyOrders : [[123, 456]],
                                           aPendingOrders : [[789]] }))
                                                                      .toEqual({
                                      type: FEED_RECEIVED_DATA, 
                                      payload: {  aOrders : [],
                                                  nTotal : 6,
                                                  nTotalToday : 2,
                                                  aReadyOrders : [[123, 456]],
                                                  aPendingOrders : [[789]] } });
    });

    it('Calls setFeedConnectionErrorAction, ' +
       'returns a correct' 
       + ' FEED_CONNECTION_ERROR action', () => {
        expect(setFeedConnectionErrorAction())
                                      .toEqual({ type: FEED_CONNECTION_ERROR }); 
    });

    it('Calls setFeedDisconnectedAction, ' +
       'returns a correct' 
       + ' FEED_DISCONNECTED action', () => {
        expect(setFeedDisconnectedAction())
                                          .toEqual({ type: FEED_DISCONNECTED }); 
    });
});