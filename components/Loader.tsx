import React from 'react';
import styles from '../styles/component/Loader.module.scss';

const Loader: React.FC = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.image}/>
        </div>
    );
};

export default Loader;
