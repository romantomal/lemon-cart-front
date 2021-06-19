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
    const {activeList} = useTypedSelector(state => state.shoppingList);
    const {loadUserFromStorage, fetchUserShoppingLists} = useActions();

    return (
        <div className={shoppingListStyles.shoppingListPreview} onClick={() => router.push(`lists/${data.id}`)}>
            <span className={shoppingListStyles.name}>{data.name}</span>
        </div>
    );
};

export default ShoppingListPreview;
