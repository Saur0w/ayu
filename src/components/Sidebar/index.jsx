import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styles from "./style.module.css";

const links = [
    { to: "/", label: "Dashboard",   icon: "⊞" },
    { to: "/analytics", label: "Analytics",   icon: "↗" },
    { to: "/system-logs", label: "System Logs", icon: "≡" },
    { to: "/settings", label: "Settings",    icon: "⚙" },
];

export default function Sidebar() {
    const ref = useRef();

    useGSAP(() => {
        gsap.from(ref.current.querySelectorAll("a"), {
            x: -20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
        });
    }, { scope: ref });

    return (
        <aside className={styles.sidebar} ref={ref}>
            <div className={styles.logo}>
                <div className={styles.logoIcon}>🌿</div>
                <span className={styles.logoText}>AgroIntel</span>
            </div>
            <nav>
                {links.map(({ to, label, icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === "/"}
                        className={({ isActive }) =>
                            `${styles.navItem} ${isActive ? styles.active : ""}`
                        }
                    >
                        <span className={styles.icon}>{icon}</span>
                        {label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}