import { memo } from 'react';

import { IngredientProperty } from '../';

import type { FC } from 'react';
import type { IPureIngredient } from '../../utils/types';

import styles from  './ingredient-details.module.css';

const IngredientDetails : FC<IPureIngredient> = memo(({ name, 
                                                        calories,
                                                        carbohydrates,
                                                        proteins,
                                                        fat,
                                                        image_large}) =>{
    return (
        <figure className={styles.figure}>
            <img src={image_large} alt={name} className={styles.image} />
            <h2 className="text text_type_main-medium pt-4 pb-8">{name}</h2>
            <ul className={styles.table}>
                <IngredientProperty sName="Калории, ккал"
                                    sValue={String(calories)} />
                <IngredientProperty sName="Белки, г"
                                    sValue={String(proteins)} />
                <IngredientProperty sName="Жиры, г"
                                    sValue={String(fat)} />
                <IngredientProperty sName="Углеводы, г"
                                    sValue={String(carbohydrates)} />
            </ul>
        </figure>
    );
});

export default IngredientDetails;