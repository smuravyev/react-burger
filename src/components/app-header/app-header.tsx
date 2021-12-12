import { AppHeaderLink } from '../';

import styles from './app-header.module.css';
    
const AppHeader = () : JSX.Element => {

    return (  
        <header className={`${styles.header} pt-4 pb-4`}>
            <nav className={styles.nav}>
                <ul className={styles.header__element}>
                   <AppHeaderLink exact to="/"
                                  sIconToRender="burger" 
                                  sAdditionalPaddingClasses=
                                                     "mr-2 pl-5 pt-5 pr-5 pb-5">
                       Конструктор
                   </AppHeaderLink>
                   <AppHeaderLink to="/list/"
                                  sIconToRender="list"
                                  sAdditionalPaddingClasses=
                                                     "mr-2 pl-5 pt-5 pr-5 pb-5">
                       Лента заказов
                   </AppHeaderLink>
                </ul>
                <ul className={styles.header__element}>
                    <AppHeaderLink exact to="/"
                                   sIconToRender="logo" />
                </ul>
                <ul className={styles.header__element}>
                   <AppHeaderLink to="/profile/"
                                  sIconToRender="profile"
                                  sAdditionalPaddingClasses=
                                                     "ml-2 pl-5 pt-5 pr-5 pb-5">
                       Личный кабинет
                   </AppHeaderLink>
                </ul>
            </nav>
       </header>
    );
};

export default AppHeader;