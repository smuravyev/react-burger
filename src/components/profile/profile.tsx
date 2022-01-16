import { Routes,
         Route,
         NavLink } from 'react-router-dom';

import { useAppDispatch,
         useAppSelector } from '../../services/hooks';

import type { SyntheticEvent } from 'react'; 

import { ProfileBlockDescription,
         ProfileEditor,
         OrdersHistory,
         InvalidRouteMessage,
         Loader } from '../';

import { exitRequest } from '../../services/actions/authorization';

import styles from './profile.module.css';
    
const Profile = () : JSX.Element => {
    
    const dispatch = useAppDispatch();
    const bIsBusy = useAppSelector(store => store.app.bIsBusy);

    const getLinkClassName = ({ isActive } : {isActive : boolean}) : string => {
        return isActive ?
       `${styles.link} ${styles.link_active} text text_type_main-medium` :
       `${styles.link} inactive text text_type_main-medium text_color_inactive`;
    };
    
    const exitClickHandler = (eEvent : SyntheticEvent) : void => {
        eEvent.preventDefault();

        dispatch(exitRequest());
    };

    return (
        <section className={`${styles.profile_section}`}>
            <nav className={`${styles.profile_navigation} pt-20 mt-20 pr-15`}>
                <NavLink to="/profile/" className={getLinkClassName}>
                    Профиль
                </NavLink>
                <NavLink to="/profile/orders/" className={getLinkClassName}>
                    История заказов
                </NavLink>
                <NavLink to="/profile/logout/" className={getLinkClassName}
                         onClick={exitClickHandler}>
                    {
                        bIsBusy ? (
                            <Loader message="Загрузка" />
                        ) : (
                            <>
                                Выход
                            </>
                        )
                    }
                </NavLink>
                <Routes>
                    <Route index element={
                        (
                            <ProfileBlockDescription
                                    sWhat="изменить свои персональные данные" />
                        ) } />
                    <Route path="orders" element={
                        (
                            <ProfileBlockDescription
                                     sWhat=" посмотреть свою историю заказов" />
                        ) } />
                </Routes>
            </nav>
            <article>
                <Routes>
                    <Route index element={ (<ProfileEditor />) } />
                    <Route path="orders/*" element={ (<OrdersHistory />) } />
                    <Route path="*" element={ ( <InvalidRouteMessage /> ) } />
                </Routes>
            </article>
        </section>
    );
};

export default Profile;