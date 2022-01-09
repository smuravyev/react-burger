import { useEffect } from 'react';

import { Loader,
         OrdersList,
         FeedOrdersList } from '../';

import { useAppSelector,
         useAppDispatch } from '../../services/hooks';

import { socketConnect,
         socketDisconnect } from '../../services/actions/feed';

import { oSettings } from '../../config/config';

import styles from './feed.module.css';

const Feed = () : JSX.Element => {

    const bIsBusy = useAppSelector(store => store.app.bIsBusy);

    const bLoadedIngredients =
             useAppSelector(store => store.burgerIngredients.bLoadedSuccessful);

    const { aOrders,
            aReadyOrders,
            aPendingOrders,
            nTotal,
            nTotalToday } = useAppSelector(store => store.feed.oFeedData)

    const bHasData = useAppSelector(store => store.feed.bHasData);
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(socketConnect(oSettings.oAPIWS.sAllOrders));
        return () => {
            dispatch(socketDisconnect());
        };
    }, [dispatch]);
    
    return (
         <section className={`${styles.section}`}>
             <h1 className=
                      {`${styles.header} pt-10 pb-5 text text_type_main-large`}>
                 Лента заказов
             </h1>
             {
                 (bIsBusy || (!bLoadedIngredients) || !(bHasData)) ? (
                     <Loader message="Загрузка данных&hellip;" />
                ) : (
                     <>
                         <section
                         className={`${styles.pane} ${styles.pane_scrollable}`}>
                             <FeedOrdersList aOrders={aOrders} />
                         </section>
                         <section className={`${styles.pane} ml-15`}>
                            <OrdersList aaNumbers={aReadyOrders}
                                        sCaption="Готовы:"
                                        sColor="cyan"
                                         />
                            <OrdersList aaNumbers={aPendingOrders}
                                        sCaption="В работе:"
                                        sColor="white"
                                         />
                            <h2 className="mt-15 text text_type_main-medium">
                                Выполнено за&nbsp;всё&nbsp;время:
                            </h2>
                            <article className=
                               {`${styles.shadow} text text_type_digits-large`}>
                                {nTotal}
                            </article>
                            <h2 className="mt-15 text text_type_main-medium">
                                Выполнено за&nbsp;сегодня:
                            </h2>
                            <article className=
                               {`${styles.shadow} text text_type_digits-large`}>
                                {nTotalToday}
                            </article>
                         </section>
                     </>
                )
             }
         </section>
    );
};

export default Feed;