import * as AppActionCreators from '../action-creators/app';
import * as ShoppingListActionCreators from '../action-creators/shoppingList';
import * as UserActionCreators from '../action-creators/user';

export default {
    ...AppActionCreators,
    ...ShoppingListActionCreators,
    ...UserActionCreators
}
