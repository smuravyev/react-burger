import styles from './feed.module.css';

const Feed = () : JSX.Element => {
    return (
         <section className={`${styles.section}`}>
             <h1 className={`${styles.header} pt-10 pb-5 text text_type_main-large`}>
                 Лента заказов
             </h1>
         </section>
    );
};

export default Feed;