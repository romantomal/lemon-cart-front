import React from 'react';
import {IShoppingListItem} from "../../core/types/shoppingList";
import List from "../UI/List";
import ShoppingListItem from "./ShoppingListItem";

interface ShoppingListProps {
    name: string,
    data: IShoppingListItem[],
    styleName: any,
    style: any
}

const ShoppingList: React.FC<ShoppingListProps> = ({name, data, style, styleName}) => {
    return (
        <div className={style}>
            <span className={styleName.header}>{name}</span>
            <div  className={styleName.items}>
                <List items={data} renderItem={(field: IShoppingListItem) => <ShoppingListItem data={field} key={`product-field-${field._id}`}/>}/>
            </div>
        </div>
    );
};

export default ShoppingList;
