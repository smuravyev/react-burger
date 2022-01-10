import { useAppSelector } from '../../services/hooks';

import { SuccessIcon }  from "../";

import { formatOrderNumber } from '../../utils/functions';

import styles from  './order-details.module.css';

const OrderDetails = () : JSX.Element =>{
    
    const nOrderId = useAppSelector(store => store.orderDetails.nOrderNumber);
    
    return (
        <figure>
            <h2 className={`${styles.order} text text_type_digits-large pb-8`}>
                {formatOrderNumber(nOrderId)}
            </h2>
            <h3 className="text text_type_main-medium pb-15">
                идентификатор заказа
            </h3>
            <SuccessIcon />
            <h4 className="text text_type_main-small pb-2 pt-15">
                Ваш заказ начали готовить
            </h4>
            <p className="text text_type_main-small text_color_inactive pb-15">
                Дождитесь готовности на орбитальной станции
            </p>
        </figure>
    );
};

export default OrderDetails;