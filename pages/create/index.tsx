import React from 'react';
import CoreLayout from "../../hocs/CoreLayout";
import CreateListForm from "../../components/CreateListForm";
import styles from '../../styles/page/Create.module.scss';
// images
import circle from "../../public/icons/green-circle.svg";
import cross from "../../public/icons/red-cross.svg";
import Image from "next/image";


const textConstants = {
    title: 'Это форма создания вашего списка покупок',
    circleDescription: ' - поля отмеченные этой иконкой закреплены',
    crossDescription: ' - поля отмеченные этой иконкой можно удалить по нажатию',
    createButtonText: 'Создать список покупок'
}
const squareSize = 30;

const Index = () => {
    return (
        <CoreLayout>
            <div className={styles.create}>
                <span className={styles.title}>{textConstants.title}</span>
                <CreateListForm/>
                <div className={styles.info}>
                    <div className={styles.field}>
                        <Image src={circle} alt="o" width={squareSize} height={squareSize}/>
                        <span className={styles.text}>{textConstants.circleDescription}</span>
                    </div>
                    <div className={styles.field}>
                        <Image src={cross} alt="x" width={squareSize} height={squareSize}/>
                        <span className={styles.text}>{textConstants.crossDescription}</span>
                    </div>
                </div>
            </div>
        </CoreLayout>
    );
};

export default Index;
