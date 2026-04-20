import styles from "./style.module.css";

export default function IrrigationCard({ status }) {
    return (
        <div className={styles.card}>
            <p className={styles.label}>Irrigation Status Card</p>
            <p className={styles.sub}>Whether irrigation is needed based on ML predictions.</p>
            <button className={`${styles.btn} ${styles.needs} ${status==="needs" ? styles.active : ""}`}>
                Needs Irrigation
            </button>
            <button className={`${styles.btn} ${styles.ok} ${status==="ok" ? styles.active : ""}`}>
                No Irrigation Needed
            </button>
        </div>
    );
}