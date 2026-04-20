import { Outlet } from 'react-router-dom';
import styles from "./style.module.css";

export default function Landing() {
    return (
        <div className={styles.shell}>
            <div className={styles.main}>
                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}