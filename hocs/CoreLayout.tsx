import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import Head from "next/head";
import {useActions} from "../core/hooks/useAction";

interface CoreLayoutProps {
    title?: string;
    description?: string;
}

const CoreLayout: React.FC<CoreLayoutProps> = ({children, title, description}) => {
    const {showNavbar, hideNavbar} = useActions()

    const handleScroll = () => {
        window.pageYOffset < document.documentElement.clientHeight / 4 ? showNavbar() : hideNavbar();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <>
            <Head>
                <title>{title || `Lemon Cart`}</title>
                <meta name="description" content={`Ваш персональный список покупок. ${description || ''}`}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={"Cart, Purchases, Shopping, Shopping list"}/>
            </Head>
            <Navbar/>
            <div style={{paddingTop: '8rem'}}>
                {children}
            </div>
        </>
    );
};

export default CoreLayout;
