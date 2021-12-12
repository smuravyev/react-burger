import { useEffect } from 'react';

import { Navigate } from 'react-router-dom';
 
import { useAppDispatch } from '../../services/hooks';
 
import { setError } from '../../services/actions/error-message';

import { oErrorCodes } from '../../utils/constants'; 
 
const InvalidRouteMessage = () : JSX.Element => {
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        // TODO: typing in sprint 5
        dispatch(setError(oErrorCodes.EC_INVALID_ROUTE, true) as any);
    }, [dispatch]); 
    
    return (
        <Navigate to="/" replace={true} />
    );
};

export default InvalidRouteMessage;