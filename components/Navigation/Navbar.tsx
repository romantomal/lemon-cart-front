import React from 'react';
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import styles from '../../styles/component/Navbar.module.scss';
import {useTypedSelector} from "../../core/hooks/useTypedSelector";
import {useRouter} from "next/router";

const Navbar: React.FC = () => {
    const router = useRouter()
    const {isShowNavbar} = useTypedSelector(state => state.app)
    const navbar = isShowNavbar ? styles.navbar : `${styles.navbar} ${styles.hide}`;

    return (
        <div className={navbar}>
            <Image className={styles.logo} onClick={() => router.push('/')} src={logo} alt="Lemon Logo" width={50} height={50}/>
            <span className={styles.title}>Lemon Cart</span>
        </div>
    );
}

export default Navbar;
