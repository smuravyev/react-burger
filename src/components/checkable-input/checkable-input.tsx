import { useState,
         forwardRef,
         useEffect,
         useCallback } from 'react';

import { ForwardRefExoticComponent,
         RefAttributes,
         FocusEvent } from 'react';

import { punycodeDomainName } from '../..//utils/functions'

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { reEmailChecker } from '../../utils/checkers';

import { nBlurTimeout } from '../../utils/constants';

export type TChecker = RegExp | "email" | ((sString : string) => boolean);

export interface IChangeHandlerData<T = string> {
    sName : T,
    sValue : string | null
}

export type TChangeHandler<T = string> =
                                        (oData : IChangeHandlerData<T>) => void; 

export interface ICheckableInputProps<T = string> {
    mChecker : TChecker,
    changeHandler : TChangeHandler<T>
    sDefaultValue? : string,
    bIsRequired? : boolean,
    sName? : string;
    [propName: string] : any; //Sorry, it can be any.. :-)
};

export type TCheckableInput<T = string> =
                             ForwardRefExoticComponent<ICheckableInputProps<T> &
                                               RefAttributes<HTMLInputElement>>;

const CheckableInput : TCheckableInput =
                  forwardRef<HTMLInputElement, ICheckableInputProps>(({mChecker,
                         changeHandler,
                         sDefaultValue = '',
                         bIsRequired = false,
                         sName = "input" + Math.floor(Math.random() * 1000),
                         ...rest}, oRef) => {
    
    //String, OK
    const [sValue, setSValue] = useState(sDefaultValue ? sDefaultValue : "");
    
    //Boolean, OK
    const [bError, setBError] = useState(false);
    
    //Boolean, OK
    const [bSkipCheck, setBSkipCheck] = useState(false);
    
    //Boolean, OK
    const [bFirstTime, setBFirstTime] = useState(true);
    
    const validateString = useCallback((sString : string) : boolean => {
        switch(true){
            case (sString === ""): {
                return !bIsRequired;
            }
            case (mChecker instanceof RegExp): {
                return mChecker instanceof RegExp ? mChecker.test(sString) :
                                                    false; 
            }
            case (typeof(mChecker) === "function"): {
                return typeof(mChecker)  === "function" ? mChecker(sString) : 
                                                          false;
            }
            case (mChecker === "email"): {
                if((sString) &&
                   (sString.indexOf("@") >= 0)){
                    return reEmailChecker.test(punycodeDomainName(sString));
                }
                else{
                    return false;
                } 
            }
            default:
                return false;
        }
    }, [mChecker, bIsRequired]);
    
    const processWithCheck = (eEvent : FocusEvent<HTMLInputElement>) => {
        const eTarget =
                       eEvent.target ? eEvent.target as HTMLInputElement : null;
        setSValue(eTarget ? (eTarget.value ? eTarget.value : "") : "");
        let bIsWrong = false;
        if(eEvent.type === "blur"){
            if(bSkipCheck){
                setBSkipCheck(false);
            }
            else{
                // Must validate on ALL BLURS. Always
                bIsWrong = !validateString(sValue);
            } 
        }
        else{
            // Validating only if there was PREVIOUS error.
            // We won't validate while the user inputs a value for the 1st time.
            // But we will validate if the error already raised!
            if(bError){
                bIsWrong = ((bIsRequired) && (sValue === ""))
                           || (!validateString(sValue));
            }
        }
        setBError(bIsWrong);
        if(bIsWrong){
            setBFirstTime(false);
        }
        
        // See the comment below, we will came here always
        if(eEvent.type === "blur"){
            changeHandler({ sValue: bIsWrong ? null : sValue,
                            sName : sName });
        }
        
        // The problem: we will check only after first blur.
        // We have only onBlur and onChange properties of Input.
        // But Onchange != onkeyup, and will fired on blur if something changed.
        // So if we look for current value in onchange, we'll see all the text
        // but the last letter. So... Some hack 
        if(eEvent.type === "change"){
            setTimeout(() => {
                if(bFirstTime){
                    setBSkipCheck(true);
                }
                eTarget?.blur();
                eTarget?.focus();
            }, nBlurTimeout);
        }
    };
    
    useEffect(() => {
        if((sDefaultValue) || (sDefaultValue === "" && (!(bIsRequired)))){
            setTimeout(() => {
                setSValue(sDefaultValue);
                setBError(!validateString(sDefaultValue));

            }, nBlurTimeout);
        }
    }, [sDefaultValue, validateString, bIsRequired]);


    return (
        <Input onChange={processWithCheck}
               error={bError}
               value={sValue}
               onBlur={processWithCheck}
               ref={oRef}
               {...rest} />
    );    
});

export default CheckableInput;