import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import styles from "../../../../styles/page/ShoppingList.module.scss";
import CoreLayout from "../../../../hocs/CoreLayout";
import {useActions} from "../../../../core/hooks/useAction";
import ShoppingList from "../../../../components/ShoppingList/ShoppingList";
import buttonStyles from "../../../../styles/component/Button.module.scss";
import {ButtonTypes} from "../../../../core/enums/HtmlElementsEnums";
import Button from "../../../../components/UI/Button";
import {useTypedSelector} from "../../../../core/hooks/useTypedSelector";

const ShoppingListPage: React.FC = () => {
    const router = useRouter();
    const {activeList} = useTypedSelector(state => state.shoppingList);
    const {setActiveShoppingList} = useActions();

    const backToUserPage = () => {
        setActiveShoppingList(null);
        router.back();
    }

    useEffect(() => {
        if (!activeList) {
            backToUserPage();
        }
    }, []);

    return (
        <CoreLayout>
            {
                activeList ?
                <div className={styles.list}>
                    <ShoppingList name={activeList.name} data={activeList.shoppingList} styleName={styles}
                                  style={styles.shoppingList}/>
                    <div className={styles.buttons}>
                        <Button styleClassName={buttonStyles.backButton} onClick={() => backToUserPage()} text={'Back'}
                                type={ButtonTypes.button}/>
                    </div>
                </div>
                    :
                    <div></div>
            }
        </CoreLayout>
    );
};

export default ShoppingListPage;

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({params, store}) => {
//     const dispatch = store.dispatch as NextThunkDispatch;
//     await dispatch(await fetchShoppingListById(params.id))
//     return {
//         props: {
//             serverShoppingList: params
//         }
//     }
// })
