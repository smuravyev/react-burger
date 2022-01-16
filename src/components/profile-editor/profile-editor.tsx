import { useRef,
         useEffect,
         useState, 
         useCallback } from 'react';

import type { SyntheticEvent,
              RefObject } from 'react';

import { shallowEqual } from 'react-redux';

import { useAppDispatch,
         useAppSelector } from '../../services/hooks';

import type { TChangeHandler,
              TChecker } from '../checkable-input/checkable-input';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { CheckableInput,
         Loader } from '../';
         
import { updateUser } from '../../services/actions/authorization';

import { setError } from '../../services/actions/error-message';

import { oErrorCodes } from '../../utils/constants';

import { reNameChecker,
         rePasswordChecker } from '../../utils/checkers';

import type { IUpdateUserStructure } from '../../utils/types';

import styles from './profile-editor.module.css';

export type TProfileEditorField = "password" | "name" | "email"; 

export type TProfileEditorFieldset = {
    [key in TProfileEditorField] : {
        bIsDisabled : boolean;
        sValue : string;
        oRef : RefObject<HTMLInputElement>;
        mChecker : TChecker;
        bIsRequired : boolean;
        sType : string;
        sPlaceholder : string;
    };
};

const ProfileEditor = () : JSX.Element => {
    
    const oNameRef = useRef<HTMLInputElement>(null);
    const oEmailRef = useRef<HTMLInputElement>(null);
    const oPasswordRef = useRef<HTMLInputElement>(null);
    
    const {sName, sEmail} = useAppSelector(store => store.authorization.oUser,
                                           shallowEqual);
    const bIsBusy = useAppSelector(store => store.app.bIsBusy);
    
    const dispatch = useAppDispatch();
    
    const bIsSavingProfile = useAppSelector(store =>
                                   store.authorization.bIsUpdateUserRequesting);
    
    const [nActiveElements, setNActiveElements] = useState(0);
    
    const [oFields, setOFields] = useState<TProfileEditorFieldset>(
                                           { name : { bIsDisabled : true,
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

    const changeHandler : TChangeHandler<TProfileEditorField> = (oData) => {
        setOFields({ ...oFields,
                     [oData.sName] : { ...oFields[oData.sName],
                                       sValue : oData.sValue }});
    };

    const iconClickHandler = useCallback((sField : TProfileEditorField) => {
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
    }, [bIsSavingProfile, sName, sEmail, nActiveElements, oFields]);
    
    const cancelHandler =
               useCallback((eEvent : SyntheticEvent | KeyboardEvent) : void => {
        // This is the handler for CANCEL button. 
        // But the buttons are rendered by the Yandex's components without
        // type attribute and we have two ways:
        // - create own component or check the events;
        // - swap the buttons, so "Save" button will be first in the tree.
        // The second way chosen.
        
        eEvent.preventDefault();
        eEvent.stopPropagation();
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
    }, [oFields, sName, sEmail]);
    
    const saveHandler = useCallback((eEvent : SyntheticEvent) : void => {
        //0. No default handler.
        eEvent.preventDefault();
        
        if((nActiveElements > 0) &&
           (!(bIsBusy))){
            // 1. Check all fields if they are disabled. Will send request only
            // on enabled fields.
            const oData : IUpdateUserStructure = {};
    
            let bNullsExist = false;
            Object.keys(oFields).forEach((sIndex) : void => {
                const sCurrentIndex = sIndex as TProfileEditorField;
                if(!(oFields[sCurrentIndex].bIsDisabled)){
                    //Check if there are any errors...
                    if(oFields[sCurrentIndex].sValue === null){
                        bNullsExist = true;
                    }
                    oData[sCurrentIndex] = oFields[sCurrentIndex].sValue;
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
    }, [bIsBusy, dispatch, nActiveElements, oFields]);
    
    const escHandler = useCallback((eEvent : KeyboardEvent) : void => {
        eEvent.preventDefault();
        if((eEvent.key === "Escape") && (nActiveElements > 0)){
            cancelHandler(eEvent);
        }
    }, [cancelHandler, nActiveElements]);

    useEffect(() => {
        let oItem : TProfileEditorField = 'name';
        for (oItem in oFields) {
            if(oFields[oItem].oRef && oFields[oItem].oRef.current){
                const eElement = oFields[oItem].oRef.current;
                if(eElement !== null){
                    eElement.disabled = oFields[oItem].bIsDisabled;
                }
            }
        }
        document.addEventListener("keyup", escHandler);
        return () => {
            document.removeEventListener("keyup", escHandler);
        };
    });
    
    let sFormClassName : string = `${styles.form} width_480px_form pt-20 mt-20`;
    if(bIsSavingProfile){
        sFormClassName = `${sFormClassName} ${styles.busy}`;
    } 

    return (
        <form className={sFormClassName} onSubmit={saveHandler}>
            <ul className={styles.fields}>
                { Object.entries(oFields).map(([sIndex, oElement]) => (
                    <li className={`pb-6`} key={sIndex}>
                        <CheckableInput changeHandler={changeHandler as
                                                         TChangeHandler<string>}
                                        bIsRequired={oElement.bIsRequired}
                                        mChecker={oElement.mChecker}
                                        sDefaultValue={oElement.sValue}
                                        name={sIndex}
                                        disabled={oElement.bIsDisabled}
                                        onIconClick={() =>
                              {iconClickHandler(sIndex as TProfileEditorField)}}
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
                         <div className={styles.float_right}>
                         {
                            
                             bIsBusy ? (
                                
                                 <div className={styles.loader_container}>
                                     <Loader message="Загрузка" />
                                 </div>
                             ) : (
                                <Button type="primary" size="medium">
                                    Сохранить
                                </Button>
                            )
                     
                         }
                         </div>
                           <Button type="secondary" size="medium"
                                onClick={cancelHandler}>
                             Отменить
                         </Button>
                     </>
                 )
            }
        </form>
    );
};

export default ProfileEditor;