import { useRef,
         useEffect,
         useState,
         useCallback } from 'react';

import type { SyntheticEvent } from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch,
         useAppSelector } from '../../services/hooks';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { CheckableInput,
         Loader } from '../';

import { setError } from '../../services/actions/error-message';

import { oErrorCodes } from '../../utils/constants'; 

import { rePasswordChecker } from '../../utils/checkers';

import { saveEnteredEmailAction,
         requestLogin } from '../../services/actions/authorization';
         
import type { TChangeHandler } from '../checkable-input/checkable-input';

import styles from './login-form.module.css';

const LoginForm = () : JSX.Element => {
    const oEmailInputRef = useRef<HTMLInputElement>(null);
    
    const sEnteredEmail = useAppSelector(store =>
                                             store.authorization.sEnteredEmail);

    const bIsBusy = useAppSelector(store => store.app.bIsBusy);

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
            dispatch(saveEnteredEmailAction(oFormData.email));
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
                ????????
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
                               type="text"
                               sName="email"
                               placeholder="?????????????????????? ??????????"
                               ref={oEmailInputRef} />
                    </li>
                    <li className={`${styles.field_container} pb-6`}
                        title=
                            {"???????????? ???????????? ?????????????????? ???? ?????????? 6 ????????????????, " + 
                             "?????????????????? ??????????, ???????????????????? ??????????, ?????? ????????????????"}>
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
                               placeholder="????????????" />
                    </li>
                </ul>
                {
                    bIsBusy && (
                        <div className={styles.loader_container}>
                            <Loader message="????????????????" />
                        </div>
                    )
                }
                {
                    (!bIsBusy) && (
                        <Button type="primary" size="medium">
                            ??????????
                        </Button>
                    )
                }
                <article className=
               {`${styles.bottom_links} pt-20 pb-4 text text_type_main-small ` + 
                `text_color_inactive`}>
                    ????&nbsp;&mdash; ?????????? ?????????????????????????&nbsp;
                    <Link to="/register/"
                          onClick={saveEnteredEmail}>????????????????????????????????????</Link>
                </article>
                <article className=
       {`${styles.bottom_links} text text_type_main-small text_color_inactive`}>
                    ???????????? ?????????????&nbsp;
                    <Link to="/forgot-password/"
                          onClick={saveEnteredEmail}>???????????????????????? ????????????</Link>
                </article>
            </form>
            
            
        </section>
    );
};

export default LoginForm;