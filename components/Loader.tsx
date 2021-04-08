import React from 'react';
import styles from '../styles/component/Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loaderImage}/>
        </div>
    );
};

export default Loader;
