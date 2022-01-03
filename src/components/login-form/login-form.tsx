import { useRef,
         useEffect,
         useState,
         useCallback } from 'react';

import type { SyntheticEvent } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../services/hooks';

import type { TRootState } from '../../services/store';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { CheckableInput,
         Loader } from '../';

import { setError } from '../../services/actions/error-message';

import { oErrorCodes } from '../../utils/constants'; 

import { rePasswordChecker } from '../../utils/checkers';

import { SAVE_ENTERED_EMAIL,
         requestLogin } from '../../services/actions/authorization';
         
import type { TChangeHandler } from '../checkable-input/checkable-input';

import styles from './login-form.module.css';

const LoginForm = () : JSX.Element => {
    const oEmailInputRef = useRef<HTMLInputElement>(null);
    
    const sEnteredEmail = useSelector((store : TRootState) =>
                                             store.authorization.sEnteredEmail);

    const bIsBusy = useSelector((store : TRootState) => store.app.bIsBusy);

    const [oFormData, setFormData] = useState({email : sEnteredEmail,
                                               password : ""});

    const [bPasswordShown, setBPasswordShown] = useState(false);

    const dispatch = useAppDispatch();

    const onChange : TChangeHandler<"email" | "password"> = (oData) => {
        setFormData({...oFormData,
                     [oData.sName] : oData.sValue });
    }
    
    const onShowHideClick = () : void => {
        setBPasswordShown(!bPasswordShown);
    }
    
    const saveEnteredEmail = () : void => {
        if((oFormData.email !== sEnteredEmail) && 
           (oFormData.email !== "")){
            dispatch({type: SAVE_ENTERED_EMAIL,
                      payload: { sEmail : oFormData.email }});
        }
    }

    const formSubmitHandler = useCallback((eEvent : SyntheticEvent) : void => {
        eEvent.preventDefault();
        if(!bIsBusy){
            if(oFormData.email && oFormData.password){
                dispatch(requestLogin({ sEmail : oFormData.email,
                                        sPassword : oFormData.password }));
            }
            else{
                 dispatch(setError(oErrorCodes.EC_INVALID_FORM_DATA, true));
            }
        }
    }, [ dispatch, oFormData.email, oFormData.password, bIsBusy]);

    useEffect(() => {
        oEmailInputRef &&
        oEmailInputRef.current &&
        oEmailInputRef.current.focus();
    }, [])
    
    
    return (
        <section className={`${styles.centered_section} pt-20 mt-20`}>
            <h1 className="text text_type_main-medium">
                Вход
            </h1>
            <form className="pt-6 pb-20 width_480px_form"
                  onSubmit={formSubmitHandler}>
                <ul className={styles.fields_list}>
                    <li className={`${styles.field_container} pb-6`}>
                        <CheckableInput changeHandler={onChange as
                                                         TChangeHandler<string>}
                               bIsRequired={true}
                               mChecker="email"
                               sDefaultValue={sEnteredEmail}
                               name="email"
                               type="email"
                               sName="email"
                               placeholder="Электронная почта"
                               ref={oEmailInputRef} />
                    </li>
                    <li className={`${styles.field_container} pb-6`}
                        title=
                            {"Пароль должен содержать не менее 6 символов, " + 
                             "допустимы цифры, английские буквы, ряд символов"}>
                        <CheckableInput changeHandler={onChange as
                                                         TChangeHandler<string>}
                               bIsRequired={true}
                               mChecker={rePasswordChecker}
                               sDefaultValue=""
                               name="password"
                               type={bPasswordShown ? "text" : "password"}
                               sName="password"
                               icon={bPasswordShown ? "HideIcon" : "ShowIcon"}
                               onIconClick={onShowHideClick}
                               placeholder="Пароль" />
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
                            Войти
                        </Button>
                    )
                }
                <article className=
               {`${styles.bottom_links} pt-20 pb-4 text text_type_main-small ` + 
                `text_color_inactive`}>
                    Вы&nbsp;&mdash; новый пользователь&nbsp;
                    <Link to="/register/"
                          onClick={saveEnteredEmail}>Зарегистрироваться</Link>
                </article>
                <article className=
       {`${styles.bottom_links} text text_type_main-small text_color_inactive`}>
                    Забыли пароль?&nbsp;
                    <Link to="/forgot-password/"
                          onClick={saveEnteredEmail}>Восстановить пароль</Link>
                </article>
            </form>
            
            
        </section>
    );
};

export default LoginForm;