import { memo } from 'react';

import { IngredientFeedImage } from '../';

import { nMaxIngredientsToShowInOrder } from '../../utils/constants';

import type { FC } from 'react';

import type { IProcessedForFeedIngredient } from '../../utils/types';

export interface IOrderIngredientsListProps {
    aIngredients : Array<IProcessedForFeedIngredient>;
};

const OrderIngredientsList : FC<IOrderIngredientsListProps> = 
                                                 memo(({ aIngredients }) => {
    // The number of the ingredients won't fit into the template
    const nPlusIngredients : number =
                             aIngredients.length - nMaxIngredientsToShowInOrder;

    const nMaxIngredientIndex : number =  nPlusIngredients - 1;
    return (
        <> 
            {
                aIngredients.map((oIngredient, nIndex) => {
                    if((aIngredients.length < nMaxIngredientsToShowInOrder) ||
                       (nIndex > nMaxIngredientIndex)){
                        return (
                            <IngredientFeedImage key={nIndex}
                                                 sName={oIngredient.name}
                                                 sImageURL={oIngredient.image}
              sCoverText={((aIngredients.length > nMaxIngredientsToShowInOrder)
                          && (nIndex === nPlusIngredients)) ?
                          "+" + String(nPlusIngredients) : ""} />
                        )
                    }
                    else{
                        return null;
                    }
                })
            }
        </>
    )
});

export default OrderIngredientsList;