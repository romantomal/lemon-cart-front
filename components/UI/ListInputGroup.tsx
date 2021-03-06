import React, {InputHTMLAttributes, useEffect, useRef} from 'react';
import {ListItem} from "../../core/models/ShoppingList.model";
// styles
import styles from "../../styles/component/ListInputGroup.module.scss";
// hooks
import {useInput} from "../../core/hooks/useInput";
// images
import circle from "../../public/icons/green-circle.svg";
import cross from "../../public/icons/red-cross.svg";
import Image from "next/image";
import {IShoppingListItem} from "../../core/types/shoppingList";

const textConstants = {
    placeholderName: 'Кружка, Гвозди, Молоко',
    placeholderQuantity: '1 | 42 | 100',
    placeholderUnits: 'шт | кг | л'
}
const squareSize = 30;

interface ListInputGroupProps extends InputHTMLAttributes<HTMLButtonElement> {
    field: IShoppingListItem;
    removeField?: Function;
}

const ListInputGroup: React.FC<ListInputGroupProps> = ({field, removeField}) => {
    const ref = useRef<HTMLInputElement>()
    const inputName = useInput('');
    const inputQuantity = useInput('');
    const inputUnits = useInput('');
    const productNameStyleClass = `${styles.input} ${styles.groupName}`
    const productQuantityStyleClass = `${styles.input} ${styles.groupQuantity}`
    const productUnitsStyleClass = `${styles.input} ${styles.groupUnits}`

    useEffect(() => {
        field.name = inputName.value;
        field.quantity = inputQuantity.value;
        field.units = inputUnits.value;
    }, [inputName, inputQuantity]);

    return (
        <div className={styles.group}>
            <input placeholder={textConstants.placeholderName} className={productNameStyleClass} type="text" ref={ref} onChange={inputName.onChange} id={`listInputName-${field._id}`} required/>
            <input placeholder={textConstants.placeholderQuantity} className={productQuantityStyleClass} type="text" ref={ref} onChange={inputQuantity.onChange} id={`listInputQuantity-${field._id}`}/>
            <input placeholder={textConstants.placeholderUnits} className={productUnitsStyleClass} type="text" ref={ref} onChange={inputUnits.onChange} id={`listInputUnits-${field._id}`}/>
            {field._id <= 3 ?
                <Image className={styles.addButton} src={circle} alt="o" width={squareSize} height={squareSize}/> :
                <Image className={styles.removeButton} onClick={() => removeField(field._id)} src={cross} alt="x" width={squareSize} height={squareSize}/>}
        </div>
    );
};

export default ListInputGroup;
