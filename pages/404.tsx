import React from "react";
import styles from '../styles/page/PageNotFound.module.scss';
import buttonStyles from "../styles/component/Button.module.scss";
import Button from "../components/UI/Button";
import {useRouter} from "next/router";

const textConstants = {
    headText: '404',
    containerText: 'Page Not Found',
    containerDescription: 'О нет, кажется вы потерялись!＼(º □ º l|l)/',
    buttonText: 'Вернуться домой'
}

const PageNotFound = () => {
    const router = useRouter()

    return (
        <div className={styles.page}>
            <div className={styles.head}>
                <span className={styles.text}>{textConstants.headText}</span>
            </div>
            <div className={styles.container}>
                <span className={styles.text}>{textConstants.containerText}</span>
                <span className={styles.description}>{textConstants.containerDescription}</span>
                <div className={styles.button}>
                    <Button
                        onClick={() => router.push('/')}
                        text={textConstants.buttonText}
                        styleClassName={buttonStyles.button}
                    />
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
