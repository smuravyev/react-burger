import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

import styles from './app.module.css';  

import {oSettings} from "../../config/config.js";

import {oIngredientTypes,
        oErrorCodes,
        oBurgerTemplate,
        oIngredientsTemplate} from "../../utils/constants.js";
        
import {BurgerContext,
        IngredientsContext} from "../../utils/appcontext.js";
        
import {aInitialUsedIngredients,
        usedIngredientsReducer,
        aInitialPrice,
        modifyPrice} from "../../utils/reducers.js";

const App = () => {
    /* Created burger */
    const [oConstructedBurger, setOConstructedBurger] =
                                                React.useState(oBurgerTemplate);
    /* Current order details */
    const [oCurrentOrder, setOCurrentOrder] = React.useState(null);

    /* Current page */
    const [sCurrentPage, setSCurrentPage] =
                                         React.useState(oSettings.sDefaultPage);

    /* Ingredients available */
    const [oIngredients, setOIngredients] =
                                           React.useState(oIngredientsTemplate);

    const [oCurrentIngredientDetails, setOCurrentIngredientDetails] =
                                                           React.useState(null);

    /* Was the loading successful? */
    const [bIsLoaded, setBIsLoaded] = React.useState(false);

    /* Am I busy (i. e. loading something)? */
    const [bIsBusy, setBIsBusy] = React.useState(false);

    
    /* Number of used components (it'll be easier to count them) */
    const [oUsedIngredients, countIngredient] =
                                      React.useReducer(usedIngredientsReducer,
                                                       aInitialUsedIngredients);
    const [oPrice, updatePrice] = React.useReducer(modifyPrice, aInitialPrice);
        
    /* Was there any errors? */
    const [erCatchedError, setErCatchedError] = React.useState(null);

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
        setBIsBusy(true);
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
                setOIngredients(splitByTypes(oData.data));
                setBIsLoaded(true);
                setBIsBusy(false);
            })
            .catch((erError) => {
                setBIsBusy(false);
                setErCatchedError(erError);
            });    
    }, []);
    
    //============= EVENT HANDLERS =============================================

    const logoClickHandler = React.useCallback(() => {
        setSCurrentPage(oSettings.sDefaultPage);
    }, []);
    
    const addUsedIngredient = React.useCallback((oIngredient) => {
        countIngredient({ID : oIngredient._id, operation: "add"});
        updatePrice({amount: oIngredient.price,
                     operation: oIngredient.type === oIngredientTypes.sBun ? 
                                "adddoubled" : "add"});
    }, [countIngredient, updatePrice]);
    
    const removeUsedIngredient = React.useCallback((oIngredient) =>{
        countIngredient({ID : oIngredient._id, operation: "remove"});
        updatePrice({amount: oIngredient.price,
                     operation: oIngredient.type === oIngredientTypes.sBun ? 
                                "reducedoubled" : "reduce"});
    }, [countIngredient, updatePrice]);

    const ingredientClickHandler = React.useCallback((oIngredient) => {
        if(oConstructedBurger.oBun &&
           oConstructedBurger.oBun._id){
            if(oIngredient.type === oIngredientTypes.sBun){
                removeUsedIngredient(oConstructedBurger.oBun);
                addUsedIngredient(oIngredient);
                setOConstructedBurger({...oConstructedBurger,
                                       oBun : oIngredient
                                      });
            }
            else{
                addUsedIngredient(oIngredient);
                setOConstructedBurger({...oConstructedBurger,
                                       aContent :
                                              [...(oConstructedBurger.aContent),
                                               oIngredient]
                                      });
            }
        }
        else{
            if(oIngredient.type === oIngredientTypes.sBun){
                addUsedIngredient(oIngredient);
                setOConstructedBurger({...oConstructedBurger,
                                       oBun : oIngredient
                                      });
            }
        }
        setOCurrentIngredientDetails(oIngredient);
    }, [oConstructedBurger,
        removeUsedIngredient,
        addUsedIngredient,
        setOConstructedBurger,
        setOCurrentIngredientDetails]);
    
    const removeIngredientClickHandler = React.useCallback((nIndex) => {
        removeUsedIngredient(oConstructedBurger.aContent[nIndex]);
        setOConstructedBurger({...oConstructedBurger,
                               aContent :
                  oConstructedBurger.aContent.filter((oElement, nThisIndex) => {
                      return nThisIndex !== nIndex;
                  })
        });
    }, [oConstructedBurger, removeUsedIngredient, setOConstructedBurger]);
    
    const makeOrderHandler = () => {
        //First of all, we are now busy.
        setBIsBusy(true);
        const aIngredientsToTheKitchen = [oConstructedBurger.oBun._id];
        oConstructedBurger.aContent.forEach((oElement) => {
            aIngredientsToTheKitchen.push(oElement._id);
        });        
        fetch(oSettings.sAPIBaseURL + oSettings.oAPIURIS.sOrders,
                    {method: 'POST',
                     cache: 'no-cache',
                     headers: {
                         'Content-Type': 'application/json'
                     },
                     redirect: 'follow',
                     body: JSON.stringify({ingredients: aIngredientsToTheKitchen})})
            .then((oResponse) => {
                if(!(oResponse.ok)){
                    throw new Error(oErrorCodes.EC_CANNOT_CREATE_ORDER);
                }
                return oResponse.json();
            })
            .then((oData) => {
                if((!(oData.success)) ||
                   (!(oData.order)) ||
                   (!(oData.order.number))){
                    throw new Error(oErrorCodes.EC_CANNOT_CREATE_ORDER);
                }
                setBIsBusy(false);
                setOCurrentOrder({orderID : parseInt(oData.order.number)});
            })
            .catch((erError) => {
                setBIsBusy(false);
                setErCatchedError(erError);
            });    
    }
    
    const resetOrder = () => {
        updatePrice({operation: "reset"});
        countIngredient({operation: "reset"});
        setOConstructedBurger(oBurgerTemplate);
        setOCurrentOrder(null)
    }

    return (
        <>
            {
                bIsLoaded && (
                    <div className={styles.wrapper}>
                        <AppHeader section={sCurrentPage}
                                   onHomeClick={logoClickHandler} />
                             <main className={styles.main}>
                             <IngredientsContext.Provider
                                    value={{ingredients: oIngredients,
                                            usedIngredients:
                                                        oUsedIngredients.list}}>
                                 <BurgerIngredients onIngredientClick=
                                                      {ingredientClickHandler}/>
                                 <BurgerContext.Provider value={{
                                                     burger: oConstructedBurger,
                                                     price: oPrice.value}}>
                                     <BurgerConstructor
                                             onPlaceOrderHandler=
                                                              {makeOrderHandler}
                                             removeIngredientHandler=
                                               {removeIngredientClickHandler} />
                                 </BurgerContext.Provider>
                             </IngredientsContext.Provider>
                        </main>
                    </div>
                )
            }
            {
                (bIsBusy) && (
                    <Modal canClose={false}
                           caption="Загрузка&hellip;" />
                )
            }
            {
                oCurrentOrder && (
                    <Modal closer={resetOrder}>
                        <OrderDetails orderID={oCurrentOrder.orderID} />
                    </Modal>
                )
            }
            {
                oCurrentIngredientDetails && (
                    <Modal caption="Детали игредиента"
                           closer={() => setOCurrentIngredientDetails(null)}>
                        <IngredientDetails {...oCurrentIngredientDetails} />
                    </Modal>
                )
            }
            {
                erCatchedError && (
                    <Modal canClose={false}
                           caption={erCatchedError.message || 
                                    oErrorCodes.EC_GENERAL_ERROR} />
                )
            }
        </>
    );
}
 
export default App;