import React from 'react';

interface CoreLayoutProps {
    title?: string;
    description?: string;
}

const CoreLayout: React.FC<CoreLayoutProps> = ({ children, title, description }) => {
    return (
        <>
            <head>
                <title>{title || `Lemon Cart`}</title>
                <meta name="description" content={`Ваш персональный список покупок. ${description}`}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={"Cart, Purchases, Shopping, Shopping list"}/>
            </head>
            <div style={{margin: '90px 0'}}>
                {children}
            </div>
        </>
    );
};

export default CoreLayout;
