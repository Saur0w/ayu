import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from "./style.module.css";

const data = Array.from({ length: 20 }, (_, i) => ({
    name: `R${i + 1}`,
    soilMoisture: Math.round(15 + Math.random() * 20),
    temperature: Math.round(20 + Math.random() * 10),
}));

export default function DataChart() {
    return (
        <div className={styles.card}>
            <p className={styles.label}>Data Recharts</p>
            <p className={styles.sub}>Trend chart plots the last 20 readings vs Soil Moisture from SQLite backend.</p>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                    <XAxis dataKey="name" tick={{ fontSize: 10 }}/>
                    <YAxis tick={{ fontSize: 10 }}/>
                    <Tooltip/>
                    <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }}/>
                    <Line type="monotone" dataKey="soilMoisture" stroke="#1d9e75" dot={false} strokeWidth={1.5} name="Soil Moisture (%)"/>
                    <Line type="monotone" dataKey="temperature" stroke="#5b8af0" dot={false} strokeWidth={1.5} name="Temperature (°C)"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}