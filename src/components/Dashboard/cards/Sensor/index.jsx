import styles from "./style.module.css";

export default function SensorCard({ label, unit, icon, value, className = "" }) {
    return (
        <div className={`${styles.card} ${className}`}>
            <span className={styles.icon}>{icon}</span>
            <p className={styles.label}>{label}</p>
            {unit && <p className={styles.unit}>({unit})</p>}
            {value != null && <p className={styles.value}>{value}</p>}
        </div>
    );
}