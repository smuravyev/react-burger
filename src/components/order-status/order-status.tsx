import { memo } from 'react';

import type { FC } from 'react';

import type { TOrderStatus } from '../../utils/types';

import { oStatusLabels,
         oOrderTypes } from '../../utils/constants';

import styles from  './order-status.module.css';

export interface IOrderStatusProps {
    readonly sStatus : TOrderStatus,
};

const OrderStatus : FC<IOrderStatusProps> = memo(({ sStatus }) => {
    console.log(sStatus);
    return (
        <span className={sStatus === oOrderTypes.sCancelled ? styles.cancelled : 
                         sStatus === oOrderTypes.sCreated ? styles.created :
                         sStatus === oOrderTypes.sDone ? styles.done :
                         styles.pending}>{oStatusLabels[sStatus]}</span>
    );
});

export default OrderStatus;