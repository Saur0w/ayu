import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Landing";
import DashboardPage from "./pages/Dashboard";
import AnalyticsPage from "./pages/Analytics";
import SystemLogsPage from "./pages/SystemLogs";
import SettingsPage from "./pages/Settings";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="analytics" element={<AnalyticsPage />} />
                    <Route path="system-logs" element={<SystemLogsPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}