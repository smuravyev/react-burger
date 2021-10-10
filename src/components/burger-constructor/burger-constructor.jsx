import React from 'react';
import PropTypes from 'prop-types';

import ingredientsPropTypes from "../../utils/ingredients.proptypes.js";

import {
        ConstructorElement, 
        Button,
        CurrencyIcon,
        DragIcon
       } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from  './burger-constructor.module.css';

const BurgerConstructor = props => {
    return (
        <section className={`${styles.section} ml-5 pt-25`}>
        {
            /* Checking out if there any burger and there is at least a bun */
            props.burger &&
            props.burger.oBun &&
            props.burger.oBun._id && (
                <>
                    <ul className={styles.list}>
                        <li className={`${styles.item} pl-8 pb-4`}>
                            <ConstructorElement type="top"
                                                isLocked={true}
                                                text={props.burger.oBun.name
                                                      +" (верх)"}
                                                price={props.burger.oBun.price}
                                                thumbnail=
                                                    {props.burger.oBun.image} />
                        </li>
                    </ul>
                    <ul className={styles.list_scrollable}>
                        {
                            /* Any burger content content here? */
                            props.burger.oContent && 
                            props.burger.oContent.map((oElement, nIndex) => 
                                <li key={nIndex}
                                    className={[styles.item,
                                                styles.item_moveable,
                                                "pl-8" + ((props.burger.oContent.length > nIndex + 1) ? " pb-4" : "")].join(" ")}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement isLocked={false}
                                                        text={oElement.name}
                                                        price={oElement.price}
                                                        thumbnail={oElement.image} />
                                </li>
                            )
                        }
                     </ul>
                     <ul className={styles.list}>
                        <li className={`${styles.item} pt-4 pl-8`}>
                            <ConstructorElement type="bottom"
                                                isLocked={true}
                                                text={props.burger.oBun.name +
                                                      " (низ)"}
                                                price={props.burger.oBun.price}
                                                thumbnail={props.burger.oBun.image} />
                        </li>
                        {
                             props.burger.nPrice && 
                                 <li className={`${styles.item} ${styles.item_total} pt-10 pr-4`}>
                                     <p className={`${styles.total_price} pr-10 text text_type_digits-medium`}>
                                         {props.burger.nPrice}&nbsp;<CurrencyIcon type="primary" />
                                     </p>
                                     <Button type="primary" size="medium">
                                         Оформить заказ
                                     </Button>
                                 </li>
                        } 
                    </ul>
                </>
            )
        }
        </section> 
    );
}

/* Непонятно, как верстать, если цены нет или булку не выбрали,
   пока все необязательно, если чего-то нет, мы это что-то не рендерим */
BurgerConstructor.propTypes = {
    burger: PropTypes.shape({
        oBun : ingredientsPropTypes,
        oContent : PropTypes.arrayOf(ingredientsPropTypes),
        nPrice : PropTypes.number,
    })
};


export default BurgerConstructor;