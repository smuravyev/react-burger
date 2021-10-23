import React from 'react';
import PropTypes from 'prop-types';

import {
        ConstructorElement, 
        Button,
        CurrencyIcon,
        DragIcon
       } from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerContext} from "../../utils/appcontext.js";

import styles from  './burger-constructor.module.css';

const BurgerConstructor = ({onPlaceOrderHandler, removeIngredientHandler}) => {
    const {burger, price} = React.useContext(BurgerContext);
    
    return (
        <section className={`${styles.section} ml-5 pt-25`}>
        {
            /* Checking out if there any burger and there is at least a bun */
            burger &&
            burger.oBun &&
            burger.oBun._id && (
                <>
                    <ul className={styles.list}>
                        <li className={`${styles.item} pl-8 pb-4`}>
                            <ConstructorElement type="top"
                                                isLocked={true}
                                                text={burger.oBun.name
                                                      +" (верх)"}
                                                price={burger.oBun.price}
                                                thumbnail=
                                                    {burger.oBun.image} />
                        </li>
                    </ul>
                    <ul className={styles.list_scrollable}>
                        {
                            /* Any burger content content here? */
                            burger.aContent && 
                            burger.aContent.map((oElement, nIndex) => 
                                <li key={nIndex}
                                    className={[styles.item,
                                                styles.item_moveable,
                                                "pl-8" + ((burger.aContent.length > nIndex + 1) ? " pb-4" : "")].join(" ")}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement isLocked={false}
                                                        text={oElement.name}
                                                        price={oElement.price}
                                                        thumbnail={oElement.image}
                                                        handleClose={() => removeIngredientHandler(nIndex)} />
                                </li>
                            )
                        }
                     </ul>
                     <ul className={styles.list}>
                        <li className={`${styles.item} pt-4 pl-8`}>
                            <ConstructorElement type="bottom"
                                                isLocked={true}
                                                text={burger.oBun.name +
                                                      " (низ)"}
                                                price={burger.oBun.price}
                                                thumbnail={burger.oBun.image} />
                        </li>
                        {
                             price && 
                                 <li className={`${styles.item} ${styles.item_total} pt-10 pr-4`}>
                                     <p className={`${styles.total_price} pr-10 text text_type_digits-medium`}>
                                         {price}&nbsp;<CurrencyIcon type="primary" />
                                     </p>
                                     <Button type="primary"
                                             size="medium"
                                             onClick={onPlaceOrderHandler}>
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
    onPlaceOrderHandler : PropTypes.func.isRequired, 
    removeIngredientHandler : PropTypes.func.isRequired
};

export default BurgerConstructor;