import { Route,
         Routes,
         useLocation } from 'react-router-dom';

import { ConstructorPage,
         ForgotPasswordPage,
         IngredientDetailsPage,
         InvalidPage,
         LoginPage,
         ProfilePage,
         RegisterPage,
         ResetPasswordPage } from '../../pages/';
         
import { ProtectedRoute } from '../';


const AppRoutes = () => {
    
    const oLocation = useLocation();
    
    const oBackground = (oLocation.state && oLocation.state.oBackground) || null;

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
                <Route path="/profile/*"
                       element={ ( <ProtectedRoute sFromWhom="unauthorized"
                                                   bSavePathToStore={true}
                                                   sRedirectTo="/login/">
                                       <ProfilePage />
                                   </ProtectedRoute> ) } />
                {
                    (!oBackground) && (
                        <Route path="/ingredients/:sID"
                               element={ ( <IngredientDetailsPage />) } />
                    )
                }
                <Route path="*" element={ < InvalidPage /> } />
            </Routes>
            {
                oBackground && (
                    <Routes>
                        <Route path="/ingredients/:sID"
                               element={( <IngredientDetailsPage />) } />
                        <Route path="*" element= {() => null} />
                    </Routes>
                )
            }
        </>
    );
};

export default AppRoutes;