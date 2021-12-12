import { memo } from 'react';
import type { FC } from 'react';

import styles from './loader.module.css';

export interface ILoaderProps {
    message? : string
};

const Loader : FC<ILoaderProps> = memo(({message = ''}) => { 
    return (
        <div className={`${styles.wrapper} text text_type_main-small`}>
           {message}
            <div className={styles.runner}>
               &nbsp;
            </div>
        </div>
    )
});

export default Loader;