import React from 'react';
import styles from "../../styles/page/ShoppingList.module.scss";
import {IShoppingListItem} from "../../core/types/shoppingList";

interface ShoppingListItemProps {
    data: IShoppingListItem
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({data}) => {
    return (
        <div className={styles.listItem}>
            <span className={styles.itemName}>{data.name}</span>
            <span className={styles.itemQuantity}>---{data.quantity}---</span>
        </div>
    );
};

export default ShoppingListItem;
