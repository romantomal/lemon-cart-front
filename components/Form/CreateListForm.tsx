import React, {useState} from 'react';
// components
import List from "../UI/List";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import ListInputGroup from "../UI/ListInputGroup";
// styles
import formStyles from "../../styles/component/CreateListForm.module.scss";
import buttonStyles from "../../styles/component/Button.module.scss";
import textInputStyles from "../../styles/component/TextInput.module.scss";
// models
import {CreateShoppingList, ListItem, ShoppingList} from "../../core/models/ShoppingList.model";
import {IShoppingListItem} from "../../core/types/shoppingList";
import {ButtonTypes} from "../../core/enums/HtmlElementsEnums";
import {useActions} from "../../core/hooks/useAction";
import {useTypedSelector} from "../../core/hooks/useTypedSelector";
import {useRouter} from "next/router";

const textConstants = {
    listNameLabel: 'Имя списка',
    fieldsName: 'Название товара',
    fieldsQuantity: 'Количество',
    fieldsUnits: '',
    createButtonText: 'Сохранить'
}

const initialFields: ListItem[] = [
    new ListItem(1, '', '', ''),
    new ListItem(2, '', '', ''),
    new ListItem(3, '', '', '')
]

const CreateListForm: React.FC = () => {
    const router = useRouter();
    const [formFields, setFormFields] = useState(initialFields);
    const {user} = useTypedSelector(state => state.user);
    const {createNewShoppingList, showLoader, hideLoader} = useActions();

    const saveCreatedList = async (event) => {
        event.preventDefault();
        const formResult = new CreateShoppingList(user._id, event.target[0].value, formFields);
        showLoader();
        await createNewShoppingList(formResult, user.token);
        hideLoader();
        await router.push({ pathname: '/user/[uid]', query: { uid: user._id }});
    }

    const addFormField = () => {
        const newField = new ListItem(formFields[formFields.length - 1]._id + 1, '', '', '');
        setFormFields(formFields => ([
            ...formFields,
            newField
        ]));
    }

    const removeFormField = (fieldId) => {
        setFormFields(formFields => formFields.filter( (field) => field._id !== fieldId));
    }

    return (
        <form className={formStyles.form} onSubmit={saveCreatedList}>
            <div className={formStyles.listName}>
                <TextInput styleClassName={textInputStyles.textInput} inputStyleClassName={textInputStyles.input} label={textConstants.listNameLabel} inputId={'listName'}/>
            </div>
            <div className={formStyles.fieldsDescription}>
                <span className={formStyles.fieldsName}>{textConstants.fieldsName}</span>
                <span className={formStyles.fieldsQuantity}>{textConstants.fieldsQuantity}</span>
                <span className={formStyles.fieldsUnits}>{textConstants.fieldsUnits}</span>
                <span className={formStyles.fieldsIcon}/>
            </div>
            <List items={formFields} renderItem={(field: IShoppingListItem) => <ListInputGroup field={field} key={`product-field-${field._id}`} removeField={removeFormField}/>}/>
            <Button styleClassName={buttonStyles.addButton} onClick={() => addFormField()} text={'+'} type={ButtonTypes.button}/>
            <Button styleClassName={buttonStyles.button} text={textConstants.createButtonText} type={ButtonTypes.submit}/>
        </form>
    );
}

export default CreateListForm;
