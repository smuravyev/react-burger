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

import { reNameChecker,
         rePasswordChecker } from '../../utils/checkers';

import { SAVE_ENTERED_EMAIL,
         requestRegisterUser } from '../../services/actions/authorization';

import styles from './register-form.module.css';

const RegisterForm = () => {
    const oNameInputRef = useRef(null);

    const sEnteredEmail = useSelector(store =>
                                             store.authorization.sEnteredEmail);

    const bIsBusy = useSelector(store => store.app.bIsBusy);

    const [oFormData, setFormData] = useState({name : "",
                                               email : sEnteredEmail,
                                               password : ""});
    
    const [bPasswordShown, setBPasswordShown] = useState(false);
    
    const dispatch = useDispatch();
    
    const saveEnteredEmail = () => {
        if((oFormData.email !== sEnteredEmail) && 
           (oFormData.email !== "")){
            dispatch({type: SAVE_ENTERED_EMAIL,
                      payload: { sEmail : oFormData.email }});
        }
    }

    const onChange = (oData) => {
        setFormData({...oFormData,
                     [oData.sName] : oData.sValue });
    }
    
    const onShowHideClick = () => {
        setBPasswordShown(!bPasswordShown);
    }

    const formSubmitHandler = useCallback((eEvent) => {
        eEvent.preventDefault();
        if(!bIsBusy){
            if(oFormData.name && oFormData.email && oFormData.password){
                dispatch(requestRegisterUser({ sEmail : oFormData.email,
                                               sName : oFormData.name, 
                                               sPassword : oFormData.password
                                             }));
            }
            else{
                 dispatch(setError(oErrorCodes.EC_INVALID_FORM_DATA, true));
            }
        }
    }, [ dispatch,
         oFormData.email, 
         oFormData.name, 
         oFormData.password, 
         bIsBusy]);

    useEffect(() => {
        oNameInputRef &&
        oNameInputRef.current &&
        oNameInputRef.current.focus();
    }, [])
    
    return (
        <section className={`${styles.centered_section} pt-20 mt-20`}>
            <h1 className="text text_type_main-medium">
                Регистрация
            </h1>
            <form className="pt-6 pb-20 width_480px_form"
                  onSubmit={formSubmitHandler}>
                <ul className={styles.fields_list}>
                    <li className={`${styles.field_container} pb-6`}
                        title="Английские буквы и цифры, минимум 2 символа">
                        <CheckableInput changeHandler={onChange}
                               bIsRequired={true}
                               mChecker={reNameChecker}
                               sDefaultValue=""
                               name="name"
                               type="text"
                               sName="name"
                               placeholder="Имя"
                               ref={oNameInputRef} />
                    </li>
                    <li className={`${styles.field_container} pb-6`}>
                        <CheckableInput changeHandler={onChange}
                               bIsRequired={true}
                               mChecker="email"
                               sDefaultValue={sEnteredEmail}
                               name="email"
                               type="email"
                               sName="email"
                               placeholder="Электронная почта" />
                    </li>
                    <li className={`${styles.field_container} pb-6`}
                      title={"Пароль должен содержать не менее 6 символов, " + 
                             "допустимы цифры, английские буквы, ряд символов"}>
                        <CheckableInput changeHandler={onChange}
                               bIsRequired={true}
                               mChecker={rePasswordChecker}
                               sDefaultValue=""
                               name="password"
                               type={bPasswordShown ? "text" : "password"}
                               sName="password"
                               isRequired={true}
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
                            Зарегистрироваться
                        </Button>
                    )
                }
                <article
      className={`${styles.bottom_links} pt-20 pb-4 text text_type_main-small` +  
                 ` text_color_inactive`}>
                    Уже зарегистрированы? <Link to="/login/"
                                         onClick={saveEnteredEmail}>Войти</Link>
                </article>
            </form>
            
            
        </section>
    );
};

export default RegisterForm;