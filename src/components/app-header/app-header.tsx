import { AppHeaderLink } from '../';

import styles from './app-header.module.css';
    
const AppHeader = () : JSX.Element => {

    return (
        <header className={`${styles.header} pt-4 pb-3`}>
            <section className={styles.section}>
                <nav className={styles.nav}>
                     <ul className={styles.header__element}>
                       <AppHeaderLink exact to="/"
                                      sIconToRender="burger" 
                                      sAdditionalPaddingClasses=
                                                     "mr-2 pl-5 pt-3 pr-5 pb-4">
                           Конструктор
                       </AppHeaderLink>
                       <AppHeaderLink to="/feed/"
                                      sIconToRender="list"
                                      sAdditionalPaddingClasses=
                                                     "mr-2 pl-5 pt-3 pr-5 pb-4">
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
                                                     "ml-2 pl-5 pt-3 pr-5 pb-4">
                           Личный кабинет
                       </AppHeaderLink>
                    </ul>
                </nav>
           </section>
       </header>
    );
};

export default AppHeader;