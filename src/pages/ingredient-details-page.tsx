import { useEffect } from 'react';

import { shallowEqual } from 'react-redux';
         
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

import { useAppDispatch,
         useAppSelector } from '../services/hooks';

import type { IIngredient } from '../utils/types'; 

const IngredientDetailsPage = () : JSX.Element => {

   const oCurrentIngredient = useAppSelector(store => store.currentIngredient);
   
   //boolean, ok
   const bIsBusy = useAppSelector(store => store.app.bIsBusy);
   
   //boolean, ok
   const bLoadedIngredients =
             useAppSelector(store => store.burgerIngredients.bLoadedSuccessful);
   const aIngredients =
                   useAppSelector(store => store.burgerIngredients.aIngredients,
                                  shallowEqual);

   const dispatch = useAppDispatch();
   
   //sID = string | undefined, already, automatically, that's we needed
   const { sID } = useParams();
   
   // We need to ensure that the ingredients are loaded!
   useEffect(() => {
       if((sID) &&
          (!(oCurrentIngredient)) &&
          (bLoadedIngredients)){
           
           //Yes! We don't have a set ingredient, so we should find it!
           let oIngredient : IIngredient | undefined = undefined;
           
           //We have THREE arrays in aIngredients. Look until found:
           for(let nCounter : number = 0;
               (nCounter < aIngredients.length) && (!(oIngredient));
               nCounter++){
               oIngredient = aIngredients[nCounter].aSet.find((oElement) =>
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
    const bIsModal = oLocation?.state?.oBackground ? true : false;

    const navigate = useNavigate();
    
    const closeModalHandler = () : void => {
        navigate("/");
        dispatch({ type : CLEAR_CURRENT_INGREDIENT});
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