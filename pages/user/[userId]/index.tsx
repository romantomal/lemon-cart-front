import React from 'react';
import styles from "../../../styles/page/User.module.scss";
import buttonStyles from '../../../styles/component/Button.module.scss';
import CoreLayout from "../../../hocs/CoreLayout";
import Button from "../../../components/UI/Button";
import {useRouter} from "next/router";
import {useTypedSelector} from "../../../core/hooks/useTypedSelector";
import {useActions} from "../../../core/hooks/useAction";
import List from "../../../components/UI/List";
import {IShoppingList} from "../../../core/types/shoppingList";
import ShoppingListPreview from "../../../components/ShoppingList/ShoppingListPreview";

const textConstants = {
    createButtonText: 'Создать список покупок'
}

const UserPage = () => {
    const router = useRouter();
    const {user} = useTypedSelector(state => state.user);
    const {lists} = useTypedSelector(state => state.shoppingList);
    const {setUserWithStorageToken, fetchUserShoppingLists} = useActions();

    if (user && lists && !lists.length) {
        fetchUserShoppingLists(user);
    }

    return (
        <CoreLayout>
            <div className={styles.user}>
                <div className={styles.container}>
                    <Button
                        onClick={() => router.push('/create')}
                        text={textConstants.createButtonText}
                        styleClassName={buttonStyles.button}
                    />
                </div>
                <div className={styles.listContainer}>
                    <List items={lists} renderItem={(field: IShoppingList) => <ShoppingListPreview data={field} key={`list-preview-${field.name}`}/>}/>
                </div>
            </div>
        </CoreLayout>
    );
};

export default UserPage;
