import { useRef } from 'react';

import { useLocation,
         Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './app-header-link.module.css';

const AppHeaderLink = ({ to,
                         IconToRender,
                         sAdditionalPaddingClasses = '',
                         exact = false,
                         children }) => {

    const oLocation = useLocation();
    const bIsCurrent = exact ? (oLocation.pathname === to)
                             : oLocation.pathname &&
                               oLocation.pathname.indexOf(to) === 0;

    /* Let us construct some classes based on bIsCurrent */
    const sLiClassName = `${styles.header__button} ${sAdditionalPaddingClasses}` + 
                         (bIsCurrent ? " " + styles.header__button_current
                                     : "");
    const sPClassName =
             `${styles.header__button_text} ml-2 text text_type_main-default` + 
             (bIsCurrent ? "" : " text_color_inactive");
    const sLinkClassName = bIsCurrent ? `${styles.link} ${styles.link_inactive}`
                                      : styles.link;

    /* We need the WHOLE li clickable and don't break structure: no A over LI */
    const oLinkRef = useRef(null);
    const oLiRef = useRef(null);

    const onLiClick = (eEvent) => {
        if(oLiRef &&
           oLiRef.current &&
           eEvent.target === oLiRef.current &&
           oLinkRef &&
           oLinkRef.current){
            oLinkRef.current.click();
        }
    };

    return (
        <li className={sLiClassName} onClick={onLiClick} ref={oLiRef}>
            <Link to={to} className={sLinkClassName} ref={oLinkRef}>
                <IconToRender type={bIsCurrent ? "primary" : "secondary"} />
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

AppHeaderLink.propTypes = {
    to : PropTypes.string.isRequired,
    IconToRender : PropTypes.func.isRequired,
    sAdditionalPaddingClasses : PropTypes.string,
    exact : PropTypes.bool
};

export default AppHeaderLink;