import { memo,
         useCallback } from 'react';

import { CurrencyIcon }
                      from '@ya.praktikum/react-developer-burger-ui-components';

import { OrderIngredientsList,
         OrderStatus } from '../';

import { formatOrderNumber,
         makeCoolDateFromUTCString } from '../../utils/functions';
         
import { useNavigate,
         useLocation } from 'react-router-dom';

import type { FC } from 'react';

import type { IOrderWithProcessedIngredientsProperties }
                                                       from '../../utils/types';

import styles from './feed-order.module.css';

export interface IFeedOrderProps {
    sAdditionalClass? : string;
    oOrder : IOrderWithProcessedIngredientsProperties;
    bShowStatus? : boolean;
};

const FeedOrder : FC<IFeedOrderProps> = memo(({ sAdditionalClass = '',
                                                oOrder,
                                                bShowStatus = false}) => {

    const navigate = useNavigate();
    
    const oLocation = useLocation();

    const handleOrderClick = useCallback((sID : string) : () => void => {
        return () => {
            let sURI = oLocation.pathname;
            if(!(/.*\/$/.test(sURI))){
                sURI = sURI + "/";
            }
            navigate(sURI + sID + "/", 
                     {state: { oBackground : oLocation }});
        }
    }, [navigate, oLocation]);
     
    return (
        <li onClick={handleOrderClick(oOrder._id)}
             className={`${styles.order} mr-2 pl-6 pt-6 pr-6 pb-6`
                       + (sAdditionalClass === "" ? "" :
                                                       " " + sAdditionalClass)}>
            <section className={`${styles.order__top} mb-6`}>
                <section className="text text_type_digits-default">
                    #{formatOrderNumber(oOrder.number)}
                </section>
                <section className="text text_type_main-default text_color_inactive">
                    {makeCoolDateFromUTCString(oOrder.createdAt)}
                </section>
            </section>
            <h2 className={`${styles.order__name} text ` + 
                          " text_type_main-medium"}>
                {oOrder.name}
            </h2>
            {
                ( bShowStatus ) && (
                   <section className="pt-2 text text_type_main-default">
                       <OrderStatus sStatus={oOrder.status} />
                   </section> 
                )
            }
            <ul className={`${styles.ingredients} mt-6`}>
                <li className={`${styles.price} ml-6`}>
                    <span className=
   "text text_type_digits-default pr-2">{oOrder.price}</span>&nbsp;<CurrencyIcon
                                                               type="primary" />
                </li>
                <OrderIngredientsList aIngredients={oOrder.ingredients} />
            </ul>
        </li>
    );
});

export default FeedOrder;