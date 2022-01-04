import { useRef,
         useEffect,
         useState,
         useCallback } from 'react';

import { oErrorCodes } from '../../utils/constants';
         
import { Link } from 'react-router-dom';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useAppDispatch,
         useAppSelector } from '../../services/hooks';
         
import { Navigate,
         useLocation } from 'react-router-dom';

import { CheckableInput,
         Loader } from '../';
         
import type { TChangeHandler } from '../checkable-input/checkable-input';

import { setError } from '../../services/actions/error-message';

import { requestResetPassword } from '../../services/actions/authorization';

import type { SyntheticEvent } from 'react';

import styles from './reset-password-form.module.css';

const ResetPasswordForm = () : JSX.Element => {
    const oPasswordInputRef = useRef<HTMLInputElement>(null);

    const bIsBusy = useAppSelector(store => store.app.bIsBusy);
    
    const bWeAllowedToSeeThisPage = useAppSelector(store =>
                            (store.authorization.bIsForgotPasswordRequestSuccess
                            && (!(store.authorization.bIsUserSet))));

    // Detected type OK
    const [oFormData, setFormData] = useState({password : "",
                                               code : ""});
    
    // Boolean detected, OK
    const [bPasswordShown, setBPasswordShown] = useState(false);
    
    const dispatch = useAppDispatch();
    
    const oLocation = useLocation();

    const onChange : TChangeHandler<"code" | "password"> =  (oData) : void => {
        setFormData({...oFormData,
                     [oData.sName] : oData.sValue });
    };
    
    const onShowHideClick = () : void => {
        setBPasswordShown(!bPasswordShown);
    };

    useEffect(() => {
        oPasswordInputRef &&
        oPasswordInputRef.current &&
        oPasswordInputRef.current.focus();
    }, [])

    const formSubmitHandler = useCallback((eEvent : SyntheticEvent) : void => {
        eEvent.preventDefault();
        if(!bIsBusy){
            if(oFormData.password && oFormData.code){
                dispatch(
                        requestResetPassword({ sNewPassword: oFormData.password,
                                               sCode: oFormData.code }));
            }
            else{
                dispatch(setError(oErrorCodes.EC_INVALID_FORM_DATA, true));
            }
        }
    }, [ dispatch, oFormData.password, oFormData.code, bIsBusy]);

    return (bWeAllowedToSeeThisPage && oLocation.state.bAllowed) ? (
        <section className={`${styles.centered_section} pt-20 mt-20`}>
            <h1 className="text text_type_main-medium">
                Восстановление пароля
            </h1>
            <form className="pt-6 pb-20 width_480px_form"
                  onSubmit={formSubmitHandler}>
                <ul className={styles.fields_list}>
                    <li className={`${styles.field_container} pb-6`}
                      title={"Пароль должен содержать не менее 6 символов, " + 
                             "допустимы цифры, английские буквы, ряд символов"}>
                        <CheckableInput changeHandler={onChange as
                                                         TChangeHandler<string>}
                               bIsRequired={true}
                               mChecker={/^[a-zA-Z0-9!@#$%^&*_.,.<>-]{6,}$/}
                               sDefaultValue=""
                               name="password"
                               type={bPasswordShown ? "text" : "password"}
                               sName="password"
                               icon={bPasswordShown ? "HideIcon" : "ShowIcon"}
                               onIconClick={onShowHideClick}
                               placeholder="Введите новый пароль"
                               ref={oPasswordInputRef} />
                    </li>
                    <li className={`${styles.field_container} pb-6`}
                      title="Введите полученный из письма код">
                        <CheckableInput changeHandler={onChange as
                                                         TChangeHandler<string>}
                               bIsRequired={true}
                               mChecker={/^.+$/}
                               sDefaultValue=""
                               name="code"
                               type="text"
                               sName="code"
                               placeholder="Введите код из письма" />
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
                        <Button type="primary" size="medium">
                            Сохранить
                        </Button>
                    )
                }
                <article
      className={`${styles.bottom_links} pt-20 pb-4 text text_type_main-small` +  
                 ` text_color_inactive`}>
                    Вспомнили пароль? <Link to="/login/">Войти</Link>
                </article>
            </form>
        </section>
    ) : (
        <Navigate to='/forgot-password' replace={true} />
    );
};

export default ResetPasswordForm;