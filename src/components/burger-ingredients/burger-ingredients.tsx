import { useState,
         useRef,
         useMemo,
         createRef,
         useCallback,
         Fragment } from 'react';
         
import type { RefObject } from 'react';
         
import { shallowEqual } from 'react-redux';
         
import { useAppSelector } from '../../services/hooks';

import { useNavigate,
         useLocation } from 'react-router-dom';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import throttle from 'lodash/throttle';

import { Ingredient,
         Loader } from '../';

import type { TRootState } from '../../services/store';

import { nScrollThrottleDelay } from '../../utils/constants';

import { TIngredientType,
         IDraggableIngredient } from '../../utils/types';

import styles from  './burger-ingredients.module.css';

const usedIngredientsSelector = (store : TRootState)  => {
    const oResult : {[name: string] : number} = {};
    if((store.constructedBurger.present.oBun) &&
       (store.constructedBurger.present.oBun._id)){
        //Two buns added simultaneously
        oResult[store.constructedBurger.present.oBun._id] = 2
        store.constructedBurger.present.aContent.forEach(oElement => {
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

const BurgerIngredients = () : JSX.Element => {
    const { aIngredients,
            bIsRequesting,
            bIsRequestFailed } = useAppSelector((store) =>
                                                        store.burgerIngredients, 
                                             shallowEqual);
    const oUsedIngredients = useAppSelector(usedIngredientsSelector,
                                              shallowEqual);
    const navigate = useNavigate();
    const oLocation = useLocation();

    // This is used only here, locally,
    // no need to push this to the redux (for now)
    const [sCurrentType, setSCurrentType] = useState(aIngredients[0].sType);
                                                      
    const oULRefs = useMemo(() =>{
        const oResultSetOfRefs :
            {[name in TIngredientType] : RefObject<HTMLHeadingElement> | null} =
                { bun : null,
                  sauce : null,
                  main : null };
        aIngredients.forEach((oType) => {
            oResultSetOfRefs[oType.sType] = createRef<HTMLHeadingElement>(); 
        });
        return oResultSetOfRefs;
    }, [aIngredients]);
    
    const handleTypeTabClick = useCallback((sType : TIngredientType) : void => {
        setSCurrentType(sType);
        oULRefs[sType]?.current?.scrollIntoView({behavior: "smooth"});
    }, [oULRefs]);
    
    const handleIngredientClick =
             useCallback((oThisElement : IDraggableIngredient) : () => void => {
        return () => {
            navigate("/ingredients/" + oThisElement._id + "/", 
                     {state: { oBackground : oLocation }});
        }
    }, [navigate, oLocation]);
    
    const oScrollerRef = useRef<HTMLElement>(null);
    
    const handleScroll = useCallback(() => {
        if(oScrollerRef.current){
            const oScrollerCoords =
                                   oScrollerRef.current.getBoundingClientRect();
            let nMinimumDifference = Number.MAX_SAFE_INTEGER;
            let sMinimumIndex : TIngredientType | null = null;
            let sIndex : TIngredientType;
            for (sIndex in oULRefs){
                const currentHeaderCoords = 
                              oULRefs[sIndex]?.current?.getBoundingClientRect();
                if(currentHeaderCoords instanceof DOMRect){
                    const nTopDifference =
                        Math.abs(currentHeaderCoords.top - oScrollerCoords.top);
                    if(nTopDifference < nMinimumDifference){
                        nMinimumDifference = nTopDifference;
                        sMinimumIndex = sIndex;
                    }
                }
            };
            if(sMinimumIndex !== null){
                setSCurrentType(sMinimumIndex);
            }
        }
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
                                     onClick={() => 
                                        handleTypeTabClick(oCurrentType.sType)}>
                                     {oCurrentType.sName}
                                </Tab>
                            ))
                        }
                    </menu>
                    <article className={`${styles.items__scrollable} mt-8`}
                             ref={oScrollerRef}
                             onScroll={ throttle(handleScroll,
                                                 nScrollThrottleDelay) }>
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
                                                     onClickHandler=
                                           {handleIngredientClick(oThisElement)}
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
        </section>
    );
};


export default BurgerIngredients;