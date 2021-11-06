import { useEffect,
         useCallback } from 'react';

import { useSelector,
         shallowEqual,
         useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';

import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { ConstructorElement, 
         Button,
         CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import Loader from '../loader/loader';
import Filling from '../filling/filling';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import { CLEAR_ORDER_NUMBER,
         sendOrder } from '../../services/actions/order-details';
import { CLEAR_BURGER } from '../../services/actions/burger-constructor';

import { oIngredientDragTypes } from '../../utils/constants';

import styles from  './burger-constructor.module.css';

const priceSelector = (store) => {
    let nResult = 0;
   if((store.constructedBurger.present.oBun) &&
       (store.constructedBurger.present.oBun.price)){
        nResult = nResult + store.constructedBurger.present.oBun.price * 2;
    }
    store.constructedBurger.present.aContent.forEach(oElement => {
        nResult = nResult + oElement.price;
    });
    return nResult;
};

const BurgerConstructor = () => {
    const bIsBusy = useSelector(store => store.app.bIsBusy);                                     
    const { oBun,
            aContent } = useSelector(store => store.constructedBurger.present,
                                     shallowEqual);
    const nPrice = useSelector(priceSelector);
    
    const nOrderNumber = useSelector(store => store.orderDetails.nOrderNumber);
    
    const dispatch = useDispatch(); 

    const [{ bNeedHelper } , refDrop] = useDrop({
        accept : [ oIngredientDragTypes.sBun,
                   oIngredientDragTypes.sFilling ],
        collect: monitor => ({
            bNeedHelper: monitor.canDrop() && (!oBun._id)
                         && (aContent.length === 0) //Show the helper if nothing
                                                    //added
        }),
        drop: (_, monitor) => {
            return monitor.getDropResult() ||
                   { bDefaultDrop: true };
        }
    }, [ oBun._id,
         aContent.length,
         oIngredientDragTypes.sBun,
         oIngredientDragTypes.sFilling ]);
         
    const keyboardHandler =  useCallback((eEvent) => {
        const nCtrlZCode = 90;
        const nCtrlYCode = 89;
        if(eEvent.ctrlKey || eEvent.metaKey){
            switch (eEvent.keyCode){
                case nCtrlZCode: {
                    dispatch(UndoActionCreators.undo());
                    eEvent.preventDefault();
                    break;
                }
                case nCtrlYCode: {
                    dispatch(UndoActionCreators.redo());
                    eEvent.preventDefault();
                    break;
                }
                default: // Do nothing
            }
        }
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener("keydown", keyboardHandler);
        return () => {
            document.removeEventListener("keydown", keyboardHandler)
        }
    }, [ keyboardHandler ]);

    return (
        <section ref={refDrop} className=
      {`${styles.section}${bNeedHelper ? ' ' + styles.target : ''} ml-5 pt-25`}>
            {
                (oBun && oBun._id) && (
                    <ul className={`${styles.list} pr-4`}>
                        <li className={`${styles.item} pl-8 pb-4`}>
                            <ConstructorElement type="top"
                                                isLocked={true}
                                                text={oBun.name +" (верх)"}
                                                price={oBun.price}
                                                thumbnail={oBun.image} />
                        </li>
                    </ul>
                )
            }
            {
                (aContent.length > 0) && (
                    <ul className={`${styles.list_scrollable} pr-2`}> 
                        {
                            aContent.map((oElement, nIndex) => (
                                     <Filling oIngredient={oElement}
                                              key={oElement.sInnerID}
                                              bIsLast={(aContent.length >
                                                            (nIndex + 1))} /> ))
                        }
                    </ul>
                )
            }
            {
                (oBun && oBun._id) && (
                    <ul className={`${styles.list} pr-4`}>
                        <li className={`${styles.item} pt-4 pl-8`}>
                            <ConstructorElement type="bottom"
                                                isLocked={true}
                                                text={oBun.name + " (низ)"}
                                                price={oBun.price}
                                                thumbnail={oBun.image} />
                        </li>
                    </ul>
                )
            }
            <ul className={`${styles.list} pr-4`}>
                <li className=
                             {`${styles.item} ${styles.item_total} pt-10 pr-4`}>
                    <p className=
                   {`${styles.total_price} pr-10 text text_type_digits-medium`}>
                        {nPrice}&nbsp;<CurrencyIcon type="primary" />
                    </p>
                    {
                        bIsBusy && (
                            <div className={styles.loader_container}>
                                <Loader message="Загрузка" />
                            </div>
                        )
                    }
                    {
                        (!(oBun && oBun._id)) && (
                            <div className={styles.loader_container}>
                                Добавьте, пожалуйста, булку
                            </div>
                        )
                    }
                    {
                        ((!bIsBusy) && oBun && oBun._id) && (
                            <Button type="primary"
                                    size="medium"
                                    onClick={() => {
                                        dispatch(sendOrder());
                                    }}>
                                Оформить заказ
                            </Button>
                        )
                    }
                </li>
            </ul>
            {
                (nOrderNumber >= 0) && (
                    <Modal
                        closer={() => {
                            dispatch({ type: CLEAR_ORDER_NUMBER });
                            dispatch({ type: CLEAR_BURGER });
                            dispatch(UndoActionCreators.clearHistory());
                        }}>
                        <OrderDetails />
                    </Modal>
                )
            }
            
        </section> 
    )
};

export default BurgerConstructor;