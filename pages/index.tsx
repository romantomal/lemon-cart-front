import React from 'react';
import styles from '../styles/page/MainPage.module.scss';
import buttonStyles from '../styles/component/Button.module.scss';
import {useRouter} from "next/router";
import CoreLayout from "../hocs/CoreLayout";
import Button from "../components/UI/Button";

const textConstants = {
    title: 'Добро пожаловать в ваш персональный список покупок!',
    titleDescription: 'Начните создавать его прямо сейчас нажав на кнопку ниже.',
    createButtonText: 'Создать список покупок'
}

const links = {
    create: '/create'
}

const Index = () => {
    const router = useRouter()

    return (
        <CoreLayout>
            <div className={styles.main}>
                <div className={styles.mainTitle}>
                    <span className={styles.mainTitleText}>{textConstants.title}</span>
                    <span className={styles.mainTitleDescription}>{textConstants.titleDescription}</span>
                </div>
                <div className={styles.mainContainer}>
                    <Button
                        onClick={() => router.push(links.create)}
                        text={textConstants.createButtonText}
                        styleClassName={buttonStyles.button}
                    />
                </div>
            </div>
        </CoreLayout>
    );
};

export default Index;
