import { useEffect,
         useState } from 'react';

import { shallowEqual } from 'react-redux';
         
import { useNavigate,
         useLocation,
         useParams } from 'react-router-dom';

import { Modal,
         Loader,
         InvalidRouteMessage,
         OrderSummary } from '../components';
         
import { socketConnect,
         socketDisconnect } from '../services/actions/feed';

import { oSettings } from '../config/config';

import { formatOrderNumber } from '../utils/functions';

import { useAppSelector,
         useAppDispatch } from '../services/hooks';

import type { IOrderWithProcessedIngredientsProperties } from '../utils/types'; 

const OrderDetailsPage = () : JSX.Element => {

    const [oCurrentOrder, setOCurrentOrder ] =
    useState<IOrderWithProcessedIngredientsProperties | null | undefined>(null);
   
    const bIsBusy = useAppSelector(store => store.app.bIsBusy);
   
    const bLoadedIngredients =
             useAppSelector(store => store.burgerIngredients.bLoadedSuccessful);

    const aOrders = useAppSelector(store => store.feed.oFeedData.aOrders,
                                   shallowEqual)

    const bHasData = useAppSelector(store => store.feed.bHasData);
    
    const dispatch = useAppDispatch();

    //sID = string | undefined, already, automatically, that's we needed
    const { sID } = useParams();
   
    // We need to ensure that the ingredients are loaded!
    useEffect(() => {
        if((sID) &&
           (bLoadedIngredients) &&
           (bHasData)){
           setOCurrentOrder(aOrders.find(oOrder => oOrder._id === sID));
       }
    }, [ sID,
         oCurrentOrder,
         bLoadedIngredients,
         aOrders,
         bHasData]);

    useEffect(() => {
        dispatch(socketConnect(oSettings.oAPIWS.sAllOrders));
        return () => {
            dispatch(socketDisconnect());
        };
    }, [dispatch]);
    
    const oLocation = useLocation();
   
    //If we have a background object, then we're modal
    const bIsModal = oLocation?.state?.oBackground ? true : false;

    const navigate = useNavigate();
    
    const closeModalHandler = () : void => {
        navigate("/feed/");
    };

    return (
        <>
        { 
            oCurrentOrder ? (
                bIsModal ? (
                    <Modal
                         caption={"#" + formatOrderNumber(oCurrentOrder.number)}
                         captionIsNumeric={true}
                         closer={closeModalHandler}>
                        <OrderSummary {...oCurrentOrder} />
                    </Modal>
                ) : (
                    <section className="pt-20">
                        <h1 className="text text_type_digits-default pb-10">
                            #{formatOrderNumber(oCurrentOrder.number)}
                        </h1>
                        <OrderSummary {...oCurrentOrder} />
                    </section>
                )
            ) : (
                 ((oCurrentOrder === undefined) && 
                  bLoadedIngredients &&
                  bHasData && 
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

export default OrderDetailsPage;