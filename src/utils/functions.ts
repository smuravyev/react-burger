import Cookies from 'js-cookie';

import { oErrorCodes, nMaxDigitsInTheOrderNumber } from '../utils/constants';

import { oSettings } from '../config/config';

import type { IAPIRequestData } from './types';

export interface IRefreshTokenResult extends IAPIRequestData {
    accessToken? : string;
    refreshToken? : string;
};

export interface IUserDataResult extends IAPIRequestData {
    user : {
        email: string;
        name : string;
    }
};

export interface IOrderRequestResult extends IAPIRequestData {
    name: string;
    order: {
        number : number;
    };
};

export type TAuthorizedRequestResult = IOrderRequestResult | IUserDataResult |
                                       IAPIRequestData;

export interface IFetchRequestOptions {
    method : 'GET'| 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'HEAD' |
             'CONNECT' | 'OPTIONS' | 'TRACE';
    headers?: Headers;
    body?: string;
    mode? : "cors" | "no-cors" | "same-origin";
    credentials? : "omit" | "same-origin" | "include";
    cache? : "default" | "no-store" | "reload" | "no-cache" | "force-cache";
    redirect? : "follow" | "error" | "manual";
    referrer? : string;
    referrerPolicy?: "no-referrer" | "no-referrer-when-downgrade" | 
                     "same-origin" | "origin" | "strict-origin" | 
                     "origin-when-cross-origin" |
                     "strict-origin-when-cross-origin" | "unsafe-url";
    intergrity? : string;
    keepalive? : boolean;
    signal? : AbortSignal;
};

export interface IErrorData {
    message? : string;
};

const constructHeaders = (oOptions : IFetchRequestOptions) : Headers => {
    // Headers, OK.
    const oResult = oOptions.headers ? oOptions.headers : new Headers();
    
    // String, OK.
    const sAccessToken = Cookies.get("accessToken");
    
    oResult.set("Authorization", "Bearer " + sAccessToken);
    
    return oResult;
}

export const saveTokens : (payload : {accessToken? : string,
                                      refreshToken? : string}) => void = 
                                              ({accessToken = "",
                                                refreshToken = ""}) => {
    Cookies.set("accessToken",
                accessToken.replace("Bearer ", ""), 
                { expires : oSettings.oCookiesLifetime.nAccess });
    Cookies.set("refreshToken",
                refreshToken.replace("Bearer ", ""), 
                { expires : oSettings.oCookiesLifetime.nRefresh });
};

const tryToRefreshToken : () => Promise<boolean> = async () => {
    const oResponse = await fetch(oSettings.sAPIBaseURL +
                                               oSettings.oAPIURIS.sRefreshToken,
                                  { method : "POST",
                                    headers: { "Content-Type" :
                                                            "application/json"},
                                    body: JSON.stringify({
                                        token: Cookies.get("refreshToken")
                                    })});
    if(oResponse.ok){
        const oData : IRefreshTokenResult = await oResponse.json();
        if(oData.success){
            saveTokens({ accessToken: oData.accessToken,
                        refreshToken : oData.refreshToken });
            return true;
        }
    }
    return false;
}

export type TFetchWithAuthFunction = (sURL : string,
                                      oOptions : IFetchRequestOptions) =>
                                              Promise<TAuthorizedRequestResult>;

export const fetchWithAuth : TFetchWithAuthFunction =
                                                     async (sURL, oOptions) => {
    let oResult : TAuthorizedRequestResult = { success : false };
    try{
        const oResponse = await fetch(sURL, {...oOptions,
                                            headers :
                                                   constructHeaders(oOptions)});
        if(oResponse.ok){
            oResult = await oResponse.json();
        }
        else{
            const oData : IErrorData = await oResponse.json();
            throw(new Error(oData.message || ""));
        }
    }
    catch(erError : unknown /* it's required to be such type */){
        // Check type first ad we can not set it in catch clause
        if((erError instanceof Error) && erError.message === "jwt expired"){
            //Need to refresh token!
            if(await tryToRefreshToken()){
                //Got it, we renewed it!
                const oNewResponse = await fetch(sURL, {...oOptions,
                                                        headers :
                                                   constructHeaders(oOptions)});
                if(oNewResponse.ok){
                    oResult = await oNewResponse.json();
                }
                else{
                    throw new Error(oErrorCodes.EC_FETCH_ERROR);
                }
            }
        }
    }
    finally{
        return oResult;
    }
};

export const addTrailingSlash : (sString : string) => string = (sString) => {
    return (/^.*\/$/.test(sString)) ? sString : (sString + "/");
};

export const formatOrderNumber =
                (nNumber : number,
                 nMaxDigits : number = nMaxDigitsInTheOrderNumber) : string => {
    let sResult: string = String(nNumber);
    if(sResult.length > nMaxDigits){
        sResult = sResult.slice(sResult.length - nMaxDigits);
    }
    else{
        const nSymbolsToAdd : number = nMaxDigits - sResult.length;
        for (let nCounter : number = 0; nCounter < nSymbolsToAdd; nCounter++){
            sResult = "0" + sResult;
        }
    }
    return sResult;
};