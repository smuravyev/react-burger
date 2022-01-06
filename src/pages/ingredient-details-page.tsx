import { useEffect,
         useState } from 'react';

import { shallowEqual } from 'react-redux';
         
import { useNavigate,
         useLocation,
         useParams } from 'react-router-dom';

import { IngredientDetails, 
         Modal,
         Loader,
         InvalidRouteMessage } from '../components';

import { useAppSelector } from '../services/hooks';

import type { IIngredient,
              IPureIngredient } from '../utils/types'; 

const IngredientDetailsPage = () : JSX.Element => {

   const [oCurrentIngredient, setOCurrentIngredient] =
                             useState<IPureIngredient | null | undefined>(null);
   
   //boolean, ok
   const bIsBusy = useAppSelector(store => store.app.bIsBusy);
   
   //boolean, ok
   const bLoadedIngredients =
             useAppSelector(store => store.burgerIngredients.bLoadedSuccessful);
   const aIngredients =
                   useAppSelector(store => store.burgerIngredients.aIngredients,
                                  shallowEqual);

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
              setOCurrentIngredient({ carbohydrates : oIngredient.carbohydrates,
                                      calories : oIngredient.calories,
                                      name : oIngredient.name,
                                      proteins : oIngredient.proteins,
                                      fat : oIngredient.fat,
                                      image_large : oIngredient.image_large });
           }
           else{
               // Undefined is a mark that we all done, but did not found
               // anything
               setOCurrentIngredient(undefined);
           }
        }
    }, [oCurrentIngredient,
        sID,
        bLoadedIngredients,
        aIngredients]);

    const oLocation = useLocation();
   
    //If we have a background object, then we're modal
    const bIsModal = oLocation?.state?.oBackground ? true : false;

    const navigate = useNavigate();
    
    const closeModalHandler = () : void => {
        navigate("/");
    };

    return (
        <>
        { 
            oCurrentIngredient ? (
                bIsModal ? (
                    <Modal caption="Детали игредиента"
                           closer={closeModalHandler}>
                        <IngredientDetails {...oCurrentIngredient} />
                    </Modal>
                ) : (
                    <section className="pt-20 mt-15">
                        <h1 className="text text_type_main-large">
                            Детали ингредиента
                        </h1>
                        <IngredientDetails {...oCurrentIngredient} />
                    </section>
                )
            ) : (
                 ((oCurrentIngredient === undefined) && 
                  bLoadedIngredients &&
                  (!(bIsBusy))) ? (
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