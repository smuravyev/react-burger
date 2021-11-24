import { Routes,
         Route,
         NavLink,
         Navigate } from 'react-router-dom';

import { useSelector,
         useDispatch } from 'react-redux';

import { ProfileBlockDescription,
         ProfileEditor,
         OrdersHistory,
         Loader } from '../';

import { exitRequest } from '../../services/actions/authorization';

import styles from './profile.module.css';
    
const Profile = () => {
    
    const dispatch = useDispatch();
    const bIsBusy = useSelector(store => store.app.bIsBusy);

    const getLinkClassName = ({ isActive }) => {
        return isActive ?
       `${styles.link} ${styles.link_active} text text_type_main-medium` :
       `${styles.link} inactive text text_type_main-medium text_color_inactive`;
    };
    
    const exitClickHandler = (eEvent) => {
        eEvent.preventDefault();
        dispatch(exitRequest());
    };

    return (
        <section className={`${styles.profile_section} pt-20 mt-20`}>
            <nav className={`${styles.profile_navigation} pr-15`}>
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
            <article className={styles.profile_content}>
                <Routes>
                    <Route index element={ (<ProfileEditor />) } />
                    <Route path="orders" element={ (<OrdersHistory />) } />
                    <Route path="*" element={ (<Navigate to="/invalid-page"
                                                replace={true} />) } />
                </Routes>
            </article>
        </section>
    );
};

export default Profile;