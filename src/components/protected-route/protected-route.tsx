import { useEffect } from 'react';

import type { FC } from 'react';

import { useAppDispatch,
         useAppSelector } from '../../services/hooks';

import { useLocation,
         Navigate } from 'react-router-dom';

import { SET_RETURN_PATH } from '../../services/actions/authorization';

export interface IProtectedRouteProps {
    sFromWhom? : "authorized" | "unauthorized";
    sRedirectTo? : string | null;
    bSavePathToStore? : boolean
};

const ProtectedRoute : FC<IProtectedRouteProps> = ({ sFromWhom = "unauthorized",
                          sRedirectTo = null,
                          bSavePathToStore = false, 
                          children }) => {

    const bIsAuthorized = useAppSelector(store =>
                                                store.authorization.bIsUserSet);
    
    const bAuthCheckDone = useAppSelector(store =>
                                            store.authorization.bAuthCheckDone);
    
    const sReturnPath = useAppSelector(store =>
                                        store.authorization.sReturnPath || "/"); 

    const dispatch = useAppDispatch();

    const oLocation = useLocation();

    const bIsAllowed = (((bIsAuthorized) && (sFromWhom === "unauthorized")) ||  
                       ((!(bIsAuthorized)) && (sFromWhom === "authorized")));
                       
    const sRedirectionLink = sRedirectTo ? sRedirectTo :
                                             ( sReturnPath ? sReturnPath : "/");
    useEffect(() => {
        if(bSavePathToStore && (!(bIsAllowed))){
            dispatch({ type: SET_RETURN_PATH,
                       payload: { sReturnPath : oLocation.pathname }});
        }
    }, [bIsAllowed,
        dispatch,
        oLocation.pathname,
        bSavePathToStore,
        sReturnPath]);

    return bAuthCheckDone ? (bIsAllowed ? (
                                 <>
                                     {children}
                                 </>
                            ) : (
                                <Navigate to={sRedirectionLink}
                                          replace={true} />
            )) : null;
             
};

export default ProtectedRoute;