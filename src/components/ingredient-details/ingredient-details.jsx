import { useSelector, shallowEqual } from 'react-redux';

import styles from  './ingredient-details.module.css';

const IngredientDetails = () =>{
    const { name,
            calories,
            carbohydrates,
            proteins,
            fat,
            image_large } = useSelector(store => store.currentIngredient,
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