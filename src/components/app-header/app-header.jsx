import { useMemo } from 'react';
import { useSelector,
         useDispatch } from 'react-redux';

import { BurgerIcon, 
         ListIcon,
         ProfileIcon, 
         Logo } from '@ya.praktikum/react-developer-burger-ui-components'
       
import { oPages } from '../../utils/constants';

import { setPage,
         setDefaultPage } from '../../services/actions/app';

import styles from './app-header.module.css';
    
const AppHeader = () => {
    const sCurrentPage = useSelector( store => store.app.sCurrentPage);
    const dispatch = useDispatch();
    
    const bIsBurgerPage = useMemo(() => sCurrentPage === oPages.sBurgerPage,
                                  [sCurrentPage]);
    const bIsListPage = useMemo(() => sCurrentPage === oPages.sListPage,
                                   [sCurrentPage]);
    const bIsProfilePage = useMemo(() => sCurrentPage === oPages.sProfilePage,
                                   [sCurrentPage]);

    return ( 
        <header className={`${styles.header} pt-4 pb-4`}>
            <nav className={styles.nav}>
                <ul className={styles.header__element}>
                    <li className=
                          {`${styles.header__button} mr-2 pl-5 pt-5 pr-5 pb-5`}
                        onClick={() => {dispatch(setPage(oPages.sBurgerPage))}}>
                        <BurgerIcon
                              type={bIsBurgerPage ? "primary" : "secondary"} />
                        <p className={[styles.header__button_text,
                                       "ml-2 text text_type_main-default",
                                       (bIsBurgerPage ?
                                        "" : "text_color_inactive")].join(" ")}>
                            Конструктор
                        </p>
                    </li>
                    <li className=
                           {`${styles.header__button} mr-2 pl-5 pt-5 pr-5 pb-5`}
                         onClick={() => {dispatch(setPage(oPages.sListPage))}}>
                        <ListIcon
                                type={bIsListPage ? "primary" : "secondary"} />
                        <p className={[styles.header__button_text,
                                       "ml-2 text text_type_main-default",
                                       (bIsListPage ?
                                        "" : "text_color_inactive")].join(" ")}>
                            Лента заказов
                        </p>
                    </li>
                </ul>
                <ul className={styles.header__element}>
                    <li onClick={() => {dispatch(setDefaultPage())}}
                        className={styles.clickable_logo}>
                        <Logo />
                    </li>
                </ul>
                <ul className={styles.header__element}>
                    <li className=
                          {`${styles.header__button} ml-2 pl-5 pt-5 pr-5 pb-5`}
                        onClick={() =>
                                      {dispatch(setPage(oPages.sProfilePage))}}>
                        <ProfileIcon
                             type={bIsProfilePage ? "primary" : "secondary"} />
                        <p className={[styles.header__button_text,
                                       "ml-2 text text_type_main-default",
                                       (bIsProfilePage ?
                                        "" : "text_color_inactive")].join(" ")}>
                            Личный кабинет
                        </p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;