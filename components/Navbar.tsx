import React from 'react';
import styles from '../styles/Navbar.module.scss';
import logo from "../assets/images/logo.svg"
import Image from "next/image";
import {useTypedSelector} from "../core/hooks/useTypedSelector";

const Navbar: React.FC = () => {
    const {isShowNavbar} = useTypedSelector(state => state.app)
    const navbar = isShowNavbar ? styles.navbar : styles.navbarHide;

    return (
        <div className={navbar}>
            <Image src={logo} alt="Lemon Logo" width={50} height={50}/>
            <span className={styles.navbarTitle}>Lemon Cart</span>
        </div>
    );
}

export default Navbar;
