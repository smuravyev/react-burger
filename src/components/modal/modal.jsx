import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from "../modal-overlay/modal-overlay";

import styles from  './modal.module.css';

const Modal = ({parentElementSelector, canClose, closer, caption, children}) =>{
    const ePortal = document.querySelector(parentElementSelector || "body") ||
                                                 document.querySelector("body");
                                                 
    const bCanClose = (canClose === undefined) ? true : canClose;

    const closeWindow = React.useCallback(() => {
        if(bCanClose && closer){
            closer();
        }
    }, [bCanClose, closer]);

    const checkForEsc = React.useCallback((eEvent) => {
        if(eEvent.key === "Escape"){
            closeWindow();
        }
    }, [closeWindow]);
    
    const checkForClick = React.useCallback((eEvent) => {
        closeWindow();
        eEvent.stopPropagation();
        eEvent.preventDefault();
    }, [closeWindow]);
    
    React.useEffect(() => {
        if(bCanClose){
            document.addEventListener("keyup", checkForEsc);
            return () => {
                document.removeEventListener("keyup", checkForEsc);
            }
        }
    }, [checkForEsc, bCanClose])
    
    return ReactDOM.createPortal((
        <>
            <section className={styles.modal}>
                <h1 className={`${styles.modal__header} pt-10 pl-10 pr-10 text text_type_main-large`}>
                    {caption}
                    { bCanClose && (<div className={styles.modal__close}
                                         onClick={checkForClick}>
                                        <CloseIcon type="primary" />
                                    </div>)}
                </h1>
                <article className={`${styles.modal__content} pb-15`}>
                    {children}
                </article>
            </section>
            <ModalOverlay onClickHandler={checkForClick} />
        </>
    ), ePortal);
};

Modal.propTypes = {
    caption: PropTypes.string,
    parentElement : PropTypes.object,
    canClose : PropTypes.bool,
    closer : PropTypes.func
}

export default Modal;