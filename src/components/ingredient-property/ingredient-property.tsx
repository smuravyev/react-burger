import { memo } from 'react';

import type { FC } from 'react';

import styles from  './ingredient-property.module.css';

export interface IIngredientPropertyProps {
    readonly sName : string,
    readonly sValue : string
};

const IngredientProperty : FC<IIngredientPropertyProps> = memo(({ sName,
                                                                  sValue }) => {  
    return (
        <li className={styles.property}>
                    <h3 className={`${styles.property__name} text ` + 
                                   "text_type_main-small text_color_inactive"}>
                        {sName}
                    </h3>
                    <p className={`${styles.property__value} text ` + 
                                "text_type_digits-default text_color_inactive"}>
                        {sValue}
                    </p>
                </li>
    );
});

export default IngredientProperty;