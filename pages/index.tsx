import React from 'react';
import styles from '../styles/page/MainPage.module.scss';
import CoreLayout from "../hocs/CoreLayout";
import AuthForm from "../components/Form/AuthForm";

const textConstants = {
    title: 'Добро пожаловать в ваш персональный список покупок!',
    titleDescription: 'Войдите или зарегестрируйтесь чтобы начать создавать, видеть, скачивать и редактировать ваши собственные списки!',
    createButtonText: 'Создать список покупок'
}

const Index = () => {

    return (
        <CoreLayout>
            <div className={styles.main}>
                <div className={styles.title}>
                    <span className={styles.text}>{textConstants.title}</span>
                    <span className={styles.description}>{textConstants.titleDescription}</span>
                </div>
                <div className={styles.container}>
                    <AuthForm/>
                </div>
            </div>
        </CoreLayout>
    );
};

export default Index;
