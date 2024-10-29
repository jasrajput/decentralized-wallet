import logo from '../assets/img/logo.png';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <img src={logo} className={styles['header-logo']} alt="logo" />
            <h4>Metamask</h4>
        </header>
    )
}