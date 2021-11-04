import PropTypes from 'prop-types';

import styles from  './modal-overlay.module.css';

const ModalOverlay = ({onClickHandler}) =>{
    return (
        <div className={styles.blackscreen} onClick={onClickHandler}/>
    );
};

ModalOverlay.propTypes = {
    onClickHandler : PropTypes.func
}

export default ModalOverlay;