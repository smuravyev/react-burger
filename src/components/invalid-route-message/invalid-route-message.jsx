import { useEffect } from 'react';

import { Navigate } from 'react-router-dom';
 
import { useDispatch } from 'react-redux';
 
import { setError } from '../../services/actions/error-message';

import { oErrorCodes } from '../../utils/constants';
 
const InvalidRouteMessage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setError(oErrorCodes.EC_INVALID_ROUTE, true));
    }, [dispatch]); 
    
    return (
        <Navigate to="/" replace={true} />
    );
};

export default InvalidRouteMessage;