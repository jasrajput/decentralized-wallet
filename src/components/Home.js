import Header from "./Header";
import styles from './Home.module.css';

export default function Home() {
    return <>
        <Header />

        <div className={styles.card}>
            <h4>Account 1</h4>
            <strong>0xs..39e</strong>
            <hr />
        </div>
    </>
}