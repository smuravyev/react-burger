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
        // We need the ingredients list at least on two routes, so why don't
        // ask for it now...
        dispatch(getIngredients());
        // And the authorization data
        dispatch(requestAuthorizationCheck());
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