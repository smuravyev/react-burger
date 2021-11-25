import { useRef,
         useEffect,
         useState,
         useCallback } from 'react';

import { Link } from 'react-router-dom';

import { useSelector,
         useDispatch } from 'react-redux';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { CheckableInput,
         Loader } from '../';

import { setError } from '../../services/actions/error-message';

import { oErrorCodes } from '../../utils/constants'; 

import { rePasswordChecker } from '../../utils/checkers';

import { SAVE_ENTERED_EMAIL,
         requestLogin } from '../../services/actions/authorization';

import styles from './login-form.module.css';

const LoginForm = () => {
    const oEmailInputRef = useRef(null);
    
    const sEnteredEmail = useSelector(store =>
                                             store.authorization.sEnteredEmail);

    const bIsBusy = useSelector(store => store.app.bIsBusy);

    const [oFormData, setFormData] = useState({email : sEnteredEmail,
                                               password : ""});

    const [bPasswordShown, setBPasswordShown] = useState(false);

    const dispatch = useDispatch();

    const onChange = (oData) => {
        setFormData({...oFormData,
                     [oData.sName] : oData.sValue });
    }
    
    const onShowHideClick = () => {
        setBPasswordShown(!bPasswordShown);
    }
    
    const saveEnteredEmail = () => {
        if((oFormData.email !== sEnteredEmail) && 
           (oFormData.email !== "")){
            dispatch({type: SAVE_ENTERED_EMAIL,
                      payload: { sEmail : oFormData.email }});
        }
    }

    const formSubmitHandler = useCallback((eEvent) => {
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
                    <li className={`${styles.field_container} pb-6`}
                        title=
                            {"Пароль должен содержать не менее 6 символов, " + 
                             "допустимы цифры, английские буквы, ряд символов"}>
                        <CheckableInput changeHandler={onChange}
                               bIsRequired={true}
                               mChecker={rePasswordChecker}
                               sDefaultValue=""
                               name="password1"
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