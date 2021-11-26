import { BurgerIcon, 
         ListIcon,
         ProfileIcon, 
         Logo } from '@ya.praktikum/react-developer-burger-ui-components'

import { AppHeaderLink } from '../';

import styles from './app-header.module.css';
    
const AppHeader = () => {

    return (  
        <header className={`${styles.header} pt-4 pb-4`}>
            <nav className={styles.nav}>
                <ul className={styles.header__element}>
                   <AppHeaderLink exact to="/" IconToRender={BurgerIcon}
                                  sAdditionalPaddingClasses=
                                                     "mr-2 pl-5 pt-5 pr-5 pb-5">
                       Конструктор
                   </AppHeaderLink>
                   <AppHeaderLink to="/list/" IconToRender={ListIcon}
                                  sAdditionalPaddingClasses=
                                                     "mr-2 pl-5 pt-5 pr-5 pb-5">
                       Лента заказов
                   </AppHeaderLink>
                </ul>
                <ul className={styles.header__element}>
                    <AppHeaderLink exact to="/" IconToRender={Logo}
                                   sListItemClassName={styles.clickable_logo} />
                </ul>
                <ul className={styles.header__element}>
                   <AppHeaderLink to="/profile/" IconToRender={ProfileIcon}
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