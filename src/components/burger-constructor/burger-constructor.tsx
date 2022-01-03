import { useEffect,
         useCallback } from 'react';

import { useSelector,
         shallowEqual} from 'react-redux';
         
import type { TRootState } from '../../services/store';

import { useAppDispatch } from '../../services/hooks';
         
import { useLocation,
         useNavigate } from 'react-router-dom';

import { useDrop } from 'react-dnd';

import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { ConstructorElement, 
         Button,
         CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { Loader,
         Filling, 
         Modal,
         OrderDetails } from '../';

import { CLEAR_ORDER_NUMBER,
         sendOrder } from '../../services/actions/order-details';
import { SET_RETURN_PATH } from '../../services/actions/authorization';
import { CLEAR_BURGER } from '../../services/actions/burger-constructor';

import { oIngredientDragTypes,
         oKeyCodes } from '../../utils/constants';

import styles from  './burger-constructor.module.css';

const priceSelector = (store : TRootState) : number => {
    let nResult : number = 0;
   if((store.constructedBurger.present.oBun) &&
       (store.constructedBurger.present.oBun.price)){
        nResult = nResult + store.constructedBurger.present.oBun.price * 2;
    }
    store.constructedBurger.present.aContent.forEach(oElement => {
        nResult = nResult + oElement.price;
    });
    return nResult;
};

const BurgerConstructor = () : JSX.Element => {
    const bIsBusy = useSelector((store : TRootState) => store.app.bIsBusy);     
    const bIsOrderRequesting =
          useSelector((store : TRootState) => store.orderDetails.bIsRequesting);                                
    const { oBun,
            aContent } = useSelector((store : TRootState) =>
                                                store.constructedBurger.present,
                                                shallowEqual);
    const nPrice = useSelector(priceSelector);
    
    const nOrderNumber = useSelector((store : TRootState) =>
                                               store.orderDetails.nOrderNumber);
    
    const dispatch = useAppDispatch(); 
    
    const navigate = useNavigate();
    
    const location = useLocation();

    const bIsAuthorized = useSelector((store : TRootState) =>
                                                store.authorization.bIsUserSet);

    const [{ bNeedHelper } , refDrop] = useDrop({
        accept : bIsOrderRequesting ? "" : [ oIngredientDragTypes.sBun,
                                             oIngredientDragTypes.sFilling ],
        collect: monitor => ({
            bNeedHelper: monitor.canDrop() && (!oBun?._id)
                         && (aContent.length === 0) //Show the helper if nothing
                                                    //added
        }),
        drop: (_, monitor) => {
            return monitor.getDropResult() ||
                   { bDefaultDrop: true };
        }
    }, [ oBun?._id,
         bIsOrderRequesting,
         aContent.length,
         oIngredientDragTypes.sBun,
         oIngredientDragTypes.sFilling ]);
         
    const keyboardHandler =  useCallback((eEvent : KeyboardEvent) : void => {
        if(!(bIsOrderRequesting)){
            if(eEvent.ctrlKey || eEvent.metaKey){
                switch (eEvent.key){ 
                    case oKeyCodes.sUndo: {
                        dispatch(UndoActionCreators.undo());
                        eEvent.preventDefault();
                        break;
                    }
                    case oKeyCodes.sRedo: {
                        dispatch(UndoActionCreators.redo());
                        eEvent.preventDefault();
                        break;
                    }
                    default: // Do nothing
                }
            }
        }
    }, [dispatch, bIsOrderRequesting]);

    useEffect(() => {
        document.addEventListener("keydown", keyboardHandler);
        return () => {
            document.removeEventListener("keydown", keyboardHandler)
        }
    }, [ keyboardHandler ]);
    
    const clickHandler = useCallback(() => {
        if(bIsAuthorized){
            dispatch(sendOrder());
        }
        else{
            dispatch({type : SET_RETURN_PATH,
                      payload : { sReturnPath : location.pathname }});
            navigate("/login", { replace : true });
        }
    }, [ navigate,
         dispatch,
         bIsAuthorized,
         location.pathname]);
    
    let sSectionClassName : string =
        `${styles.section}${bNeedHelper ? ' ' + styles.target : ''} ml-5 pt-25`;
    if(bIsOrderRequesting){
        sSectionClassName = `${sSectionClassName} ${styles.busy}`;  
    }

    return (
        <section ref={refDrop} className={sSectionClassName}>
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
                                              nIndex={nIndex}
                                              bIsNotLast={(aContent.length >
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
                                    onClick={clickHandler}>
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