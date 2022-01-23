import { useEffect } from 'react';

import { Loader,
         FeedOrdersList } from '../';

import { Link } from 'react-router-dom';

import { useAppSelector,
         useAppDispatch } from '../../services/hooks';

import { socketConnect,
         socketDisconnect } from '../../services/actions/feed';

import styles from './orders-history.module.css';

import { oSettings } from '../../config/config';

const OrdersHistory = () : JSX.Element => {

    const bLoadedIngredients =
             useAppSelector(store => store.burgerIngredients.bLoadedSuccessful);

    const { aOrders } = useAppSelector(store => store.feed.oFeedData)

    const bHasData = useAppSelector(store => store.feed.bHasData);
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if(bLoadedIngredients){
            dispatch(socketConnect(oSettings.oAPIWS.sUserOrders, true));
            return () => {
                dispatch(socketDisconnect());
            };
        }
    }, [ dispatch,
         bLoadedIngredients ]);
    
    return (
        <section className="pt-10">
            {
                ((!bLoadedIngredients) || !(bHasData)) ? (
                    <Loader message=
    "Загрузка данных или&nbsp;ожидание окончания выполнения операции&hellip;" />
                ) : (
                    <section className={`${styles.pane} `}>
                        {
                            (aOrders.length > 0) ? (
                         <FeedOrdersList aOrders={aOrders} bShowStatus={true} />
                            ) : (
                                <p className="text text_type_main-default">
                                    Вы&nbsp;пока не&nbsp;сделали
                                    ни&nbsp;одного заказа.
                                    <br />
                                    <br />
                                    <Link to="/">Закажите вкусный бургер!</Link>
                                </p>
                            )
                        }
                    </section>
                )
           }
       </section>
    );
};

export default OrdersHistory;