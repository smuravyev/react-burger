import { useRef,
         useEffect,
         useState,
         useCallback } from 'react';

import { oErrorCodes } from '../../utils/constants';
         
import { Link,
         Navigate } from 'react-router-dom';

import { useSelector,
         useDispatch,
         shallowEqual } from 'react-redux';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { CheckableInput,
         Loader } from '../';

import { setError } from '../../services/actions/error-message';

import { SAVE_ENTERED_EMAIL,
         requestForgotPassword } from '../../services/actions/authorization';

import styles from './forgot-password-form.module.css';

const ForgotPasswordForm = () => {
    const oEmailInputRef = useRef(null);
    
    const { sEnteredEmail,
            bIsForgotPasswordRequestSuccess } = useSelector(store =>
                                                           store.authorization,
                                                           shallowEqual);
    const bIsBusy = useSelector(store => store.app.bIsBusy);

    const [oFormData, setFormData] = useState({ email : sEnteredEmail });
    
    const dispatch = useDispatch();

    const onChange = (oData) => {
        setFormData({...oFormData,
                     [oData.sName] : oData.sValue });
    }
    
    const saveEnteredEmail = () => {
        if((oFormData.email !== sEnteredEmail) && 
           (oFormData.email !== "")){
            dispatch({type: SAVE_ENTERED_EMAIL,
                      payload: { sEmail : oFormData.email }});
        }
    }

    useEffect(() => {
        oEmailInputRef &&
        oEmailInputRef.current &&
        oEmailInputRef.current.focus();
    }, [])
    
    const buttonClickHandler = useCallback((eEvent) => {
        eEvent.preventDefault();
        if(oFormData.email){
            dispatch(requestForgotPassword({ sEmail : oFormData.email }));
        }
        else{
             dispatch(setError(oErrorCodes.EC_INVALID_FORM_DATA, true));
        }
    }, [ dispatch, oFormData.email]);

    return bIsForgotPasswordRequestSuccess ? (
        <Navigate to='/reset-password' replace={true}
                  state={{ bAllowed: true }} />
    ) : (
        <section className={`${styles.centered_section} pt-20 mt-20`}>
            <h1 className="text text_type_main-medium">
                Восстановление пароля
         </h1>
         <form className="pt-6 pb-20 width_480px_form">
             <ul className={styles.fields_list}>
                 <li className={`${styles.field_container} pb-6`}>
                     <CheckableInput changeHandler={onChange}
                                     bIsRequired={true}
                                     mChecker="email"
                                     sDefaultValue={sEnteredEmail}
                                     name="email"
                                     type="email"
                                     sName="email"
                                     placeholder="Электронная почта"
                                     ref={oEmailInputRef} />
                 </li>
             </ul>
             {
                 bIsBusy && (
                     <div className={styles.loader_container}>
                         <Loader message="Загрузка" />
                     </div>
                 )
             }
             {
                 (!bIsBusy) && (
                     <Button type="primary" size="medium"
                              onClick={buttonClickHandler}>
                         Восстановить
                     </Button>
                 )
             }
             <article
      className={`${styles.bottom_links} pt-20 pb-4 text text_type_main-small` +  
                 ` text_color_inactive`}>
                 Вспомнили пароль? <Link to="/login/"
                                         onClick={saveEnteredEmail}>Войти</Link>
             </article>
        </form>
    </section> );
};

export default ForgotPasswordForm;