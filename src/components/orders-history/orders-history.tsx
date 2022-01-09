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

    const bIsBusy = useAppSelector(store => store.app.bIsBusy);

    const bLoadedIngredients =
             useAppSelector(store => store.burgerIngredients.bLoadedSuccessful);

    const { aOrders } = useAppSelector(store => store.feed.oFeedData)

    const bHasData = useAppSelector(store => store.feed.bHasData);
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(socketConnect(oSettings.oAPIWS.sUserOrders, true));
        return () => {
            dispatch(socketDisconnect());
        };
    }, [dispatch]);
    
    return (
        (bIsBusy || (!bLoadedIngredients) || !(bHasData)) ? (
            <Loader message="Загрузка данных&hellip;" />
        ) : (
            <section className={`${styles.pane} `}>
                {
                    (aOrders.length > 0) ? (
                        <FeedOrdersList aOrders={aOrders} />
                    ) : (
                        <p className="text text_type_main-default">
                            Вы&nbsp;пока не&nbsp;сделали ни&nbsp;одного заказа.
                            <br />
                            <br />
                            <Link to="/">Закажите вкусный бургер!</Link>
                        </p>
                    )
                }
            </section>
        )
    );
};

export default OrdersHistory;