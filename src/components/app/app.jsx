import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import styles from './app.module.css';  

import aHardcodedData from '../../utils/data.js';
import oSampleBurger from '../../utils/sample.js';

/*
   Hooks is the topic for the next week, so I will leave the App component
   like that as it is stateful.
*/
class App extends React.Component {
    
    constructor(props){
        super(props);
        
        /*
            In this constructor we'll just creating some data based on the
            hardcoded data, this is a temporary code and it should not be
            in production.
            
            All this code is executed only once, so...
        */
        
        const oConstructedBurger = {
                                    oBun : {},
                                    oContent : [],
                                    nPrice : 0};
        /* Hardcoded bun */
        oConstructedBurger.oBun = aHardcodedData.find((oIngredient) =>
                                        oIngredient._id === oSampleBurger.oBun);
                                        
        /* The price of the burger */
        oConstructedBurger.nPrice = oConstructedBurger.oBun.price;
        
        /* 
            Now we'll count overall price and complete the oConstructedBurger
            object. Sample burger content is the array of strings - IDs of the 
            ingredients. So:
        */
        oSampleBurger.oContent.forEach((sSampleBurgerIngredient) => {
            oConstructedBurger.oContent.push(
                    aHardcodedData.find((eListIngredient) => {
                    return (eListIngredient._id === sSampleBurgerIngredient) &&
                           (oConstructedBurger.nPrice += eListIngredient.price);
            }));
        });
        
        /* And put all these things into our state, default page is "burger" */
        this.state = {constructedBurger : oConstructedBurger,
                      ingredients : aHardcodedData,
                      currentPage : "burger"};
    }

    render(){
        return (
            <div className={styles.wrapper}>
                <AppHeader section={this.state.currentPage} />
                <main className={styles.main}>
                    <BurgerIngredients burger={this.state.constructedBurger} ingredients={this.state.ingredients} />
                    <BurgerConstructor burger={this.state.constructedBurger} />
                </main>
            </div>
        );
    }
}
 
export default App;