import {IShoppingList, IShoppingListItem} from "../types/shoppingList";

export class ShoppingList implements IShoppingList{
    constructor(
        public _id: string,
        public name: string,
        public list: ListItem[]
    ) {
    }
}

export class ListItem implements IShoppingListItem{
    constructor(
        public _id: number,
        public name: string,
        public quantity: string
    ) {
    }
}
