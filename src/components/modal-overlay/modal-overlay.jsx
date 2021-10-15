import React from 'react';
import PropTypes from 'prop-types';

import styles from  './modal-overlay.module.css';

const ModalOverlay = ({onClickHandler}) =>{
    return (
        <div className={styles.blackscreen} onClick={onClickHandler}/>
    );
};


export default ModalOverlay;