import { useEffect } from 'react';

import { PropTypes } from 'prop-types';  

import { useSelector,
         useDispatch } from 'react-redux';

import { useLocation, Navigate } from 'react-router-dom';

import {SET_RETURN_PATH } from '../../services/actions/authorization';

const ProtectedRoute = ({ sFromWhom = "unauthorized",
                          sRedirectTo = null,
                          bSavePathToStore = false, 
                          children }) => {
    const bIsAuthorized = useSelector(store => store.authorization.bIsUserSet);
    
    const bAuthCheckDone =
                       useSelector(store => store.authorization.bAuthCheckDone);
    
    const sReturnPath = useSelector(store => store.authorization.sReturnPath ||
                                    "/"); 

    const dispatch = useDispatch();

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
                                 {...children}
                            ) : (
                                <Navigate to={sRedirectionLink}
                                          replace={true} />
            )) : null;
             
};

ProtectedRoute.propTypes = {
    sFromWhom : PropTypes.oneOf(["authorized", "unauthorized"])
}

export default ProtectedRoute;