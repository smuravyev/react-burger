import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from "../modal-overlay/modal-overlay";

import styles from  './modal.module.css';

const Modal = (props) =>{
    const ePortal = props.parentElement || document.querySelector("body");
    const bCanClose = (props.canClose === undefined) ? true : props.canClose;

    const closeWindow = () => {
        if(bCanClose && props.closer){
            props.closer();
        }
    }

    const checkForEsc = (eEvent) => {
        if(eEvent.key === "Escape"){
            closeWindow();
        }
    }
    
    const checkForClick = (eEvent) => {
        closeWindow();
        eEvent.stopPropagation();
        eEvent.preventDefault();
    }
    
    React.useEffect(() => {
        if(bCanClose){
            document.addEventListener("keyup", checkForEsc);
            return () => {
                document.removeEventListener("keyup", checkForEsc);
            }
        }
    }, [])
    
    return ReactDOM.createPortal((
        <>
            <section className={styles.modal}>
                <h1 className={`${styles.modal__header} pt-10 pl-10 pr-10 text text_type_main-large`}>
                    {props.caption}
                    { bCanClose && (<div className={styles.modal__close}
                                         onClick={checkForClick}>
                                        <CloseIcon type="primary" />
                                    </div>)}
                </h1>
                <article className={`${styles.modal__content} pb-15`}>
                    {props.children}
                </article>
            </section>
            <ModalOverlay onClickHandler={checkForClick} />
        </>
    ), ePortal);
};

export default Modal;