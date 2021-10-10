import React from 'react';
import PropTypes from 'prop-types';

import {
        BurgerIcon, 
        ListIcon,
        ProfileIcon, 
        Logo
       } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from  './app-header.module.css';
    
const AppHeader = props => {

    const isBurgerPage = () => props.section === "burger";
    const isListPage = () => props.section === "list";
    const isProfilePage = () => props.section === "profile";

    return ( 
        <header className={`${styles.header} pt-4 pb-4`}>
            <nav className={styles.nav}>
                <ul className={styles.header__element}>
                    <li className={`${styles.header__button} mr-2 pl-5 pt-5 pr-5 pb-5`}>
                        <BurgerIcon type={isBurgerPage() ? "primary" : "secondary"} />
                        <p className={[styles.header__button_text,
                                       "ml-2 text text_type_main-default",
                                       (isBurgerPage()  ? "" : "text_color_inactive")].join(" ")}>Конструктор</p>
                    </li>
                    <li className={`${styles.header__button} mr-2 pl-5 pt-5 pr-5 pb-5`}>
                        <ListIcon type={isListPage() ? "primary" : "secondary"} />
                        <p className={[styles.header__button_text,
                                          "ml-2 text text_type_main-default",
                                          (isListPage()  ? "" : "text_color_inactive")].join(" ")}>Лента заказов</p>
                    </li>
                </ul>
                <ul className={styles.header__element}>
                    <li href="/">
                        <Logo />
                    </li>
                </ul>
                <ul className={styles.header__element}>
                    <li className={`${styles.header__button} ml-2 pl-5 pt-5 pr-5 pb-5`}>
                        <ProfileIcon type={isProfilePage() ? "primary" : "secondary"} />
                        <p className={[styles.header__button_text,
                                       "ml-2 text text_type_main-default",
                                       (isProfilePage()  ? "" : "text_color_inactive")].join(" ")}>Личный кабинет</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

AppHeader.propTypes = {
                       section: PropTypes.oneOf(["burger", "list", "profile"])
                      };

export default AppHeader;