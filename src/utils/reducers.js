import {oErrorCodes} from "./constants.js";

export const aInitialUsedIngredients = {list : {}};

export function usedIngredientsReducer(oState, {operation, ID = ""}){
    if(operation){
        switch(operation){
            case "add":
                if(oState.list[ID]){
                    return {list: {...oState.list,
                                   [ID]: oState.list[ID] + 1}};
                }
                else{
                    return {list: {...oState.list, [ID] :  1 }};
                }
            case "remove":
                if(oState.list[ID] && oState.list[ID] > 0){
                    return {list: {...oState.list, [ID] : oState.list[ID] - 1}};
                }
                else{
                    return {list: {...oState.list, [ID] :  1 }};
                }
            case "reset":
                return {list: {}};
            default: //continue to the end
        }
    }
    throw new Error(oErrorCodes.EC_BAD_ACTION_FOR_USED_INGREDIENTS);        
}

export const aInitialPrice = {value: 0};

export function modifyPrice(oState, {operation, amount = 0}){
    if(operation){
        switch(operation){
            case "add":
                return {value: oState.value + amount};
            case "adddoubled":
                return {value: oState.value + amount * 2};
            case "reduce":
                return {value: oState.value - amount};
            case "reducedoubled":
                return {value: oState.value - amount * 2};
            case "reset":
                return {value: 0};
            default: //continue to the end

        }
    }
    throw new Error(oErrorCodes.EC_BAD_ACTION_FOR_PRICE);
}