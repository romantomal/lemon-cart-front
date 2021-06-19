import React from 'react';
import {IShoppingList} from "../../core/types/shoppingList";
import {useRouter} from "next/router";
import {useTypedSelector} from "../../core/hooks/useTypedSelector";
import {useActions} from "../../core/hooks/useAction";
import shoppingListStyles from "../../styles/page/ShoppingListPreview.module.scss";

interface ShoppingListProps {
    data: IShoppingList
}

const ShoppingListPreview: React.FC<ShoppingListProps> = ({data}) => {
    const router = useRouter();
    const {user} = useTypedSelector(state => state.user);
    const {lists} = useTypedSelector(state => state.shoppingList);
    const {setActiveShoppingList, fetchUserShoppingLists} = useActions();

    if ((!lists || !lists.length) && user) {
        fetchUserShoppingLists(user);
    }

    const openShoppingList = async (shoppingList: IShoppingList) => {
        await setActiveShoppingList(shoppingList);
        router.push(`${data.userId}/lists/${data.id}`)
    }

    return (
        <div className={shoppingListStyles.shoppingListPreview} onClick={() => openShoppingList(data)}>
            <span className={shoppingListStyles.name}>{data.name}</span>
        </div>
    );
};

export default ShoppingListPreview;
