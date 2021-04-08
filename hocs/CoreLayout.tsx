import React, {useEffect} from 'react';
import Head from "next/head";
import styles from '../styles/layout/CoreLayout.module.scss';
import {useActions} from "../core/hooks/useAction";
import Navbar from "../components/Navigation/Navbar";
import Loader from "../components/Loader";

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
            <Loader/>
            <div className={styles.layout}>
                {children}
            </div>
        </>
    );
};

export default CoreLayout;
