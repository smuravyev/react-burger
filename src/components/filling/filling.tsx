import { useRef,
         useState} from 'react';

import { useAppDispatch,
         useAppSelector } from '../../services/hooks';

import { useDrag, useDrop } from 'react-dnd';

import { ConstructorElement, 
         DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
         
import { REMOVE_INGREDIENT,
         moveIngredientBefore,
         moveIngredientAfter } from '../../services/actions/burger-constructor';

import { oIngredientDragTypes } from '../../utils/constants';

import { IDraggableIngredient } from '../../utils/types';

import styles from './filling.module.css';

export interface IFillingProps  {
    oIngredient : IDraggableIngredient;
    nIndex : number;
    bIsNotLast : boolean;
};

const Filling =
          ({oIngredient, nIndex, bIsNotLast} : IFillingProps) : JSX.Element => {
    
    const [sDropPosition, setSDropPosition] =
                          useState<"top" | "bottom" | "undefined">("undefined");

    const dispatch = useAppDispatch();
    
    const bIsBusy = useAppSelector(store => store.orderDetails.bIsRequesting);
    
    const refThis = useRef<HTMLLIElement>(null);

    const [{ bIsDragging }, refDrag] = useDrag({
        item: ({nIndex}),
        type: oIngredientDragTypes.sExistingFilling,
        collect: monitor => ({
            bIsDragging: monitor.isDragging()
        }),
    }, [oIngredientDragTypes.sExistingFilling, nIndex]);
    
    const [{bIsOver}, refDrop] = useDrop({
        accept : bIsBusy ? "" : [ oIngredientDragTypes.sExistingFilling,
                                  oIngredientDragTypes.sFilling],
        
        collect: monitor => ( {bIsOver : monitor.isOver()} ),

        //We need to show the customer where he is dropping item
        hover: (_, monitor) => {
            if(refThis.current){
                const oDimensions = refThis.current.getBoundingClientRect();
                const oCursor = monitor.getClientOffset();
                const nY = (oCursor === null) ? 0 : oCursor.y;
                if((oDimensions.top <= nY) &&
                   (nY <= (oDimensions.top +
                           oDimensions.height / 2))){
                    if(sDropPosition !== 'top'){ // We MUST check current status
                                                 // to prevent multiple renders
                        setSDropPosition('top');
                    }
                }
                else{
                    if(sDropPosition !== 'bottom'){ // Same there
                        setSDropPosition('bottom');
                    }
                }
            }
        },

        drop: (oDropData : IDraggableIngredient) => {
            // If there is an existing component in the burger,
            // it SHOULD have nIndex. So now we are MOVING it
            if(oDropData.nIndex !== undefined){
                if(oDropData.nIndex !== nIndex){
                    if(sDropPosition === 'top'){
                        dispatch(moveIngredientBefore(oDropData.nIndex,
                                                      nIndex));
                    }
                    else{
                        dispatch(moveIngredientAfter(oDropData.nIndex,
                                                     nIndex));
                    }
                }
            }
            else{
                // We need just return the data to proceed in Ingredient,
                // because we are dropping inexisting component and should
                // handle it:
                return { bDefaultDrop: false,
                         sTargetID: oIngredient.sInnerID,
                         sDropPosition: sDropPosition};
            }
        }
    }, [oIngredientDragTypes.sExistingFilling,
        oIngredientDragTypes.sFilling,
        sDropPosition,
        nIndex,
        bIsBusy]);

    // https://www.meme-arsenal.com/memes/abdec0f730ff8b5ff4b3f1ff1e367fcb.jpg
    refDrag(refDrop(refThis)); // Combining refs!
    
    //Construct the long list of classes
    let sLiClassName : string = `${styles.item} ${styles.item_moveable} pl-8`;
    bIsNotLast && (sLiClassName = `${sLiClassName} pb-4`);
    bIsDragging && (sLiClassName = `${sLiClassName} ${styles.dragging}`);
    if(bIsOver){
        switch(sDropPosition){
            case 'top':
                sLiClassName = `${sLiClassName} ${styles.hover_top}`;
                break;
            case 'bottom':
                sLiClassName = `${sLiClassName} ${styles.hover_bottom}`;
                break;
            default: //Do nothing
        }
    }

    return(
        <li ref={refThis}
            className={sLiClassName} draggable="true">
            <div className={styles.handler}>
                <DragIcon type="primary" />
            </div>
            <ConstructorElement isLocked={false} text={oIngredient.name}
                                price={oIngredient.price}
                                thumbnail={oIngredient.image}
                                handleClose=
                                 {() => {dispatch({ type : REMOVE_INGREDIENT,
                                                   payload :
                                                       { sID :
                                          oIngredient?.sInnerID || '' } })}} />
        </li>
    );
}

export default Filling;