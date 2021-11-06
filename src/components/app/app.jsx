import { useSelector } from 'react-redux';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ErrorMessage from '../error-message/error-message';

import styles from './app.module.css';  

import { oPages } from "../../utils/constants.js";

const App = () => {
    
    const { sCurrentPage } = useSelector((store) => store.app);

    return (
        <div className={styles.wrapper}>
            <AppHeader />
            <main className={styles.main}>
                { sCurrentPage === oPages.sBurgerPage && 
                    (
                     <DndProvider backend={HTML5Backend}>
                         <BurgerIngredients />
                         <BurgerConstructor />
                     </DndProvider>
                    )
                }
                <ErrorMessage />
            </main>
        </div>
    );
};
 
export default App;