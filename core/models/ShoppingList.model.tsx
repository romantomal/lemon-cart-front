

export class ShoppingList {
    constructor(
        public name: string,
        public list: ListItem[]
    ) {
    }
}

export class ListItem {
    constructor(
        public id: number,
        public name: string,
        public quantity: string
    ) {
    }
}
