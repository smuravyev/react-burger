import { memo } from 'react';

import { OrderStatus,
         IngredientFeedImage } from '../';
         
import { CurrencyIcon }
                      from '@ya.praktikum/react-developer-burger-ui-components';

import { makeCoolDateFromUTCString } from '../../utils/functions'; 

import type { FC } from 'react';
import type { IOrderWithProcessedIngredientsProperties }
                                                      from '../../utils/types';
import styles from  './order-summary.module.css';

const OrderSummary : FC<IOrderWithProcessedIngredientsProperties> =
                                                memo(({ ingredients,
                                                        createdAt,
                                                        price,
                                                        status,
                                                        name }) =>{
    const oReversedIngredients = [...ingredients];
    oReversedIngredients.reverse();
    return (
        <section className={styles.summary}>
            <h2
            className={`${styles.burger_name} mb-3 text text_type_main-medium`}>
                {name}
            </h2>
            <p className="text text_type_main-default pb-15">
                <OrderStatus sStatus={status} />
            </p>
            <h3 className="pb-6 text text_type_main-medium">
                Состав:
            </h3>
            <ul className={styles.list}>
            {
                oReversedIngredients.map((oIngredient, nIndex) => (
                    <li key={nIndex}
                        className={"pr-6" + (nIndex === 0 ? "" : " pt-4")}>
                        <ul className={styles.list__item__properties}>
                            <IngredientFeedImage sName={oIngredient.name}
                                                 sImageURL = {oIngredient.image}
                                                 sCoverText="" />
                            <li
                              className="text text_type_main-default ml-4 mr-4">
                                <span>{oIngredient.name}</span>
                            </li>
                            <li className="text text_type_digits-default">
                                <span>
                                    {
                                        oIngredient.type === "bun" ?
                                                             "2" : "1"
                                    }&nbsp;x&nbsp;{
                                        oIngredient.price
                                    }&nbsp;<CurrencyIcon type="primary" />
                                </span>
                            </li>
                        </ul>
                    </li>
                ))
            }
            </ul>
            <footer className={`${styles.bottom} mt-10`}>
                <section
                    className="text text_type_main-default text_color_inactive">
                    {makeCoolDateFromUTCString(createdAt)}
                </section>
                <section className="text text_type_digits-default">
                    {price}&nbsp;<CurrencyIcon type="primary" />
                </section> 
            </footer>
        </section>
    );
});

export default OrderSummary;