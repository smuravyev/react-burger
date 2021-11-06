import { useRef,
         useState} from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import { ConstructorElement, 
         DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
         
import { REMOVE_INGREDIENT,
         moveIngredientBefore,
         moveIngredientAfter } from '../../services/actions/burger-constructor';

import { oIngredientDragTypes } from '../../utils/constants';

import styles from './filling.module.css';

const Filling = ({oIngredient, bIsLast}) => {
    
    const [sDropPosition, setSDropPosition] = useState('');

    const dispatch = useDispatch();
    
    const refThis = useRef(null);

    const [{ bIsDragging }, refDrag] = useDrag({
        item: ({oIngredient}),
        type: oIngredientDragTypes.sExistingFilling,
        collect: monitor => ({
            bIsDragging: monitor.isDragging()
        }),
    }, [oIngredientDragTypes.sExistingFilling]);
    
    const [{bIsOver}, refDrop] = useDrop({
        accept : [oIngredientDragTypes.sExistingFilling,
                  oIngredientDragTypes.sFilling],
        
        collect: monitor => ( {bIsOver : monitor.isOver()} ),

        //We need to show the customer where he is dropping item
        hover: (_, monitor) => {
            if(refThis.current){
                const oDimensions = refThis.current.getBoundingClientRect();
                const oCursor = monitor.getClientOffset();
                if((oDimensions.top <= oCursor.y) &&
                   (oCursor.y <= (oDimensions.top - refThis.current.style.marginTop + oDimensions.height / 2))){
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

        drop: (oDropData) => {
            // If there is an existing component in the burger,
            // it SHOULD have sInnerID. So now we are MOVING it
            if(oDropData.oIngredient.sInnerID){
                if(oDropData.oIngredient.sInnerID !== oIngredient.sInnerID){
                    if(sDropPosition === 'top'){
                        dispatch(
                            moveIngredientBefore(oDropData.oIngredient.sInnerID,
                                                 oIngredient.sInnerID));                                         
                    }
                    else{
                        dispatch(
                            moveIngredientAfter(oDropData.oIngredient.sInnerID,
                                                oIngredient.sInnerID));                                         
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
        oIngredient.sInnerID]);

    // https://www.meme-arsenal.com/memes/abdec0f730ff8b5ff4b3f1ff1e367fcb.jpg
    refDrag(refDrop(refThis)); // Combining refs!
    
    //Construct the long list of classes
    let sLiClassName = `${styles.item} ${styles.item_moveable} pl-8`
    bIsLast && (sLiClassName = `${sLiClassName} pb-4`);
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
                                 {() => dispatch({ type : REMOVE_INGREDIENT,
                                                   payload :
                                                       { sID :
                                                   oIngredient.sInnerID } })} />
        </li>
    );
}

Filling.propTypes = {
    oIngredient: PropTypes.shape({
        sInnerID : PropTypes.string.isRequired,
        _id : PropTypes.string.isRequired, 
        name : PropTypes.string,
        price : PropTypes.number,
        image : PropTypes.string //Other parameters will be there, not required 
    }),
    bIsLast : PropTypes.bool 
};

export default Filling;