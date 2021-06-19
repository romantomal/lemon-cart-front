import React, {useState} from 'react';
import {NextThunkDispatch, wrapper} from "../../../store";
import {fetchShoppingListById} from "../../../store/action-creators/shoppingList";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import styles from "../../../styles/page/ShoppingList.module.scss";
import CoreLayout from "../../../hocs/CoreLayout";
import {IShoppingList} from "../../../core/types/shoppingList";
import {useActions} from "../../../core/hooks/useAction";
import ShoppingList from "../../../components/ShoppingList/ShoppingList";

const ShoppingListPage: React.FC = () => {
    const [shoppingList, setShoppingList] = useState<IShoppingList>({id: 1, userId: 1, name: 'Мой первый список', shoppingList: [
            {_id: 1, quantity: '12кг', name: 'Пицца пепперони пепперони пепперони пепперони пепперони пепперони пепперони пепперони пепперони пепперони пепперони пепперони пепперони пепперони пепперони '},
            {_id: 2, quantity: '12кг', name: 'Пицца пепперони'},
            {_id: 3, quantity: '12кг', name: 'Пицца пепперони'},
            {_id: 4, quantity: '12кг', name: 'Пицца пепперони'},
            {_id: 5, quantity: '12кг', name: 'Пицца пепперони'}]});
    const {showLoader, hideLoader} = useActions();
    const router = useRouter();
    const { id } = router.query;

    return (
        <CoreLayout>
            <div className={styles.list}>
                <ShoppingList name={shoppingList.name} data={shoppingList.shoppingList} styleName={styles} style={styles.shoppingList}/>
            </div>
        </CoreLayout>
    );
};

export default ShoppingListPage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({params, store}) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchShoppingListById(params.id))
    return {
        props: {
            serverShoppingList: params
        }
    }
})
