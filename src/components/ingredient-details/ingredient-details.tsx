import { shallowEqual } from 'react-redux';

import { useAppSelector } from '../../services/hooks';

import styles from  './ingredient-details.module.css';

const IngredientDetails = () : JSX.Element =>{
    const { name,
            calories,
            carbohydrates,
            proteins,
            fat,
            image_large } = useAppSelector(store =>
                        store.currentIngredient === null ? { name : "",
                                                             calories : 0,
                                                             carbohydrates : 0,
                                                             proteins: 0,
                                                             fat : 0,
                                                             image_large : ""} :
                                                        store.currentIngredient,
                                         shallowEqual);
    
    return (
        <figure className={styles.figure}>
            <img src={image_large} alt={name} className={styles.image} />
            <h2 className="text text_type_main-medium pt-4 pb-8">{name}</h2>
            <ul className={styles.table}>
                <li className={styles.property}>
                    <h3 className={`${styles.property__name} text text_type_main-small text_color_inactive`}>
                        Калории, ккал
                    </h3>
                    <p className={`${styles.property__value} text text_type_digits-default text_color_inactive`}>
                        {calories}
                    </p>
                </li>
                <li className={styles.property}>
                    <h3 className={`${styles.property__name} text text_type_main-small text_color_inactive`}>
                        Белки, г
                    </h3>
                    <p className={`${styles.property__value} text text_type_digits-default text_color_inactive`}>
                        {proteins}
                    </p>
                </li>
                <li className={styles.property}>
                    <h3 className={`${styles.property__name} text text_type_main-small text_color_inactive`}>
                        Жиры, г
                    </h3>
                    <p className={`${styles.property__value} text text_type_digits-default text_color_inactive`}>
                        {fat}
                    </p>
                </li>
                <li className={styles.property}>
                    <h3 className={`${styles.property__name} text text_type_main-small text_color_inactive`}>
                        Углеводы, г
                    </h3>
                    <p className={`${styles.property__value} text text_type_digits-default text_color_inactive`}>
                        {carbohydrates}
                    </p>
                </li>
            </ul>
        </figure>
    );
};

export default IngredientDetails;