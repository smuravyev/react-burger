import type { SyntheticEvent }  from 'react';

import styles from  './modal-overlay.module.css';

export interface IModalOverlayProps {
    onClickHandler : (eEvent : SyntheticEvent) => void;
}

const ModalOverlay = ({ onClickHandler } : IModalOverlayProps) : JSX.Element =>{
    return (
        <div className={styles.blackscreen} onClick={onClickHandler}/>
    );
};

export default ModalOverlay;