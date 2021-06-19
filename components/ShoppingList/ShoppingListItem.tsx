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
            <div className={styles.itemQuantity}>
                <span className={styles.itemQuantityBlock}>---</span>
                <span className={styles.itemQuantityBlock}>{data.quantity}</span>
                <span> | </span>
                <span className={styles.itemQuantityBlock}>{data.units}</span>
                <span className={styles.itemQuantityBlock}>---</span>
            </div>
        </div>
    );
};

export default ShoppingListItem;
