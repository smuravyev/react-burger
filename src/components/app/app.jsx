import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';

import styles from './app.module.css';  

import {oSettings} from "../../config/config.js";
import {oIngredientTypes,
        oErrorCodes,
        oBurgerTemplate,
        oIngredientsTemplate,
        sModalSelector} from "../../utils/constants.js";

const App = () => {
    /* Created burger */
    const [oConstructedBurger, setOConstructedBurger] =
                                                React.useState(oBurgerTemplate);
    /* Current page */
    const [sCurrentPage, setSCurrentPage] =
                                         React.useState(oSettings.sDefaultPage);
    
    /* Ingredients available */
    const [oIngredients, setOIngredients] =
                                           React.useState(oIngredientsTemplate);
    
    /* Was the loading successful? */
    const [bIsLoaded, setBIsLoaded] = React.useState(false);
    
    /* Number of used components (it'll be easier to count them) */
    const [aUsedIngredients, setAUsedIngredients] = React.useState(null);
    
    /* Was there any errors? */
    const [erCatchedError, setErCatchedError] = React.useState(null);
    
    //==========================================================================
    //TEMPORARY: after the user logic will be created, oSampleBurger will go
    //           away.
    //NO useMemo: this will be called only once mounting the App component.
    const createRandomBurger = (aData) => {
        const oBurger = {};
        //Find first available bun and use it:
        oBurger.oBun = aData.find((oIngredient) =>
                                    oIngredient.type === oIngredientTypes.sBun);
        
        //Add the bun price to the total sum
        oBurger.nPrice = oBurger.oBun.price;
        
        //Still no content:
        oBurger.aContent = [];
        
        //Maximum of 10 components per burger
        const nMaxComponents = 1 + Math.floor(Math.random() * 10);

        //No buns. We will add ingredients.
        const aIngredientsWithoutBuns = aData.filter((oElement) =>
                                       oElement.type !== oIngredientTypes.sBun);
        for(let nCounter = 0;
            nCounter < nMaxComponents;
            nCounter++){
               const nRandomIndex =
                     Math.floor(Math.random() * aIngredientsWithoutBuns.length);
                        
               oBurger.aContent.push(aIngredientsWithoutBuns[nRandomIndex]);
               oBurger.nPrice = oBurger.nPrice +
                                    aIngredientsWithoutBuns[nRandomIndex].price;
        }
        return oBurger;
    };
    
    const countIngredients = (oBurger) => {
       const aResult = [];
       if(oBurger && oBurger.oBun && oBurger.oBun["_id"]) {
           aResult[oBurger.oBun._id] = 1;
       }
       if(oBurger.aContent) {
           oBurger.aContent.forEach((oIngredient) => {
               aResult[oIngredient._id] =
                    aResult[oIngredient._id] ? aResult[oIngredient._id] + 1 : 1; 
           });
       }
       return aResult;
    }

    // WARNING! It will run only once, no need to UseMemo
    const splitByTypes = (aIngredients) => {
       const oResult = oIngredientsTemplate;
       [oIngredientTypes.sBun,
        oIngredientTypes.sSauce,
        oIngredientTypes.sMain].forEach((sType) =>{
           const nIndex = 
                      oResult.findIndex((oElement) => oElement.sType === sType); 
           oResult[nIndex].aSet =
                 aIngredients.filter(oIngredient => oIngredient.type === sType);
        });
        
        
        return oResult;
    };
    
    //Loading 
    React.useEffect(() => {
        fetch(oSettings.sAPIBaseURL + oSettings.oAPIURIS.sIngredients)
            .then((oResponse) => {
                if(!(oResponse.ok)){
                    throw new Error(oErrorCodes.EC_COULD_NOT_FETCH_INGREDIENTS);
                }
                return oResponse.json();
            })
            .then((oData) => {
                if((!(oData.success)) ||
                   (!(Array.isArray(oData.data)))){
                    throw new Error(oErrorCodes.EC_INVALID_INGREDIENTS_DATA);
                }
                
                //==============================================================
                //TEMPORARY: creating a test burger and count it's ingredients
                const oCreatedBurger = createRandomBurger(oData.data);
                const oIngredientsCount = countIngredients(oCreatedBurger);
                setOConstructedBurger(oCreatedBurger);

                setAUsedIngredients(oIngredientsCount);
                
                //split ingredients and save them
                const oIngredientsLoaded = splitByTypes(oData.data);
                setOIngredients(oIngredientsLoaded);
                
                //We are ready to show the content!
                setBIsLoaded(true);
            })
            .catch((erError) => {
                setErCatchedError(erError);
            });    
    }, []);
    
    const clickOnLogoHandler = () => {
        setSCurrentPage(oSettings.sDefaultPage);
    };
    
    return (<>
        {
         bIsLoaded && (<div className={styles.wrapper}>
             <AppHeader section={sCurrentPage}
                        onHomeClick={clickOnLogoHandler} />
                 <main className={styles.main}>
                     <BurgerIngredients usedIngredients={aUsedIngredients}
                                         ingredients={oIngredients} />
                     <BurgerConstructor burger={oConstructedBurger} />
                 </main>
             </div>
         )
        }
        {erCatchedError && (
                <Modal parentElement={document.querySelector(sModalSelector)}
                       canClose={false}
                       caption={erCatchedError.message || "Произошла фигня&hellip;"}>
                </Modal>
        )}
        </>);
}
 
export default App;