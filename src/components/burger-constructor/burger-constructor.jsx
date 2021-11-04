import { useSelector,
         shallowEqual,
         useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';

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
   if((store.constructedBurger.oBun) &&
       (store.constructedBurger.oBun.price)){
        nResult = nResult + store.constructedBurger.oBun.price * 2;
        store.constructedBurger.aContent.forEach(oElement => {
            nResult = nResult + oElement.price;
        });
    }
    return nResult;
}; 

const BurgerConstructor = () => {
    const bIsBusy = useSelector(store => store.app.bIsBusy);                                     
    const { oBun,
            aContent } = useSelector(store => store.constructedBurger,
                                     shallowEqual);
    const nPrice = useSelector(priceSelector);
    
    const nOrderNumber = useSelector(store => store.orderDetails.nOrderNumber);
    
    const dispatch = useDispatch(); 

    const [{ bIsDragging } , refDrop] = useDrop({
        accept : (oBun._id) ? [ oIngredientDragTypes.sBun,
                                oIngredientDragTypes.sFilling ] :
                                oIngredientDragTypes.sBun,
                     // Accept all, if it'll be ingredient, then we'll drop it
                     // to the top, if there is a bun.
        collect: monitor => ({
            bIsDragging: monitor.canDrop() && (!oBun._id), // Only will set this
                                                           // status as a helper
                                                           // if we have no bun
        }),
        drop: (oData, monitor) => {
            return monitor.getDropResult() ||
                   { bDefaultDrop: true,
                     bBunPresent : (oBun && oBun._id) ? true : false};
        }
    }, [oBun._id,
        oIngredientDragTypes.sBun, oIngredientDragTypes.sFilling]);

    return (
        <section ref={refDrop} className=
      {`${styles.section}${bIsDragging ? ' ' + styles.target : ''} ml-5 pt-25`}>
            {
                (oBun && oBun._id) && (
                    <>
                        <ul className={`${styles.list} pr-4`}>
                            <li className={`${styles.item} pl-8 pb-4`}>
                                <ConstructorElement type="top"
                                                    isLocked={true}
                                                    text={oBun.name +" (верх)"}
                                                    price={oBun.price}
                                                    thumbnail={oBun.image} />
                            </li>
                        </ul>
                        <ul className={`${styles.list_scrollable} pr-2`}> 
                            {
                                // Any burger content content here? 
                                aContent && 
                                aContent.map((oElement, nIndex) => (
                                     <Filling oIngredient={oElement}
                                              key={oElement.sInnerID}
                                              bIsLast={(aContent.length >
                                                            (nIndex + 1))} /> ))
                            }
                        </ul>
                        <ul className={`${styles.list} pr-4`}>
                            <li className={`${styles.item} pt-4 pl-8`}>
                                <ConstructorElement type="bottom"
                                                    isLocked={true}
                                                    text={oBun.name + " (низ)"}
                                                    price={oBun.price}
                                                    thumbnail={oBun.image} />
                            </li>
                            {
                                (nPrice > 0) && ( 
                                    <li className=
                             {`${styles.item} ${styles.item_total} pt-10 pr-4`}>
                                    <p className=
                   {`${styles.total_price} pr-10 text text_type_digits-medium`}>
                                        {nPrice}&nbsp;<CurrencyIcon
                                                               type="primary" />
                                    </p>
                                    {
                                        bIsBusy && (
                                            <div className=
                                                      {styles.loader_container}>
                                                <Loader message="Загрузка" />
                                            </div>
                                        )
                                    }
                                    {
                                        (!bIsBusy) && (
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
                                )
                            } 
                        </ul>
                    </>
                )
            }
            {
                (nOrderNumber >= 0) && (
                    <Modal
                        closer={() => {
                            dispatch({ type: CLEAR_ORDER_NUMBER });
                            dispatch({ type: CLEAR_BURGER });
                        }}>
                        <OrderDetails />
                    </Modal>
                )
            }
            
        </section> 
    )
};

export default BurgerConstructor;