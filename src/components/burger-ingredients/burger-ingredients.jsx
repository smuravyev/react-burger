import { useState,
         useRef,
         useEffect,
         useMemo,
         createRef,
         useCallback,
         Fragment } from 'react';
         
import { useSelector,
         useDispatch,
         shallowEqual } from 'react-redux';

import { getIngredients } from '../../services/actions/burger-ingredients';

import { CLEAR_CURRENT_INGREDIENT,
         SET_CURRENT_INGREDIENT }
                               from '../../services/actions/ingredient-details';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Ingredient from '../ingredient/ingredient';
import Loader from '../loader/loader';

import styles from  './burger-ingredients.module.css';

const usedIngredientsSelector = (store) => {
    const oResult = [];
    if((store.constructedBurger.oBun) &&
       (store.constructedBurger.oBun._id)){
        oResult[store.constructedBurger.oBun._id] = 1
        store.constructedBurger.aContent.forEach(oElement => {
            if(oResult[oElement._id]){
               oResult[oElement._id] = oResult[oElement._id] + 1;
            }
            else{
                oResult[oElement._id] = 1;
            }
        });
    }
    return oResult;
};

const BurgerIngredients = () => {
    const { aIngredients,
            bIsRequesting,
            bIsRequestFailed } = useSelector(store => store.burgerIngredients, 
                                             shallowEqual);
    const oUsedIngredients = useSelector(usedIngredientsSelector, shallowEqual);
    const oCurrentIngredient = useSelector(store => store.currentIngredient,
                                           shallowEqual);
    const dispatch = useDispatch();

    // This is used only here, locally,
    // no need to push this to the redux (for now)
    const [sCurrentType, setSCurrentType] = useState(aIngredients[0].sType);
                                                      
    const oULRefs = useMemo(() =>{
        const oResultSetOfRefs = {};
        aIngredients.forEach((oType) => {
            oResultSetOfRefs[oType.sType] = createRef(null); 
        });
        return oResultSetOfRefs;
    }, [aIngredients]);
    
    const handleTypeTabClick = useCallback((sType) => {
        setSCurrentType(sType);
        oULRefs[sType].current.scrollIntoView({behavior: "smooth"});
    }, [oULRefs]);
    
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);
    
    const oScrollerRef = useRef(null);
    
    const handleScroll = useCallback(() => {
        const oScrollerCoords = oScrollerRef.current.getBoundingClientRect();
        let nMinimumDifference = Number.MAX_SAFE_INTEGER;
        let sMinimumIndex = null;
        for (let sIndex in oULRefs){
            const currentHeaderCoords = 
                                oULRefs[sIndex].current.getBoundingClientRect();
            const nTopDifference =
                        Math.abs(currentHeaderCoords.top - oScrollerCoords.top);
            if(nTopDifference < nMinimumDifference){
                nMinimumDifference = nTopDifference;
                sMinimumIndex = sIndex;
            }            
        };
        setSCurrentType(sMinimumIndex);
    }, [oULRefs, oScrollerRef]);
    
    return (
        <section className={`${styles.section} mr-5`}>
            {
                bIsRequesting && (
                    <Loader message="Загрузка ингредиентов&hellip;" />
                )
            }
            {(!bIsRequesting && !bIsRequestFailed) &&  (
               <>
                   <h1 className="pt-10 pb-5 text text_type_main-large">
                       Соберите бургер
                    </h1>
                    <menu className={styles.menu}>
                        {
                            aIngredients.map((oCurrentType, nIndex) => ( 
                                <Tab value={oCurrentType.sType}
                                     key={nIndex} 
                                     active={(oCurrentType.sType
                                                              === sCurrentType)}
                                     onClick={handleTypeTabClick}>
                                     {oCurrentType.sName}
                                </Tab>
                            ))
                        }
                    </menu>
                    <article className={`${styles.items__scrollable} mt-8`}
                             ref={oScrollerRef}
                             onScroll={handleScroll}>
                        {
                            aIngredients.map((oCurrentType, nTypeIndex) => (
                                <Fragment key={nTypeIndex}>
                                    <h2 ref={oULRefs[oCurrentType.sType]}
                                         className=
                                         "mt-2 mb-6 text text_type_main_medium">
                                        {oCurrentType.sName}
                                    </h2>
                                    <ul className={styles.items}>
                                        {
                                             oCurrentType.aSet.map(
                                                          (oThisElement) => (
                                                 <Ingredient
                                                     key={oThisElement._id}
                                                     nCounter=
                                            {oUsedIngredients[oThisElement._id]}
                                                     onClickHandler={() =>
                                                         dispatch({ type :
                                                         SET_CURRENT_INGREDIENT,
                                                                    payload :
                                                                  { oIngredient:
                                                               oThisElement}}) }
                                                      oIngredient={oThisElement}
                                                 />
                                             ))
                                         }
                                     </ul>
                                 </Fragment>
                             ))
                         }
                    </article>
                </> )
            }
            {
                oCurrentIngredient && (
                    <Modal caption="Детали игредиента"
                           closer={() =>
                             { dispatch({ type : CLEAR_CURRENT_INGREDIENT}) } }>
                        <IngredientDetails />
                    </Modal>
                )
            }
        </section>
    );
};


export default BurgerIngredients;