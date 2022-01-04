import { useAppSelector } from '../../services/hooks';

import { SuccessIcon }  from "../";

import styles from  './order-details.module.css';

const OrderDetails = () : JSX.Element =>{
    
    const nOrderId = useAppSelector(store => store.orderDetails.nOrderNumber);
    
    return (
        <figure className={styles.figure}>
            <h2 className={`${styles.order} text text_type_digits-large pb-8`}>
                {nOrderId}
            </h2>
            <h3 className={`${styles.order_description} text text_type_main-medium pb-15`}>
                идентификатор заказа
            </h3>
            <SuccessIcon />
            <h4 className={`${styles.order_started} text text_type_main-small pb-2 pt-15`}>
                Ваш заказ начали готовить
            </h4>
            <p className={`${styles.order_recommendation} text text_type_main-small text_color_inactive pb-15`}>
                Дождитесь готовности на орбитальной станции
            </p>
        </figure>
    );
};

export default OrderDetails;