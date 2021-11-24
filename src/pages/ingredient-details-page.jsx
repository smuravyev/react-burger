import { useEffect } from 'react';

import { useDispatch,
         useSelector,
         shallowEqual } from 'react-redux';
         
import { useNavigate,
         useLocation,
         useParams } from 'react-router-dom';

import { IngredientDetails,
         SeparateIngredientDetails, 
         Modal,
         Loader,
         InvalidRouteMessage } from '../components';

import { CLEAR_CURRENT_INGREDIENT,
         SET_CURRENT_INGREDIENT } from '../services/actions/ingredient-details';

const IngredientDetailsPage = () => {
   const oCurrentIngredient = useSelector(store => store.currentIngredient);
   const bIsBusy = useSelector(store=> store.app.bIsBusy);
   const bLoadedIngredients =
                useSelector(store => store.burgerIngredients.bLoadedSuccessful);
   
   const aIngredients =
                      useSelector(store => store.burgerIngredients.aIngredients,
                                  shallowEqual);
   const dispatch =useDispatch();
   
   const {sID} = useParams();
   
   // We need to ensure that the ingredients are loaded!
   useEffect(() => {
       if((sID) &&
          (!(oCurrentIngredient)) &&
          (bLoadedIngredients)){
           
           //Yes! We don't have a set ingredient, so we should find it!
           let oIngredient = undefined;
           
           //We have THREE arrays in aIngredients. Look until found:
           for(let nCounter = 0;
               (nCounter < aIngredients.length) && (!(oIngredient));
               nCounter++){
               oIngredient = aIngredients[nCounter].aSet.find(oElement =>
                                                          oElement._id === sID);
           }
           //Found?
           if(oIngredient){
               //Set it!
               dispatch({ type: SET_CURRENT_INGREDIENT,
                          payload: { oIngredient : oIngredient }});
           }
        }
    }, [oCurrentIngredient,
        sID,
        dispatch,
        bLoadedIngredients,
        aIngredients]);

    const oLocation = useLocation();
   
    //If we have a background object, then we're modal
    const bIsModal = oLocation.state && oLocation.state.oBackground;

    const navigate = useNavigate();
    
    const closeModalHandler = () => {
        dispatch({ type : CLEAR_CURRENT_INGREDIENT})
        navigate("/"); 
    };

    return (
        <>
        { 
            oCurrentIngredient ? (
                bIsModal ? (
                    <Modal caption="Детали игредиента"
                           closer={closeModalHandler}>
                        <IngredientDetails />
                    </Modal>
                ) : (
                    <SeparateIngredientDetails />
                )
            ) : (
                 (bLoadedIngredients && (!(bIsBusy))) ? (
                      <InvalidRouteMessage />
                 ) : (
                      <Loader message="Загрузка" />
                 )
            )
        }
        </>
    );
};

export default IngredientDetailsPage;