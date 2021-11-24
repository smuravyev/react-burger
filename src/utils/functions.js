import Cookies from 'js-cookie';

import { oErrorCodes } from '../utils/constants';

import { oSettings } from '../config/config';

const constructHeaders = (oOptions) => {
    const oResult = oOptions.headers ? oOptions.headers : new Headers();
    const sAccessToken = Cookies.get("accessToken");
    
    oResult.set("Authorization", "Bearer " + sAccessToken);
    
    return oResult;
}

const tryToRefreshToken = async () => {
    const oResponse = await fetch(oSettings.sAPIBaseURL +
                                               oSettings.oAPIURIS.sRefreshToken,
                                  { method : "POST",
                                    headers: { "Content-Type" :
                                                            "application/json"},
                                    body: JSON.stringify({
                                        token: Cookies.get("refreshToken")
                                    })});
    if(oResponse.ok){
        const oData = await oResponse.json();
        if(oData.success){
            Cookies.set("accessToken",
                        oData.accessToken.replace("Bearer ", ""));
            Cookies.set("refreshToken",
                        oData.refreshToken.replace("Bearer ", ""));
            return true;
        }
    }
}

export const fetchWithAuth = async (sURL, oOptions) => {
    let oResult = { success : false };
    
    try{
        const oResponse = await fetch(sURL, {...oOptions,
                                            headers :
                                                   constructHeaders(oOptions)});
        if(oResponse.ok){
            oResult = await oResponse.json();
        }
        else{
            const oData = await oResponse.json();
            throw(new Error(oData.message));
        }
    }
    catch(erError){
        if(erError.message === "jwt expired"){
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