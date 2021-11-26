import { memo } from 'react';

import PropTypes from 'prop-types';

import styles from './loader.module.css';

const Loader = memo(({message = ''}) => { 
    return (
        <div className={`${styles.wrapper} text text_type_main-small`}>
           {message}
            <div className={styles.runner}>
               &nbsp;
            </div>
        </div>
    )
});

Loader.propTypes = {
    message: PropTypes.string 
}

export default Loader;