import Cookies from 'js-cookie';

import { oErrorCodes } from '../utils/constants';

import { oSettings } from '../config/config';

export interface IRequestResult {
    success: boolean;
}

export interface IRefreshTokenResult extends IRequestResult {
    accessToken? : string;
    refreshToken? : string;
};

export interface IUserDataResult extends IRequestResult {
    user : {
        email: string;
        name : string;
    }
};

export interface IOrderRequestResult extends IRequestResult {
    name: string;
    order: {
        number : number;
    };
};

export type TAuthorizedRequestResult = IOrderRequestResult | IUserDataResult |
                                       IRequestResult;

export interface IFetchRequestOptions {
    method : 'GET '| 'POST' | 'PATCH' | 'DELETE' | 'PUT' | 'HEAD' |
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
    catch(erError : any){
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