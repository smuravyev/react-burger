import { memo } from 'react';
import type { FC } from 'react';

import { FeedOrder } from '../';

import type { IOrderWithProcessedIngredientsProperties }
                                                       from '../../utils/types';

import styles from './feed-orders-list.module.css';

export interface IFeedOrdersListProps {
    aOrders : Array<IOrderWithProcessedIngredientsProperties>;
    bShowStatus? : boolean
};

const FeedOrdersList : FC<IFeedOrdersListProps> = 
                                              memo(({ aOrders,
                                                      bShowStatus = false}) => {
    
    return (
        <ul className={styles.orders__list}>
            {
                aOrders.map((oOrder, nIndex) => 
                    (
                        <FeedOrder key={oOrder._id}
                                   oOrder={oOrder}
                                   bShowStatus={bShowStatus}
                               sAdditionalClass = {nIndex > 0 ? " mt-4" : ""} /> 
                    )
                )
            }
        </ul>
    );
});

export default FeedOrdersList;