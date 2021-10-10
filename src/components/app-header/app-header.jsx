import React from 'react';
import PropTypes from 'prop-types';

import {
        BurgerIcon, 
        ListIcon,
        ProfileIcon, 
        Logo
       } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeaderStyles from  './app-header.module.css';

class AppHeader extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {activeButton : props.section || "burger"}; 
    }
    
    isBurgerPage(){
        return this.state.activeButton === "burger";
    }

    isListPage(){
        return this.state.activeButton === "list";
    }

    isProfilePage(){
        return this.state.activeButton === "profile";
    }

    render(){
        return ( 
            <header className={AppHeaderStyles.header + " pt-4 pb-4"}>
                <nav className={AppHeaderStyles.nav}>
                    <ul className={AppHeaderStyles.header__element}>
                        <li className={AppHeaderStyles.header__button + " mr-2 pl-5 pt-5 pr-5 pb-5"}>
                            <BurgerIcon type={this.isBurgerPage() ? "primary" : "secondary"} />
                            <p className={[AppHeaderStyles.header__button_text,
                                              "ml-2 text text_type_main-default",
                                              (this.isBurgerPage()  ? "" : "text_color_inactive")].join(" ")}>Конструктор</p>
                        </li>
                        <li className={AppHeaderStyles.header__button + " mr-2 pl-5 pt-5 pr-5 pb-5"}>
                            <ListIcon type={this.isListPage() ? "primary" : "secondary"} />
                            <p className={[AppHeaderStyles.header__button_text,
                                              "ml-2 text text_type_main-default",
                                              (this.isListPage()  ? "" : "text_color_inactive")].join(" ")}>Лента заказов</p>
                        </li>
                    </ul>
                    <ul className={AppHeaderStyles.header__element}>
                        <li href="/">
                            <Logo />
                        </li>
                    </ul>
                    <ul className={AppHeaderStyles.header__element}>
                        <li className={AppHeaderStyles.header__button + " ml-2 pl-5 pt-5 pr-5 pb-5"}>
                            <ProfileIcon type={this.isProfilePage() ? "primary" : "secondary"} />
                            <p className={[AppHeaderStyles.header__button_text,
                                              "ml-2 text text_type_main-default",
                                              (this.isProfilePage()  ? "" : "text_color_inactive")].join(" ")}>Личный кабинет</p>
                        </li>
                    </ul>
                </nav>

            </header>
        );
    }
}

AppHeader.propTypes = {
                       section: PropTypes.oneOf(["burger", "list", "profile"])
                      };

export default AppHeader;