import { PropTypes } from 'prop-types';

import styles from './profile-block-description.module.css';

const ProfileBlockDescription = ({ sWhat = "" }) => {
    return (
        <article
            className={`${styles.description} pt-20 text text_type_main-small`}>
            В этом разделе вы можете<br />
            { sWhat }
        </article>
    )
};

ProfileBlockDescription.propTypes = {
    sWhat : PropTypes.string 
};

export default ProfileBlockDescription;

