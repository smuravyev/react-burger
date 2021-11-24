import { useState,
         forwardRef,
         useEffect,
         useCallback } from 'react';

import PropTypes from 'prop-types';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { reEmailChecker } from '../../utils/checkers';

const CheckableInput = forwardRef(({mChecker,
                         changeHandler,
                         sDefaultValue = '',
                         bIsRequired = false,
                         sName = "input" + Math.floor(Math.random() * 1000),
                         ...rest}, oRef) => {
    
    const [sValue, setSValue] = useState(sDefaultValue ? sDefaultValue : "");
    const [bError, setBError] = useState(false);
    const [bSkipCheck, setBSkipCheck] = useState(false);
    const [bFirstTime, setBFirstTime] = useState(true);
    
    const punycode = require("punycode/");
    
    const nBlurTimeout = 10;

    const punycodeDomainName = useCallback((sString) => {
        const [sBeforeAt, sDomainName] = sString.split("@");
        return sBeforeAt + "@" + punycode.toASCII(sDomainName);
    }, [punycode]);
    
    const validateString = useCallback((sString) => {
        switch(true){
            case (sString === ""): {
                return !bIsRequired;
            }
            case (mChecker instanceof RegExp): {
                return mChecker.test(sString); 
            }
            case (typeof(mChecker) === "function"): {
                return mChecker(sString);
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
    }, [punycodeDomainName, mChecker, bIsRequired]);
    
    const processWithCheck = (eEvent) => {
        setSValue(eEvent.target.value);
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
                eEvent.target.blur();
                eEvent.target.focus();
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

CheckableInput.propTypes = {
    sName : PropTypes.string,
    bIsRequired : PropTypes.bool,
    sDefaultValue : PropTypes.string,
    changeHandler : PropTypes.func.isRequired,
    mChecker : PropTypes.oneOfType([PropTypes.string,
                                    PropTypes.func,
                                    PropTypes.instanceOf(RegExp)]).isRequired
};

export default CheckableInput;