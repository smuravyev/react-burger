import { memo } from 'react';
import type { FC } from 'react';

import styles from './ingredient-feed-image.module.css';

export interface IIngredientFeedImageProps {
    sName? : string;
    sImageURL : string;
    sCoverText? : string;
    
};

const IngredientFeedImage : FC<IIngredientFeedImageProps> = 
                                                 memo(({ sName = '',
                                                         sImageURL,
                                                         sCoverText = "" }) => { 
    return (
         <li className={styles.ingredient}>
             <div className={styles.ingredient__image}
                  title={sName}
                  style={{ backgroundImage : 'url(' + sImageURL + ")" }}>
                  &nbsp;
             </div>
             {
                 (sCoverText !== "") && (
                     <div
                     className={`${styles.plus} text text_type_digits-default`}>
                         <span>{sCoverText}</span>
                     </div>
                 )
             }
         </li>
    );
});

export default IngredientFeedImage;