import React, {useEffect} from 'react';
import Head from "next/head";
import styles from '../styles/layout/CoreLayout.module.scss';
import {useTypedSelector} from "../core/hooks/useTypedSelector";
import {useActions} from "../core/hooks/useAction";
import Navbar from "../components/Navigation/Navbar";
import Loader from "../components/Loader";

interface CoreLayoutProps {
    title?: string;
    description?: string;
}

const CoreLayout: React.FC<CoreLayoutProps> = ({children, title, description}) => {
    const {isShowLoader} = useTypedSelector(state => state.app);
    const {showNavbar, hideNavbar} = useActions();

    const handleScroll = () => {
        const clientHeightTrigger = document.documentElement.clientHeight / 4
        window.pageYOffset < clientHeightTrigger || window.pageYOffset === 0 ? showNavbar() : hideNavbar();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
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
            {isShowLoader ? <Loader/> : null}
            <div className={styles.layout}>
                {children}
            </div>
        </>
    );
}

export default CoreLayout;
