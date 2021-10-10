import React from 'react';
import PropTypes from 'prop-types';

import ingredientsPropTypes from "../../utils/ingredients.proptypes.js";

import {
        ConstructorElement, 
        Button,
        CurrencyIcon,
        DragIcon
       } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorStyles from  './burger-constructor.module.css';

class BurgerConstructor extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state =  {burger : props.burger};
    }

    render() {
        /* Странности с булкой, показываем цену дважды, считаем 1 раз */ 
        return (
                <section className={BurgerConstructorStyles.section + " ml-5 pt-25"}>
                { this.state.burger && this.state.burger.oBun && this.state.burger.oBun._id &&  <>
                    <ul className={BurgerConstructorStyles.list}>
                        <li className={BurgerConstructorStyles.item + " pl-8 pb-4"}>
                            <ConstructorElement type="top" isLocked={true}
                                                text={this.state.burger.oBun.name +" (верх)"}
                                                price={this.state.burger.oBun.price}
                                                thumbnail={this.state.burger.oBun.image} />
                        </li>
                    </ul>
                    <ul className={BurgerConstructorStyles.list_scrollable}>
                        {this.state.burger.oContent &&  this.state.burger.oContent.map((oElement, nIndex) => 
                             <li key={nIndex} className={[BurgerConstructorStyles.item, BurgerConstructorStyles.item_moveable,  "pl-8" + ((this.state.burger.oContent.length > nIndex + 1) ? " pb-4" : "")].join(" ")}>
                                <DragIcon type="primary" />
                                <ConstructorElement isLocked={false}
                                                    text={oElement.name}
                                                    price={oElement.price}
                                                    thumbnail={oElement.image} />
                            </li>
                            )
                        }
                     </ul>
                     
                     <ul className={BurgerConstructorStyles.list}>
                        <li className={BurgerConstructorStyles.item + " pt-4 pl-8"}>
                            <ConstructorElement type="bottom" isLocked={true}
                                                text={this.state.burger.oBun.name + " (низ)"}
                                                price={this.state.burger.oBun.price}
                                                thumbnail={this.state.burger.oBun.image} />
                        </li>
                        { this.state.burger.nPrice && <li className={BurgerConstructorStyles.item + " pt-10 pr-4 " + BurgerConstructorStyles.item_total}>
                             <p className={BurgerConstructorStyles.total_price + " pr-10 text text_type_digits-medium"}>
                                 {this.state.burger.nPrice}&nbsp;<CurrencyIcon type="primary" />
                             </p>
                             <Button type="primary" size="medium">
                                 Оформить заказ
                             </Button>
                        </li>} 
                    </ul> </>}
                </section> 
        );
    }
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