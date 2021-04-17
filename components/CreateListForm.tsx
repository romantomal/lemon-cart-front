import React, {useState} from 'react';
// components
import Button from "./UI/Button";
import TextInput from "./UI/TextInput";
import ListInputGroup from "./UI/ListInputGroup";
// styles
import formStyles from "../styles/component/CreateListForm.module.scss";
import buttonStyles from "../styles/component/Button.module.scss";
import textInputStyles from "../styles/component/TextInput.module.scss";
import {ListItem, ShoppingList} from "../core/models/ShoppingList.model";

const textConstants = {
    listNameLabel: 'Название списка',
    fieldsName: 'Название товара',
    fieldsQuantity: 'Количество',
    createButtonText: 'Сохранить'
}

const initialFields = [
    new ListItem(1, '', ''),
    new ListItem(2, '', ''),
    new ListItem(3, '', '')
]

const CreateListForm: React.FC = () => {
    const [formFields, setFormFields] = useState(initialFields);

    const saveCreatedList = (event) => {
        event.preventDefault();
        const formResult = new ShoppingList(event.target[0].value, formFields);
    }

    const renderFormFields = () => {
        return (
            formFields.map((field) =>
                <ListInputGroup field={field} key={`product-field-${field.id}`} removeField={removeFormField}/>
        ));
    }

    const addFormField = () => {
        const newField = new ListItem(formFields[formFields.length - 1].id + 1, '', '');
        setFormFields(formFields => ([
            ...formFields,
            newField
        ]));
    }

    const removeFormField = (fieldId) => {
        setFormFields(formFields => formFields.filter( (field) => field.id !== fieldId));
    }

    return (
        <form className={formStyles.form} onSubmit={saveCreatedList}>
            <TextInput styleClassName={textInputStyles.textInput} inputStyleClassName={textInputStyles.input} label={textConstants.listNameLabel} inputId={'listName'}/>
            <div className={formStyles.fieldsDescription}>
                <span className={formStyles.fieldsName}>{textConstants.fieldsName}</span>
                <span className={formStyles.fieldsQuantity}>{textConstants.fieldsQuantity}</span>
                <span className={formStyles.fieldsIcon}/>
            </div>
            {renderFormFields()}
            <Button styleClassName={buttonStyles.addButton} onClick={() => addFormField()} text={'+'} type='button'/>
            <Button styleClassName={buttonStyles.button} text={textConstants.createButtonText} type='submit'/>
        </form>
    );
};

export default CreateListForm;
