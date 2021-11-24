import { useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { AppHeader,
         ErrorMessage,
         AppRoutes } from '../';
         
import { getIngredients } from '../../services/actions/burger-ingredients';

import { requestAuthorizationCheck }
                                    from '../../services/actions/authorization';

import styles from './app.module.css';

const App = () => {
    
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        //Every time you eat...
        // We need the ingredients list
        dispatch(getIngredients());
        // And the authorization data
        dispatch(requestAuthorizationCheck());
        // Читайте "ТВ-Парк", и ваши волосы будут мягкими и шелковистыми 
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            <BrowserRouter>
                <AppHeader />
                <main className={styles.main}>
                    <AppRoutes />
                    <ErrorMessage />
                </main>
            </BrowserRouter>
        </div>
    );
};
 
export default App;