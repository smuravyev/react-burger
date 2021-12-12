import { useRef } from 'react';

import type { FC,
              SyntheticEvent } from 'react';

import { useLocation,
         Link,
         Location as ILocation } from 'react-router-dom';

import { BurgerIcon, 
         ListIcon,
         ProfileIcon, 
         Logo } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './app-header-link.module.css';

export type TIconToRenderName = "burger" | "logo" | "list" | "profile"; 

export interface IAppHeaderLinkProps {
    to : string;
    sIconToRender : TIconToRenderName; 
    sAdditionalPaddingClasses? : string;
    exact? : boolean;
}

const AppHeaderLink : FC<IAppHeaderLinkProps> = ({ to,
                                                   sIconToRender,
                                                   sAdditionalPaddingClasses =
                                                                             '',
                                                   exact = false,
                                                   children }) => {

    const oLocation : ILocation = useLocation();
    const bIsCurrent : boolean = exact ? (oLocation.pathname === to)
                             : oLocation?.pathname?.indexOf(to) === 0;

    /* Let us construct some classes based on bIsCurrent */
    const sLiClassName : string =
                       `${styles.header__button} ${sAdditionalPaddingClasses}` + 
                       (bIsCurrent ? " " + styles.header__button_current : "");
    const sPClassName : string =
             `${styles.header__button_text} ml-2 text text_type_main-default` + 
             (bIsCurrent ? "" : " text_color_inactive");
    const sLinkClassName : string =
            bIsCurrent ? `${styles.link} ${styles.link_inactive}` : styles.link;

    /* We need the WHOLE li clickable and don't break structure: no A over LI */
    const oLinkRef = useRef<HTMLAnchorElement>(null);
    const oLiRef = useRef<HTMLLIElement>(null);

    const onLiClick = (eEvent : SyntheticEvent) : void => {
        if(oLiRef &&
           oLiRef.current &&
           eEvent.target === oLiRef.current &&
           oLinkRef &&
           oLinkRef.current){
            oLinkRef.current.click();
        }
    };
    
    let jsxElementToRender : JSX.Element | null = null;
    
    switch(sIconToRender) {
        case "burger":
            jsxElementToRender = (
                <BurgerIcon type={bIsCurrent ? "primary" : "secondary"} />
            );
            break;
        case "list":
            jsxElementToRender = (
                <ListIcon type={bIsCurrent ? "primary" : "secondary"} />
            );
            break;
        case "logo":
            jsxElementToRender = (
                <Logo />
            );
            break;
        case "profile":
            jsxElementToRender = (
                <ProfileIcon type={bIsCurrent ? "primary" : "secondary"} />
            );
            break;
    };

    return (
        <li className={sLiClassName} onClick={onLiClick} ref={oLiRef}>
            <Link to={to} className={sLinkClassName} ref={oLinkRef}>
                {jsxElementToRender}
                {
                    children && (
                        <p className={sPClassName}>
                            {children}
                        </p>
                    )
                }
                </Link>
            </li>
    );
};

export default AppHeaderLink;