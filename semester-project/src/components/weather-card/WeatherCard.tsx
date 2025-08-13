import { getWeatherIcon } from "@/utils/weatherIcons";
import styles from "./weather-card.module.css";

interface WeatherCardProps {
    title: string;
    date: Date;
    minTemp: number;
    maxTemp: number;
    snowfall: number;
    snowDepth: number;
    weatherCode: number;
    currentTemp?: number;
}

export default function WeatherCard({
    title,
    date,
    minTemp,
    maxTemp,
    snowfall,
    snowDepth,
    weatherCode,
    currentTemp,
}: WeatherCardProps) {
    const bigIcon = currentTemp !== undefined ? styles.bigIcon : "";

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3>{title}</h3>

                {!currentTemp && (
                    <span className={styles.date}>
                        {date.toLocaleDateString("en-GB", { weekday: "short" })}
                    </span>
                )}
                <span className={styles.dateNumber}>
                    {date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                </span>

                <div className={`${styles.icon} ${bigIcon}`}>
                    {getWeatherIcon(weatherCode)}
                </div>

                {currentTemp !== undefined && (
                    <div className={styles.currentTemp}>{currentTemp}°C</div>
                )}
            </div>

            <div className={styles.weatherDetails}>
                <span className={styles.minTemp}>{minTemp}°</span>
                <span className={styles.maxTemp}>{maxTemp}°</span>
            </div>

            <div className={styles.snowInfo}>
                <span>❄️ {snowfall} cm</span>
                {snowDepth > 0 && (
                    <span className={styles.snowDepth}>🏔️ {snowDepth}cm</span>
                )}
            </div>
        </div>
    );
}
