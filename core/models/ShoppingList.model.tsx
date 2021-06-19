import {IShoppingList, IShoppingListItem} from "../types/shoppingList";

export class ShoppingList implements IShoppingList{
    constructor(
        public id: number,
        public userId: number,
        public name: string,
        public shoppingList: ListItem[]
    ) {
    }
}

export class CreateShoppingList{
    constructor(
        public userId: number,
        public name: string,
        public shoppingList: ListItem[]
    ) {
    }
}

export class ListItem implements IShoppingListItem{
    constructor(
        public _id: number,
        public name: string,
        public quantity: string,
        public units: string
    ) {
    }
}
