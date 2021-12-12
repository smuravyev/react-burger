import { useCallback,
         useEffect } from 'react';

import type { FC,
              SyntheticEvent } from 'react';

import { createPortal } from 'react-dom';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { sModalSelector } from "../../utils/constants";

import { ModalOverlay } from "../";

import styles from  './modal.module.css';

const ePortal = document.querySelector(sModalSelector || "body") ||
                document.querySelector("body");
 
export interface IModalProps {
    canClose? : boolean;
    closer? : () => void;
    caption? : string;
};
 
const Modal : FC<IModalProps> = ({canClose, closer, caption, children}) =>{
                                                
    const bCanClose = (canClose === undefined) ? true : canClose;

    const closeWindow = useCallback(() : void => {
        if(bCanClose && closer){
            closer();
        }
    }, [bCanClose, closer]);

    const checkForEsc = useCallback((eEvent : KeyboardEvent) : void => {
        if(eEvent.key === "Escape"){
            closeWindow();
        }
        eEvent.preventDefault();
    }, [closeWindow]);
    
    const checkForClick = useCallback((eEvent : SyntheticEvent ) => {
        closeWindow();
        eEvent.stopPropagation();
        eEvent.preventDefault();
    }, [closeWindow]);
    
    const preventAllKeypresses = (eEvent : KeyboardEvent) => {
        eEvent.preventDefault();
    };
    
    useEffect(() => {
        if(bCanClose){
            document.addEventListener("keyup", checkForEsc);
            document.addEventListener("keypress", preventAllKeypresses)
            return () => {
                document.removeEventListener("keyup", checkForEsc);
                document.removeEventListener("keypress", preventAllKeypresses)
            }
        }
    }, [checkForEsc, bCanClose])
    
    return ePortal !== null ? createPortal((
        <>
            <section className={styles.modal}>
                <h1 className={`${styles.modal__header} pt-10 pl-10 pr-10 text text_type_main-large`}>
                    {caption}
                    { bCanClose && (<div className={styles.modal__close}
                                         onClick={checkForClick}>
                                        <CloseIcon type="primary" />
                                    </div>)}
                </h1>
                <article className={`pb-15`}>
                    {children}
                </article>
            </section>
            <ModalOverlay onClickHandler={checkForClick} />
        </>
    ), ePortal ) : null;
};

export default Modal;