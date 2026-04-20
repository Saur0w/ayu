import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./style.module.css";

export default function StressCard({ level = 0 }) {
    const needleRef = useRef();
    const targetRotation = -90 + level * 180;

    useGSAP(() => {
        gsap.to(needleRef.current, {
            rotation: targetRotation,
            transformOrigin: "60px 65px",
            duration: 1.4,
            ease: "elastic.out(1, 0.7)",
        });
    }, [level]);

    return (
        <div className={styles.card}>
            <p className={styles.label}>Stress Analysis Card</p>
            <p className={styles.sub}>Crop stress level based on backend evaluation.</p>

            <svg viewBox="0 0 120 70" className={styles.gauge}>
                <defs>
                    <linearGradient id="stressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#43a047"/>
                        <stop offset="50%" stopColor="#ff9800"/>
                        <stop offset="100%" stopColor="#e53935"/>
                    </linearGradient>
                </defs>
                <path d="M10 65 A50 50 0 0 1 110 65" fill="none" stroke="#eee" strokeWidth="10" strokeLinecap="round"/>
                <path d="M10 65 A50 50 0 0 1 110 65" fill="none" stroke="url(#stressGradient)" strokeWidth="10" strokeLinecap="round"/>
                <g ref={needleRef}>
                    <line x1="60" y1="65" x2="60" y2="22" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="60" cy="65" r="4" fill="#333"/>
                </g>
            </svg>

            <div className={styles.legend}>
                <span style={{color:"#43a047"}}>Normal</span>
                <span style={{color:"#ff9800"}}>Moderate</span>
                <span style={{color:"#e53935"}}>High Stress</span>
            </div>
        </div>
    );
}