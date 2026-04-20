import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CropCard from "./cards/Crop";
import IrrigationCard from "./cards/Irrigation";
import StressCard from "./cards/Stress";
import SensorCard from "./cards/Sensor";
import DataChart from "./cards/Graph";
import styles from "./style.module.css";

const sensors = [
    { label: "Temperature", unit: "°C", icon: "🌡️" },
    { label: "Humidity", unit: "%", icon: "💧" },
    { label: "Soil Moisture", unit: "%", icon: "🌱" },
    { label: "Rainfall", unit: "mm", icon: "🌧️" },
    { label: "Sunlight Hours", unit: "h", icon: "☀️" },
    { label: "Wind Speed", unit: "km/h", icon: "💨" },
    { label: "Soil pH", unit: "", icon: "⚗️" },
];

export default function Dashboard() {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".gsap-card", {
            y: 24, opacity: 0,
            stagger: 0.1,
            duration: 0.55,
            ease: "power2.out",
        });
        gsap.from(".gsap-sensor", {
            y: 16, opacity: 0,
            stagger: 0.06,
            duration: 0.4,
            delay: 0.35,
            ease: "power2.out",
        });
    }, { scope: container });

    return (
        <div ref={container}>
            <h1 className={styles.title}>Dashboard</h1>

            <div className={styles.topCards}>
                <CropCard crop="Wheat" className="gsap-card" />
                <IrrigationCard status="needs" className="gsap-card" />
                <StressCard level={0.55} className="gsap-card" />
            </div>

            <div className={styles.sensorGrid}>
                {sensors.map((s) => (
                    <SensorCard key={s.label} {...s} className="gsap-sensor" />
                ))}
            </div>

            <DataChart />
        </div>
    );
}