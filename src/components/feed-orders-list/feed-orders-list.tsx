import { memo } from 'react';
import type { FC } from 'react';

import { FeedOrder } from '../';

import type { IOrderWithProcessedIngredientsProperties }
                                                       from '../../utils/types';

import styles from './feed-orders-list.module.css';

export interface IFeedOrdersListProps {
    aOrders : Array<IOrderWithProcessedIngredientsProperties>;
};

const FeedOrdersList : FC<IFeedOrdersListProps> =  memo(({ aOrders }) => {
    
    return (
        <ul className={styles.orders__list}>
            {
                aOrders.map((oOrder, nIndex) => 
                    (
                        <FeedOrder key={oOrder._id}
                                   oOrder={oOrder}
                               sAdditionalClass = {nIndex > 0 ? " mt-4" : ""} /> 
                    )
                )
            }
        </ul>
    );
});

export default FeedOrdersList;