import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';

import { Modal } from '../';

import { useAppDispatch,
         useAppSelector } from '../../services/hooks';

import { errorClearAction } from '../../services/actions/error-message';

import styles from './error-message.module.css';

const ErrorMessage = () => {

   const { aErrors,
           bCanProceedWithError } = useAppSelector(store => store.errorMessage,
                                                shallowEqual);
           
   const dispatch = useAppDispatch();
   
   const closer = useCallback(() : void => {
       dispatch(errorClearAction());
   }, [ dispatch ]); 

   return (   
       (aErrors.length > 0) ? (
           <Modal canClose={bCanProceedWithError}
                  closer={closer}
                  caption="Произошла ошибка">
               {
                   aErrors.map((sMessage, nIndex) => (
                       <p key={nIndex} className=
                          {`${styles.message} text text_type_main-small pl-10 pr-10`}>
                           {sMessage}
                       </p>
                   ))
               }
           </Modal>                  
        ) : null
    );
}

export default ErrorMessage;