import React from 'react';
import PropTypes from 'prop-types';

import ingredientsPropTypes from "../../utils/ingredients.proptypes.js";

import {
        Counter, 
        Tab,
        CurrencyIcon
       } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from  './burger-ingredients.module.css';

class BurgerIngredients extends React.Component{
    
    constructor(props){
        super(props);
        
        const oIngredients = {"bun": [],
                              "sauce" : [],
                              "main" : []};
                             
        const aTypes = [{type : "bun", name: "Булки"},
                        {type: "sauce", name: "Соусы"},
                        {type: "main", name: "Начинки"}];
        
        //Reconstructing correct burger
        const oBurger = props.burger || {oBun : null, oContent : [], nPrice : 0};
        
        if (!oBurger.oContent) {
            oBurger.oContent = [];
        }
        
        if (!oBurger.nPrice) {
            oBurger.nPrice = 0;
        }
        
        //Modyfing ingredients map - adding counter
        this.props.ingredients.forEach(currentElement => {
            if(oIngredients[currentElement.type]){
                let nCounter = 0;
                if(currentElement.type === "bun"){
                    if(oBurger && oBurger.oBun && oBurger.oBun._id === currentElement._id){
                        nCounter++;
                    }
                } 
                else{
                    const aFoundElements = oBurger.oContent.filter(oBurgerElement => oBurgerElement._id === currentElement._id);
                    nCounter = nCounter + aFoundElements.length;
                }
                oIngredients[currentElement.type].push({...currentElement, counter: nCounter});
            }
        });
        this.state = {ingredients : oIngredients,
                      types: aTypes,
                      activeType: this.props.defaultType || "bun"};
    };
    
    render() {
        return (
                <section className={styles.section + " mr-5"}> 
                    <h1 className="pt-10 pb-5 text text_type_main-large">
                        Соберите бургер
                    </h1>
                    <menu className={styles.menu}>
                        {this.state.types.map((currentType, nIndex) => 
                            <Tab value={currentType.type} key={nIndex} active={currentType.type === this.state.activeType}>
                                {currentType.name}
                            </Tab>
                        )}
                    </menu>
                    <article className={styles.items__scrollable + " mt-8"}>
                        {this.state.types.map((currentType, nTypeIndex) =>
                            <React.Fragment key={nTypeIndex}>
                                <h2 className="mt-2 mb-6 text text_type_main_medium">
                                    {currentType.name}
                                </h2>
                                <ul className={styles.items}>
                                {this.state.ingredients[currentType.type].map((currentElement, nIndex) => 
                                    <React.Fragment key={currentElement._id}>
                                        <li className={styles.items__component + " ml-4 mr-2 mb-8"}>
                                            <Counter count={currentElement.counter} size="default" />
                                            <img src={currentElement.image} alt={currentElement.name} />
                                            <p className={styles.items__component__price + " text text_type_digits-default"}>
                                               <span className={styles.items__component__price_digits}>{currentElement.price}&nbsp;</span><CurrencyIcon type="primary" />
                                            </p>
                                            <p className={styles.items__component__name + " mt-1 text text_type_main_small"}>
                                                 {currentElement.name}
                                            </p>
                                        </li>
                                    </React.Fragment> )} 
                                </ul>
                            </React.Fragment>)}
                    </article>
                </section>
        );
    };
}

BurgerIngredients.propTypes = {
    burger: PropTypes.shape({
        oBun : ingredientsPropTypes,
        oContent : PropTypes.arrayOf(ingredientsPropTypes),
        nPrice : PropTypes.number
    }),
    ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired
};

export default BurgerIngredients;