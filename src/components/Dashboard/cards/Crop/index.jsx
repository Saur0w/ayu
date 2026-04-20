import styles from "./style.module.css";

export default function CropCard({ crop, className = "" }) {
    return (
        <div className={`${styles.card} ${className}`}>
            <p className={styles.label}>Crop Recommendation Card</p>
            <p className={styles.sub}>Current suggested crop, for example.</p>
            <div className={styles.cropDisplay}>
                <span className={styles.icon}>🌿</span>
                <span className={styles.name}>{crop}</span>
            </div>
        </div>
    );
}