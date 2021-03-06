import { useEffect,
         useCallback } from 'react';

import { shallowEqual } from 'react-redux';

import { useAppDispatch,
         useAppSelector } from '../../services/hooks';
         
import { useLocation,
         useNavigate } from 'react-router-dom';
         
import { TRootState } from '../../services/store';

import { useDrop } from 'react-dnd';

import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { ConstructorElement, 
         Button,
         CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { Loader,
         Filling, 
         Modal,
         OrderDetails } from '../';

import { clearOrderNumberAction,
         sendOrder } from '../../services/actions/order-details';
import { setReturnPathAction } from '../../services/actions/authorization';
import { clearBurgerAction } from '../../services/actions/burger-constructor';

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
    const bIsBusy = useAppSelector(store => store.app.bIsBusy);     
    const bIsOrderRequesting =
                      useAppSelector(store => store.orderDetails.bIsRequesting);
    const { oBun,
            aContent } = useAppSelector(store =>
                                                store.constructedBurger.present,
                                                shallowEqual);
    const nPrice = useAppSelector<number>(priceSelector);
    
    const nOrderNumber = useAppSelector(store =>
                                               store.orderDetails.nOrderNumber);
    const bIsAuthorized = useAppSelector(store =>
                                                store.authorization.bIsUserSet);
    const dispatch = useAppDispatch(); 
    
    const navigate = useNavigate();
    
    const location = useLocation();
    
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
            dispatch(setReturnPathAction(location.pathname));
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
                                                text={oBun.name +" (????????)"}
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
                                                text={oBun.name + " (??????)"}
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
                                <Loader message="????????????????" />
                            </div>
                        )
                    }
                    {
                        (!(oBun && oBun._id)) && (
                            <div className={styles.loader_container}>
                                ????????????????, ????????????????????, ??????????
                            </div>
                        )
                    }
                    {
                        ((!bIsBusy) && oBun && oBun._id) && (
                            <Button type="primary"
                                    size="medium"
                                    onClick={clickHandler}>
                                ???????????????? ??????????
                            </Button>
                        )
                    }
                </li>
            </ul>
            {
                (nOrderNumber >= 0) && (
                    <Modal
                        closer={() => {
                            dispatch(clearOrderNumberAction());
                            dispatch(clearBurgerAction());
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