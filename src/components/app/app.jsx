import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import AppStyles from './app.module.css';  

import aHardcodedData from '../../utils/data.js';
import oSampleBurger from '../../utils/sample.js';

class App extends React.Component {
    
    constructor(props){
        super(props);
        let oConstructedBurger = {oBun : null, oContent : [], nPrice : 0};
        oConstructedBurger.oBun = aHardcodedData.find((element) => {
            return element._id === oSampleBurger.oBun;
        });
        oConstructedBurger.nPrice = oConstructedBurger.oBun.price;
        oSampleBurger.oContent.map((ourElement) => {
            oConstructedBurger.oContent.push(aHardcodedData.find((element) => {
                    return (element._id === ourElement) &&
                           (oConstructedBurger.nPrice += element.price);
            }));
        });
        
        this.state = {constructedBurger : oConstructedBurger,
                      ingredients : aHardcodedData};
    }

    render() {
        return (
            <div className={AppStyles.wrapper}>
                <AppHeader />
                <main className={AppStyles.main}>
                    <BurgerIngredients burger={this.state.constructedBurger} ingredients={this.state.ingredients} />
                    <BurgerConstructor burger={this.state.constructedBurger} />
                </main>
            </div>
        );
    }
}
 
export default App;
