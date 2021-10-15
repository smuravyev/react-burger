import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import ingredientsPropTypes from "../../utils/ingredients.proptypes.js";

import {sModalSelector} from "../../utils/constants.js";

import {
        Counter, 
        Tab,
        CurrencyIcon
       } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from  './burger-ingredients.module.css';

const BurgerIngredients = ({ingredients, usedIngredients}) => {
    const [sCurrentType, setSCurrentType] =
                                     React.useState(ingredients[0].sType);
                                     
    const [oCurrentIngredient, setOCurrentIngredient] = React.useState(null);

    const oULRefs = {};
    
    ingredients.forEach((oType) => {
        oULRefs[oType.sType] = React.createRef(null); 
    });

    const handleTypeTabClick = (sType) => {
        setSCurrentType(sType);
        oULRefs[sType].current.scrollIntoView({behavior: "smooth"});
    };
    
    const oScrollerRef = React.createRef(null);
    
    const handleScroll = () => {
        const oScrollerCoords = oScrollerRef.current.getBoundingClientRect();
        for (let sIndex in oULRefs){
            const currentHeaderCoords = 
                                oULRefs[sIndex].current.getBoundingClientRect();
            const nTopDifference = currentHeaderCoords.top - oScrollerCoords.top;
            if(nTopDifference > -5  && nTopDifference < oScrollerCoords.height){
                setSCurrentType(sIndex);
                break;
            }
        };
    };

    return (
            <section className={`${styles.section} mr-5`}> 
               <h1 className="pt-10 pb-5 text text_type_main-large">
                    Соберите бургер
                </h1>
                <menu className={styles.menu}>
                    {ingredients.map((currentType, nIndex) => 
                        <Tab value={currentType.sType}
                             key={nIndex} 
                             active={(currentType.sType === sCurrentType)}
                             onClick={handleTypeTabClick}>
                            {currentType.sName}
                        </Tab>
                    )}
                </menu>
                <article className={`${styles.items__scrollable} mt-8`}
                         ref={oScrollerRef}
                         onScroll={handleScroll}>
                    {ingredients.map((oCurrentType, nTypeIndex) =>
                        <React.Fragment key={nTypeIndex}>
                            <h2 ref={oULRefs[oCurrentType.sType]}
                               className="mt-2 mb-6 text text_type_main_medium">
                                {oCurrentType.sName}
                            </h2>
                            <ul className={styles.items}>
                                {oCurrentType.aSet.map(
                                                   (oCurrentElement, nIndex) => ( 
                                    <React.Fragment key={oCurrentElement._id}>
                                        <li className={`${styles.items__component} ml-4 mr-2 mb-8`}
                                            onClick={() => setOCurrentIngredient(oCurrentElement)}>
                                            {(usedIngredients[oCurrentElement._id] &&
                                              usedIngredients[oCurrentElement._id] > 0 && 
                                                 <Counter
                                                         count={usedIngredients[oCurrentElement._id]}
                                                         size="default" />
                                             )}
                                        <img src={oCurrentElement.image}
                                             alt={oCurrentElement.name} />
                                        <p className={`${styles.items__component__price} text text_type_digits-default`}>
                                           <span className={styles.items__component__price_digits}>{oCurrentElement.price}&nbsp;</span><CurrencyIcon type="primary" />
                                        </p>
                                        <p className={`${styles.items__component__name} mt-1 text text_type_main_small`}>
                                             {oCurrentElement.name}
                                        </p>
                                    </li>
                                </React.Fragment> ))}
                            </ul>
                        </React.Fragment>)}
                </article>
                {
                    oCurrentIngredient && (
                        <Modal parentElement={document.querySelector(sModalSelector)}
                               caption="Детали игредиента"
                               closer={() => setOCurrentIngredient(null)}>
                                   <IngredientDetails {...oCurrentIngredient} />
                        </Modal>)
                }
            </section>
        );
};

BurgerIngredients.propTypes = {
    usedIngredients : PropTypes.arrayOf(PropTypes.number).isRequired,
    ingredients : PropTypes.arrayOf(PropTypes.shape({
        sName : PropTypes.string.isRequired,
        sType : PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
        aSet : PropTypes.arrayOf(ingredientsPropTypes).isRequired
    })).isRequired
};


export default BurgerIngredients;