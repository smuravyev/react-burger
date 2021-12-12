import styles from './profile-block-description.module.css';

export interface IProfileBlockDescriptionProps {
    sWhat? : string;
};

const ProfileBlockDescription =
            ({ sWhat = "" } : IProfileBlockDescriptionProps ) : JSX.Element => {
    return (
        <article
            className={`${styles.description} pt-20 text text_type_main-small`}>
            В&nbsp;этом разделе вы&nbsp;можете<br />
            { sWhat }
        </article>
    )
};

export default ProfileBlockDescription;

