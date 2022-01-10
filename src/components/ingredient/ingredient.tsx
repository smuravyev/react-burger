import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { useDrag } from 'react-dnd';
import { useAppDispatch } from '../../services/hooks';

import { addIngredient,
         addIngredientBefore,
         addIngredientAfter,
         setBunAction} from '../../services/actions/burger-constructor';

import { Counter, 
         CurrencyIcon }
                      from '@ya.praktikum/react-developer-burger-ui-components';

import { oIngredientTypes,
         oIngredientDragTypes } from '../../utils/constants';

import { IDraggableIngredient } from '../../utils/types';

import styles from './ingredients.module.css'; 

export type TDropResult = {
    bDefaultDrop : boolean;
    sDropPosition? : "top" | "bottom";
    sTargetID? : "string";
} | null;

export interface IngredientProps  {
    onClickHandler : (eEvent: SyntheticEvent) => void;
    oIngredient : IDraggableIngredient;
    nCounter? : number
};

const Ingredient = ({ onClickHandler,
                      oIngredient,
                      nCounter = 0 } : IngredientProps) : JSX.Element => {
    const [bIsMouseDown, setBIsMouseDown] = useState(false);
    
    const dispatch = useAppDispatch();

    const [{bIsDrag}, refDrag] = useDrag({
        type: oIngredient.sDragType || "",
        item: () => {
            setBIsMouseDown(true);
               return {oIngredient : oIngredient };
        },
        collect: monitor => ({
            bIsDrag: monitor.isDragging()
        }),
        end: ({ oIngredient }, monitor) => {
            setBIsMouseDown(false);
            const oResult : TDropResult = monitor.getDropResult();
            if(oResult){
                if(oResult.bDefaultDrop){
                    if(oIngredient.sDragType === oIngredientDragTypes.sBun){
                        dispatch(setBunAction(oIngredient));
                    }
                    else{
                        dispatch(addIngredient({ oIngredient : oIngredient }));
                    }
                }
                else{
                    if(oResult.sDropPosition === 'top'){
                        dispatch(addIngredientBefore(oIngredient,
                                                     oResult.sTargetID));
                    }
                    else{
                        dispatch(addIngredientAfter(oIngredient,
                                                    oResult.sTargetID));
                    }
                }
            }
        }
    }, [oIngredient.sDragType, oIngredient]);

    return (
         <li draggable="true" ref={refDrag} className=
 {`${styles.component} ${(bIsDrag ? styles.dragging + ' ' : '')}ml-4 mr-2 mb-8`}
             onClick={onClickHandler}>
             {
                 ((nCounter) > 0 && (!(bIsMouseDown))) && (
                     <Counter count={nCounter} size="default" />
                 )
             }
             <img src={oIngredient.image} alt={oIngredient.name} />
             <p className={`${styles.price} text text_type_digits-default`}
                title={oIngredient.type === oIngredientTypes.oBun.sName
                       ? "Цена представлена за половинку булки. " +
                         "В заказе может быть только целая булка " + 
                         "(верхняя и нижняя части)." : ""}>
                 <span className=
                  {styles.digits}>{oIngredient.price}</span>&nbsp;<CurrencyIcon
                                                               type="primary" />
             </p>
             <p className={`${styles.name} mt-1 text text_type_main_small`}>
                 {oIngredient.name}
             </p>
         </li>
    );
};

export default Ingredient;