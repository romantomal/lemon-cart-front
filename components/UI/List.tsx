import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (ITEM: T) => React.ReactNode
}

const List: React.FC<ListProps<any>> = ({items, renderItem}) => {
    return (
        <>
            {items.map(renderItem)}
        </>
    );
};

export default List;
