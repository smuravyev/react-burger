import { memo } from 'react';

import type { FC } from 'react';

import styles from './orders-list.module.css';

import { formatOrderNumber } from '../../utils/functions';

export interface IOrdersListProps {
    aaNumbers : number[][];
    sCaption? : string;
    sItemClassName? : string;
    sSectionClassName? : string;
    sColor? : "white" | "cyan";
};

const OrdersList : FC<IOrdersListProps> = memo(({ aaNumbers,
                                                  sCaption = "",
                                                  sSectionClassName = "",
                                                  sColor = "white"}) => {
    return (
        <section
     className={styles.list +
                ((sSectionClassName === "")? " " + sSectionClassName : "")}>
            <h2 className="mb-6 text text_type_main-medium">
                {sCaption}
            </h2>
            {
                aaNumbers.map((aColumnData, nIndex) => (
                    <ul className={styles.list__column} key={nIndex}>
                        {
                            aColumnData.map((nNumber, nColumnIndex) => (
                                <li key={nColumnIndex}
         className={`${styles.list__column__item} text text_type_digits-default`
                    + ((nColumnIndex === aColumnData.length - 1) ? '' : ' mb-2') 
                    + ((sColor === "white") ?
                          "" :
                          " " + styles.list__column__item_cyan)}>
                                    {formatOrderNumber(nNumber)}
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </section>
    );
});

export default OrdersList;