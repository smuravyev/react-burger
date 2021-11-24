import { useRef,
         useEffect,
         useState } from 'react';

import { useSelector,
         useDispatch,
         shallowEqual } from 'react-redux';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { CheckableInput,
         Loader } from '../';
         
import { updateUser } from '../../services/actions/authorization';

import { setError } from '../../services/actions/error-message';

import { oErrorCodes } from '../../utils/constants';

import { reNameChecker,
         rePasswordChecker } from '../../utils/checkers';

import styles from './profile-editor.module.css';

const ProfileEditor = () => {
    
    const oNameRef = useRef(null);
    const oEmailRef = useRef(null);
    const oPasswordRef = useRef(null);
    
    const {sName, sEmail} = useSelector(store => store.authorization.oUser,
                                        shallowEqual);
    const bIsBusy = useSelector(store => store.app.bIsBusy);
    
    const dispatch = useDispatch();
    
    const bIsSavingProfile =
              useSelector(store => store.authorization.bIsUpdateUserRequesting);
    
    const [nActiveElements, setNActiveElements] = useState(0);
    
    const [oFields, setOFields] = useState({ name : { bIsDisabled : true,
                                                      sValue : sName || "",
                                                      oRef : oNameRef,
                                                      mChecker : reNameChecker,
                                                      bIsRequired : true,
                                                      sType : "text",
                                                      sPlaceholder : "Имя" },
                                             email : { bIsDisabled : true,
                                                       sValue: sEmail || "",
                                                       oRef : oEmailRef,
                                                       bIsRequired : true,
                                                       mChecker : "email",
                                                       sType : "email",
                                                       sPlaceholder :
                                                           "Логин"},
                                             password: { bIsDisabled : true,
                                                         sValue: "",
                                                         sType: "password",
                                                         bIsRequired : false,
                                                         mChecker :
                                                              rePasswordChecker,
                                                         oRef : oPasswordRef,
                                                         sPlaceholder :
                                                                       "Пароль"}
                                            });

    
    const changeHandler = (oData) => {
        setOFields({ ...oFields,
                     [oData.sName] : { ...oFields[oData.sName],
                                       sValue : oData.sValue }});
    };

    const iconClickHandler = (sField) => {
        if(!(bIsSavingProfile)){
            const bIsDisabled = oFields[sField].bIsDisabled;

            const sDefaultValue = (sField === "name" ? sName :
                                                  (sField === "email" ? sEmail : 
                                                                        ""));
            if(bIsDisabled){
                setNActiveElements(nActiveElements + 1);
            }
            else{
                setNActiveElements(nActiveElements - 1);
            }

            setOFields({...oFields,
                        [sField] : { ...oFields[sField],
                                     bIsDisabled : !bIsDisabled,
                                     sValue : bIsDisabled ?
                                     oFields[sField].sValue : sDefaultValue }});
        }
    };
    
    const cancelHandler = (eEvent) => {
        eEvent.preventDefault();
        setNActiveElements(0);
        setOFields({ name : { ...oFields.name,
                              bIsDisabled  : true,
                              sValue : sName },
                     email : { ...oFields.email,
                              bIsDisabled  : true,
                              sValue : sEmail },
                     password : { ...oFields.password,
                              bIsDisabled  : true,
                              sValue : "" } });
    };
    
    const saveHandler = (eEvent) => {
        
        //0. No default handler.
        eEvent.preventDefault();

        // 1. Check all fields if they are disabled. Will send request only on
        //    enabled fields.
        const oData = {};
        let bNullsExist = false;
        Object.entries(oFields).forEach(([sIndex]) => {
            if(!(oFields[sIndex].bIsDisabled)){
                //Check if there are any errors...
                if(oFields[sIndex].sValue === null){
                    bNullsExist = true;
                }
                oData[sIndex] = oFields[sIndex].sValue;
            }
        });
        
        if(bNullsExist){
            dispatch(setError(oErrorCodes.EC_INVALID_FORM_DATA, true));
        }
        else{
            // 2. Disable all the fields
            setNActiveElements(0);
            setOFields({ name : { ...oFields.name,
                                   bIsDisabled  : true},
                         email : { ...oFields.email,
                                   bIsDisabled  : true},
                         password : { ...oFields.password,
                                      bIsDisabled  : true } });
             
            // 3. Dispatch the request to the server.
            dispatch(updateUser({ oProfile : oData }));
        }
    }

    useEffect(() => {
        for (let oItem in oFields) {
            if(oFields[oItem].oRef && oFields[oItem].oRef.current){
                oFields[oItem].oRef.current.disabled =
                                                     oFields[oItem].bIsDisabled;
            }
        }
    });
    
    let sFormClassName = `${styles.form} width_480px_form`;
    if(bIsSavingProfile){
        sFormClassName = `${sFormClassName} ${styles.busy}`;
    } 

    return (
        <form className={sFormClassName}>
            <ul className={styles.fields}>
                { Object.entries(oFields).map(([sIndex, oElement]) => (
                    <li className={`pb-6`} key={sIndex}>
                        <CheckableInput changeHandler={changeHandler}
                                        bIsRequired={oElement.bIsRequired}
                                        mChecker={oElement.mChecker}
                                        sDefaultValue={oElement.sValue}
                                        name={sIndex}
                                        disabled={oElement.bIsDisabled}
                                        onIconClick={() =>
                                                     {iconClickHandler(sIndex)}}
                                        type={oElement.sType}
                                        sName={sIndex}
                                        icon={oElement.bIsDisabled ? "EditIcon"
                                                                  : "CloseIcon"}
                                        ref={oElement.oRef}
                                        placeholder={oElement.sPlaceholder}
                                        key={sIndex} />
                    </li> ))
                }
            </ul>
            {
                 (nActiveElements > 0) && (
                    <>
                         <Button type="secondary" size="medium"
                                 onClick={cancelHandler}>
                             Отменить
                         </Button>
                         {
                             bIsBusy ? (
                                 <div className={styles.loader_container}>
                                     <Loader message="Загрузка" />
                                 </div>
                             ) : (
                                <Button type="primary" size="medium"
                                        onClick={saveHandler}>
                                    Сохранить
                                </Button>
                            )
                     
                         }
                     </>
                 )
            }
        </form>
    );
};

export default ProfileEditor;