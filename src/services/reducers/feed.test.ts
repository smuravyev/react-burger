import { reducerFeed } from './feed'

import { FEED_CONNECTED,
         FEED_CONNECTION_ERROR,
         FEED_DISCONNECTED,
         FEED_RECEIVED_DATA } from '../actions/feed';
         
import type { TFeedAction } from '../actions/feed';
    
describe('Testing the Feed reducer', () => {
    it('Returns the initial state', () => {
        expect(reducerFeed(undefined, {} as TFeedAction)).toEqual({
            bIsConnected : false,
            bHasError : false,
            bHasData : false,
            bWithAuthToken : false,
            sURL : "",
            oFeedData : {
                aOrders : [],
                nTotal : 0,
                nTotalToday : 0,
                aReadyOrders : [],
                aPendingOrders : []
            }
        });
    });

    describe('FEED_CONNECTED action tests', () => {

        it('FEED_CONNECTED: sets data about the feed, sURL and bWithAuthToken' + 
           ', and sets bIsConnectedFlag. Other data left intact. ' +
           'Initial flag value - false, ' +
           'bWithAuthtoken - false, passed bWithAuthToken - true', () => {
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTED,
                                 payload: { bWithAuthToken : true,
                                            sURL : "test" } })).toEqual({
                                         bIsConnected : true,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : true,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });

        it('FEED_CONNECTED: sets data about the feed, sURL and bWithAuthToken' + 
           ', and sets bIsConnectedFlag. Other data left intact. ' + 
           'Initial flag value - true, ' +
           'bWithAuthtoken - false, passed bWithAuthToken - true', () => {
            expect(reducerFeed({ bIsConnected : true,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTED,
                                 payload: { bWithAuthToken : true,
                                            sURL : "test" } })).toEqual({
                                         bIsConnected : true,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : true,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });

        it('FEED_CONNECTED: sets data about the feed, sURL and bWithAuthToken' + 
           ', and sets bIsConnectedFlag. Other data left intact. ' + 
           'Initial flag value - false, ' +
           'bWithAuthtoken - true, passed bWithAuthToken - true', () => {
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : true,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTED,
                                 payload: { bWithAuthToken : true,
                                            sURL : "test" } })).toEqual({
                                         bIsConnected : true,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : true,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });

        it('FEED_CONNECTED: sets data about the feed, sURL and bWithAuthToken' + 
           ', and sets bIsConnectedFlag. Other data left intact. ' +
           'Initial flag value - true, ' +
           'bWithAuthtoken - true, passed bWithAuthToken - true', () => {
            expect(reducerFeed({ bIsConnected : true,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : true,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTED,
                                 payload: { bWithAuthToken : true,
                                            sURL : "test" } })).toEqual({
                                         bIsConnected : true,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : true,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });

        it('FEED_CONNECTED: sets data about the feed, sURL and bWithAuthToken' + 
           ', and sets bIsConnectedFlag. Other data left intact. ' +
           'Initial flag value - false, ' +
           'bWithAuthtoken - false, passed bWithAuthToken - false', () => {
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTED,
                                 payload: { bWithAuthToken : false,
                                            sURL : "test" } })).toEqual({
                                         bIsConnected : true,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });

        it('FEED_CONNECTED: sets data about the feed, sURL and bWithAuthToken' + 
           ', and sets bIsConnectedFlag. Other data left intact. ' +
           'Initial flag value - true, ' +
           'bWithAuthtoken - false, passed bWithAuthToken - false', () => {
            expect(reducerFeed({ bIsConnected : true,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTED,
                                 payload: { bWithAuthToken : false,
                                            sURL : "test" } })).toEqual({
                                         bIsConnected : true,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });

        it('FEED_CONNECTED: sets data about the feed, sURL and bWithAuthToken' + 
           ', and sets bIsConnectedFlag. Other data left intact. ' + 
           'Initial flag value - false, ' +
           'bWithAuthtoken - true, passed bWithAuthToken - false', () => {
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : true,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTED,
                                 payload: { bWithAuthToken : false,
                                            sURL : "test" } })).toEqual({
                                         bIsConnected : true,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });

        it('FEED_CONNECTED: sets data about the feed, sURL and bWithAuthToken' + 
           ', and sets bIsConnectedFlag. Other data left intact. ' + 
           'Initial flag value - true, ' +
           'bWithAuthtoken - true, passed bWithAuthToken - false', () => {
            expect(reducerFeed({ bIsConnected : true,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : true,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTED,
                                 payload: { bWithAuthToken : false,
                                            sURL : "test" } })).toEqual({
                                         bIsConnected : true,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });
    });

    describe('FEED_CONNECTION_ERROR action tests', () => {

        it('FEED_CONNECTION_ERROR: sets bHasError to true. ' + 
           'Other data left intact. ' +
           'Initial flag value - false', () => {
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTION_ERROR })).toEqual({
                                         bIsConnected : false,
                                         bHasError : true,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });

        it('FEED_CONNECTION_ERROR: leaves bHasError as true. ' + 
           'Other data left intact. ' +
           'Initial flag value - true', () => {
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : true,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_CONNECTION_ERROR })).toEqual({
                                         bIsConnected : false,
                                         bHasError : true,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : { aOrders : [],
                                                       nTotal : 0,
                                                       nTotalToday : 0,
                                                       aReadyOrders : [],
                                                       aPendingOrders : [] } });
        });
    });

    describe('FEED_DISCONNECTED action tests', () => {

        it('FEED_DISCONNECTED: sets bIsConnected, bHasData, bWithAuthToken to' + 
           ' false, oFeedData will be set to initial condition, sURL will be ' +
           'empty. bHasError intact. Source flags: false, false, false', () => {
            const { oFeedData } = reducerFeed(undefined, {} as TFeedAction);
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "something",
                                 oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } },
                               { type : FEED_DISCONNECTED })).toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : oFeedData });
        });

        it('FEED_DISCONNECTED: sets bIsConnected, bHasData, bWithAuthToken to' + 
           ' false, oFeedData will be set to initial condition, sURL will be ' +
           'empty. bHasError intact. Source flags: true, false, false', () => {
            const { oFeedData } = reducerFeed(undefined, {} as TFeedAction);
            expect(reducerFeed({ bIsConnected : true,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "something",
                                 oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } },
                               { type : FEED_DISCONNECTED })).toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : oFeedData });
        });

        it('FEED_DISCONNECTED: sets bIsConnected, bHasData, bWithAuthToken to' + 
           ' false, oFeedData will be set to initial condition, sURL will be ' +
           'empty. bHasError intact. Source flags: false, true, false', () => {
            const { oFeedData } = reducerFeed(undefined, {} as TFeedAction);
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : true,
                                 bWithAuthToken : false,
                                 sURL : "something",
                                 oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } },
                               { type : FEED_DISCONNECTED })).toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : oFeedData });
        });

        it('FEED_DISCONNECTED: sets bIsConnected, bHasData, bWithAuthToken to' + 
           ' false, oFeedData will be set to initial condition, sURL will be ' +
           'empty. bHasError intact. Source flags: false, false, true', () => {
            const { oFeedData } = reducerFeed(undefined, {} as TFeedAction);
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : true,
                                 sURL : "something",
                                 oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } },
                               { type : FEED_DISCONNECTED })).toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : oFeedData });
        });

        it('FEED_DISCONNECTED: sets bIsConnected, bHasData, bWithAuthToken to' + 
           ' false, oFeedData will be set to initial condition, sURL will be ' +
           'empty. bHasError intact. Source flags: true, false, true', () => {
            const { oFeedData } = reducerFeed(undefined, {} as TFeedAction);
            expect(reducerFeed({ bIsConnected : true,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : true,
                                 sURL : "something",
                                 oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } },
                               { type : FEED_DISCONNECTED })).toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : oFeedData });
        });

        it('FEED_DISCONNECTED: sets bIsConnected, bHasData, bWithAuthToken to' + 
           ' false, oFeedData will be set to initial condition, sURL will be ' +
           'empty. bHasError intact. Source flags: true, true, false', () => {
            const { oFeedData } = reducerFeed(undefined, {} as TFeedAction);
            expect(reducerFeed({ bIsConnected : true,
                                 bHasError : false,
                                 bHasData : true,
                                 bWithAuthToken : false,
                                 sURL : "something",
                                 oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } },
                               { type : FEED_DISCONNECTED })).toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : oFeedData });
        });

        it('FEED_DISCONNECTED: sets bIsConnected, bHasData, bWithAuthToken to' + 
           ' false, oFeedData will be set to initial condition, sURL will be ' +
           'empty. bHasError intact. Source flags: false, true, true', () => {
            const { oFeedData } = reducerFeed(undefined, {} as TFeedAction);
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : true,
                                 bWithAuthToken : true,
                                 sURL : "something",
                                 oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } },
                               { type : FEED_DISCONNECTED })).toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : oFeedData });
        });

        it('FEED_DISCONNECTED: sets bIsConnected, bHasData, bWithAuthToken to' + 
           ' false, oFeedData will be set to initial condition, sURL will be ' +
           'empty. bHasError intact. Source flags: true, true, true', () => {
            const { oFeedData } = reducerFeed(undefined, {} as TFeedAction);
            expect(reducerFeed({ bIsConnected : true,
                                 bHasError : false,
                                 bHasData : true,
                                 bWithAuthToken : true,
                                 sURL : "something",
                                 oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } },
                               { type : FEED_DISCONNECTED })).toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : false,
                                         bWithAuthToken : false,
                                         sURL : "",
                                         oFeedData : oFeedData });
        });
    });

    describe('FEED_RECEIVED_DATA action tests', () => {

        it('FEED_RECEIVED_DATA: sets bHasData to true, sets oFeedData equals ' +
           'to payload. All other data intact. Initial bHasData is false',
           () => {
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : false,
                                 bWithAuthToken : false,
                                 sURL : "test",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_RECEIVED_DATA,
                                 payload: { aOrders : [],
                                            nTotal : 6,
                                            nTotalToday : 2,
                                            aReadyOrders : [[123, 456]],
                                            aPendingOrders : [[789]] } }))
                                                                      .toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : true,
                                         bWithAuthToken : false,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } });
        });

        it('FEED_RECEIVED_DATA: sets bHasData to true, sets oFeedData equals ' +
           'to payload. All other data intact. Initial bHasData is true',
           () => {
            expect(reducerFeed({ bIsConnected : false,
                                 bHasError : false,
                                 bHasData : true,
                                 bWithAuthToken : false,
                                 sURL : "test",
                                 oFeedData : { aOrders : [],
                                               nTotal : 0,
                                               nTotalToday : 0,
                                               aReadyOrders : [],
                                               aPendingOrders : [] } },
                               { type : FEED_RECEIVED_DATA,
                                 payload: { aOrders : [],
                                            nTotal : 6,
                                            nTotalToday : 2,
                                            aReadyOrders : [[123, 456]],
                                            aPendingOrders : [[789]] } }))
                                                                      .toEqual({
                                         bIsConnected : false,
                                         bHasError : false,
                                         bHasData : true,
                                         bWithAuthToken : false,
                                         sURL : "test",
                                         oFeedData : { aOrders : [],
                                               nTotal : 6,
                                               nTotalToday : 2,
                                               aReadyOrders : [[123, 456]],
                                               aPendingOrders : [[789]] } });
        });
    });
});