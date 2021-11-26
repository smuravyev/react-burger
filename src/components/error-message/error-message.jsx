import { useCallback } from 'react';
import { useSelector,
         useDispatch,
         shallowEqual } from 'react-redux';

import { Modal } from '../';

import { ERROR_CLEAR } from '../../services/actions/error-message.js';

import styles from './error-message.module.css';

const ErrorMessage = () => {

   const { aErrors,
           bCanProceedWithError } = useSelector((store) => store.errorMessage,
                                                shallowEqual);
           
   const dispatch = useDispatch();
   
   const closer = useCallback(() => {
       dispatch({type : ERROR_CLEAR});
   }, [ dispatch ]); 

   return (   
       (aErrors.length > 0) && (
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
        )
    );
}

export default ErrorMessage;