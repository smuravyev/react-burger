import { setFeedConnectionErrorAction,
         setFeedConnectedAction,
         setFeedDisconnectedAction,
         setFeedReceivedDataAction } from '../actions/feed';

import { socketConnectAction,
         socketCloseAction } from '../middleware/socket-middleware';

import { setError } from '../actions/error-message';

import { requestAuthorizationCheck } from '../actions/authorization';

import { oErrorCodes,
         oIngredientTypes,
         oOrderTypes,
         nMaxOrdersInDoneColumn,
         nMaxOrdersInPendingColumn,
         nMaxOrdersInPendingList,
         nMaxOrdersInDoneList } from '../../utils/constants';

import { sInvalidTokenInSocketMessage } from '../../utils/constants';

import type { TAppThunk } from '../store';

import type { TArrayOfIngredients,
              IOrdersFeedData,
              IOrderNumberAndTime,
              IOrderWithProcessedIngredientsProperties,
              IProcessedForFeedIngredient,
              IDraggableIngredient } from '../../utils/types';
  
const processOrders =
                  (aOrders : IOrdersFeedData,
                   aIngredients : TArrayOfIngredients) => {

    const findIngredientData = (function() {
        let oResults : { [sID: string] : IProcessedForFeedIngredient } = {}; 
        return function(sID : string){
            if(!(oResults[sID])){
                let oIngredient : IDraggableIngredient | null  = null;
                for (let nTypesCounter = 0;
                     (nTypesCounter < aIngredients.length) &&
                     !(oIngredient);
                     nTypesCounter++){
                    for(let nCounter = 0;
                        (nCounter < aIngredients[nTypesCounter].aSet.length)
                                                            && (!(oIngredient));
                         nCounter++){
                        if(aIngredients[nTypesCounter].aSet[nCounter]._id
                                                                       === sID){
                            oIngredient =
                                     aIngredients[nTypesCounter].aSet[nCounter];
                        }
                    }
                }
                if(oIngredient !== null){
                    oResults[sID] = { image : oIngredient.image,
                                      name : oIngredient.name,
                                      type : oIngredient.type,
                                      price: oIngredient.price };
                }
            }
            return oResults[sID];
        };
    })();
        
    const prepareOrderList = (aOrders : Array<IOrderNumberAndTime>,
                              nMaxOrdersPerColumn : number, 
                              nMaxOrders : number) : number[][] => {

        const aResult: number[][] = [];
        for (let nCounter : number = 0,
                 nCurrentColumn : number = 0,
                 nItemsInColumn : number = 0;
             nCounter < nMaxOrders && nCounter < aOrders.length;
             nCounter++){
            if(!aResult[nCurrentColumn]){
                aResult[nCurrentColumn] = [];
            }
            aResult[nCurrentColumn][nItemsInColumn] = aOrders[nCounter].nNumber;
            nItemsInColumn++;
            if(nItemsInColumn === nMaxOrdersPerColumn){
                nItemsInColumn = 0;
                nCurrentColumn++;
            }
        }
        return aResult;
    }; 
        
    const compareOrdersByTime = 
                              (oFirstOrder : IOrderNumberAndTime,
                               oSecondOrder : IOrderNumberAndTime) : number => { 
        return oSecondOrder.nTimeUpdated - oFirstOrder.nTimeUpdated;
    };

    const aReadyOrders : Array<IOrderNumberAndTime> = [];
    const aPendingOrders : Array<IOrderNumberAndTime> = [];
    const aSortedOrders = [...aOrders.orders];
    aSortedOrders.sort((oOrder1, oOrder2) => {
       const dt1Date = new Date(oOrder1.createdAt);
       const dt2Date = new Date(oOrder2.createdAt);
       return dt2Date.getTime() - dt1Date.getTime(); 
    });
        
    const aResultOrders : Array<IOrderWithProcessedIngredientsProperties>
                                                 = aSortedOrders.map(oOrder => {
        let nPrice : number = 0;
        if(oOrder.status === oOrderTypes.sDone){
            aReadyOrders.push({nNumber : oOrder.number,
                               nTimeUpdated:
                                       (new Date(oOrder.updatedAt)).getTime()});
        }
        if((oOrder.status === oOrderTypes.sPending) ||
           (oOrder.status === oOrderTypes.sCreated)){
            aPendingOrders.push({nNumber : oOrder.number,
                                 nTimeUpdated:
                                       (new Date(oOrder.updatedAt)).getTime()});
        }

        // Bun will be userful. We must place it on the 1st place always 
        let oBun : IProcessedForFeedIngredient | undefined = undefined;
        const aIngredients : Array<IProcessedForFeedIngredient> =
                                                 oOrder.ingredients.map(sID => {
            const oIngredient = findIngredientData(sID);
            if (oIngredient?.type === oIngredientTypes.oBun.sName) {
                oBun = oIngredient;
            }
            if(oIngredient.price !== undefined){
                nPrice = nPrice +
                            (oIngredient?.type === oIngredientTypes.oBun.sName ?
                            oIngredient.price * 2 : oIngredient.price);
            }
            return findIngredientData(sID);
        });
        //Reverse items to match the design order
        aIngredients.reverse();
        return {...oOrder,
                ingredients : oBun ?
                       [...aIngredients.filter(oI => oI.type !== 'bun'), oBun] :
                       aIngredients,
                price : nPrice };
    });
        
    //Sorting orders list in place...
    aReadyOrders.sort(compareOrdersByTime)
    aPendingOrders.sort(compareOrdersByTime);
    return {aOrders: aResultOrders, 
            aReadyOrders : prepareOrderList(aReadyOrders,
                                            nMaxOrdersInDoneColumn,
                                            nMaxOrdersInDoneList),
            aPendingOrders : prepareOrderList(aPendingOrders,
                                              nMaxOrdersInPendingColumn,
                                              nMaxOrdersInPendingList),
            nTotal : aOrders.total,
            nTotalToday : aOrders.totalToday };
};

export const socketDisconnect : TAppThunk = () => dispatch => {
    dispatch(socketCloseAction());
}

export const socketConnect : TAppThunk = (sURL : string,
                                          bWithAuthToken : boolean = false) =>
                                                                   dispatch => {
    dispatch(socketConnectAction(sURL,
                                 bWithAuthToken,
                                 onSocketConnected,
                                 onSocketClosed,
                                 onSocketError,
                                 onSocketMessage));

    };
            
export const onSocketError : TAppThunk = () => dispatch => {
    dispatch(setFeedConnectionErrorAction());
};

export const onSocketConnected : TAppThunk = (sURL : string,
                                              bWithAuthToken : boolean) =>
                                                                  dispatch => {
        dispatch(setFeedConnectedAction(bWithAuthToken, sURL));
};

export const onSocketClosed : TAppThunk = () => dispatch => {
    dispatch(setFeedDisconnectedAction());
}

export const onSocketMessage : TAppThunk =
                              ( sMessage : string ) => (dispatch, getState) => {
    try{
        // There might be a JSON parse error
        const oData : IOrdersFeedData = JSON.parse(sMessage);
        
        const store = getState();
        
        if((store.burgerIngredients.bLoadedSuccessful) &&
            (oData?.success)){
            const oProcessedOrders = processOrders(oData,
                                                   store.burgerIngredients.aIngredients);
            if(oProcessedOrders !== null){
                dispatch(setFeedReceivedDataAction(oProcessedOrders));
            }
        }
        else{
            if((oData?.message === sInvalidTokenInSocketMessage) &&
               (store?.feed?.bWithAuthToken)){
                //Need to renew token!
                 
                dispatch(requestAuthorizationCheck(() =>  {
                    dispatch(socketConnect(store.feed.sURL,
                                          store.feed.bWithAuthToken));
                }));
            }
            else{
                dispatch(setError(oErrorCodes.EC_SYNTAX_ERROR_PARSING_MESSAGE,
                                  true));
                dispatch(onSocketError());
            }
        }
    }
    catch(_)
    {
        dispatch(setError(oErrorCodes.EC_SYNTAX_ERROR_PARSING_MESSAGE, true));
        dispatch(onSocketError());
    }
} 