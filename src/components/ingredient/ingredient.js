import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addIngredient,
         addIngredientBefore,
         addIngredientAfter,
         SET_BUN} from '../../services/actions/burger-constructor';

import { Counter, 
         CurrencyIcon }
                      from '@ya.praktikum/react-developer-burger-ui-components';

import { oIngredientTypes,
         oIngredientDragTypes } from '../../utils/constants';

import styles from './ingredients.module.css';

const Ingredient = ({ onClickHandler,
                      oIngredient,
                      nCounter = 0 }) => {
    const [bIsMouseDown, setBIsMouseDown] = useState(false);
    
    const dispatch = useDispatch();

    const [{bIsDrag}, refDrag] = useDrag({
        type: oIngredient.sDragType,
        item: () => {
            setBIsMouseDown(true);
               return {oIngredient : oIngredient };
        },
        collect: monitor => ({
            bIsDrag: monitor.isDragging()
        }),
        end: ({ oIngredient }, monitor) => {
            setBIsMouseDown(false);
            const oResult = monitor.getDropResult();
            if(oResult){
                if(oResult.bDefaultDrop){
                    if(oIngredient.sDragType === oIngredientDragTypes.sBun){
                        dispatch({ type : SET_BUN,
                                   payload : { oBun: oIngredient }});
                    }
                    else{
                        if(oResult.bBunPresent){
                            dispatch(addIngredient({ oIngredient :
                                                                oIngredient }));
                        }
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
         <li draggable="draggable" ref={refDrag} className=
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

Ingredient.propTypes = {
    onClickHandler : PropTypes.func,
    nCounter : PropTypes.number,
    oIngredient : PropTypes.shape({
        name : PropTypes.string,
        image : PropTypes.string,
        type : PropTypes.oneOf([oIngredientTypes.oBun.sName,
                                oIngredientTypes.oMain.sName,
                                oIngredientTypes.oSauce.sName]),
        price : PropTypes.number,
        _id : PropTypes.string.isRequired,
        sDragType : PropTypes.oneOf([ oIngredientDragTypes.sBun,
                                      oIngredientDragTypes.sFilling ])
                                                                    .isRequired
    }) // Other properties are optional and not used there 
};

export default Ingredient;