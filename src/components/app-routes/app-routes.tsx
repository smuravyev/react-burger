import { Route,
         Routes,
         useLocation } from 'react-router-dom';
import type { Location as ILocation } from 'react-router-dom';

import { ConstructorPage,
         ForgotPasswordPage,
         IngredientDetailsPage,
         InvalidPage,
         LoginPage,
         OrderDetailsPage,
         ProfilePage,
         RegisterPage,
         ResetPasswordPage, 
         FeedPage } from '../../pages/';
         
import { ProtectedRoute } from '../';

import type { TBackgroundLocationState } from '../../utils/types'; 

const AppRoutes = () => {
    
    const oLocation : ILocation = useLocation();
    
    const oLocationState : TBackgroundLocationState = oLocation.state;
    
    const oBackground = (oLocationState && oLocationState.oBackground) || null;

    return (
        <>
            <Routes location={oBackground || oLocation}>
                <Route path="/" element={ ( <ConstructorPage /> ) } />
                <Route path="/login"
                       element={ ( <ProtectedRoute sFromWhom="authorized">
                                       <LoginPage />
                                   </ProtectedRoute> ) } />
                <Route path="/register"
                       element={ ( <ProtectedRoute sFromWhom="authorized">
                                       <RegisterPage />
                                   </ProtectedRoute> ) } />
                <Route path="/forgot-password"
                       element={ ( <ProtectedRoute sFromWhom="authorized">
                                       <ForgotPasswordPage />
                                   </ProtectedRoute> ) } />
                <Route path="/reset-password"
                       element={  ( <ProtectedRoute sFromWhom="authorized">
                                        <ResetPasswordPage />
                                    </ProtectedRoute> ) } />
                <Route path="/feed" element={  ( <FeedPage /> ) } />
                <Route path="/profile/*"
                       element={ ( <ProtectedRoute sFromWhom="unauthorized"
                                                   bSavePathToStore={true}
                                                   sRedirectTo="/login/">
                                       <ProfilePage />
                                   </ProtectedRoute> ) } />
                {
                    (!oBackground) && (
                        <>
                            <Route path="/ingredients/:sID"
                                   element={ ( <IngredientDetailsPage />) } />
                            <Route path="/feed/:sID"
                                   element={ ( <OrderDetailsPage />) } />
                        </>
                    )
                }
                <Route path="*" element={ < InvalidPage /> } />
            </Routes>
            {
                oBackground && (
                    <Routes>
                        <Route path="/ingredients/:sID"
                               element={( <IngredientDetailsPage />) } />
                        <Route path="/feed/:sID"
                               element={( <OrderDetailsPage />) } />
                        <Route path="*" element= {null} />
                    </Routes>
                )
            }
        </>
    );
};

export default AppRoutes;