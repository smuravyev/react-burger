import React from 'react';

import SuccessIcon from "../success-icon/success-icon";
import {OrderContext} from "../../utils/appcontext.js";

import styles from  './order-details.module.css';

const OrderDetails = () =>{
    const {orderID} = React.useContext(OrderContext);
    
    return (
        <figure className={styles.figure}>
            <h2 className={`${styles.order} text text_type_digits-large pb-8`}>
                {orderID}
            </h2>
            <h3 className={`${styles.order__description} text text_type_main-medium pb-15`}>
                идентификатор заказа
            </h3>
            <SuccessIcon />
            <h4 className={`${styles.order__started} text text_type_main-small pb-2 pt-15`}>
                Ваш заказ начали готовить
            </h4>
            <p className={`${styles.order__recommendation} text text_type_main-small text_color_inactive pb-15`}>
                Дождитесь готовности на орбитальной станции
            </p>
        </figure>
    );
};

export default OrderDetails;