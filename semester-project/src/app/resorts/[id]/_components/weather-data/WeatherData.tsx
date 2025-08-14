"use client";

import { useEffect, useState } from "react";
import styles from "./weather-data.module.css";
import Loading from "@/components/loading/Loading";
import WeatherCard from "@/components/weather-card/WeatherCard";

export default function WeatherData({ lat, lon }: { lat: number; lon: number }) {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeather() {
            setLoading(true);
            try {
                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,snowfall_sum,weathercode,snow_depth_max&forecast_days=5&timezone=Europe%2FZagreb`);
                const data = await res.json();
                setWeather(data);
            } catch (error) {
                console.error("Failed to fetch weather:", error);
                setWeather(null);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, [lat, lon]);

    if (loading) return <Loading />
    if (!weather || !weather.current_weather) return <p>Weather unavailable</p>;

    const {
        current_weather: { temperature, weathercode },
        daily: {
            time,
            temperature_2m_max,
            temperature_2m_min,
            snowfall_sum,
            weathercode: dailyWeatherCode,
            snow_depth_max,
        },
    } = weather;

    return (
        <div className={styles.container}>
            <h2>Weather report</h2>

            <div className={styles.weatherContainer}>

                <div className={styles.currentDayContainer}>
                    <WeatherCard
                        title="Today"
                        date={new Date()}
                        minTemp={temperature_2m_min[0]}
                        maxTemp={temperature_2m_max[0]}
                        snowfall={snowfall_sum[0]}
                        snowDepth={snow_depth_max[0]}
                        weatherCode={weathercode}
                        currentTemp={temperature}
                    />
                </div>

                <div className={styles.forecastContainer}>
                    <h3 className={styles.forecastTitle}>5-Day Forecast</h3>
                    <div className={styles.forecastDays}>
                        {time.map((day: string, index: number) => (
                            <WeatherCard
                                key={day}
                                title=""
                                date={new Date(day)}
                                minTemp={temperature_2m_min[index]}
                                maxTemp={temperature_2m_max[index]}
                                snowfall={snowfall_sum[index]}
                                snowDepth={snow_depth_max[index]}
                                weatherCode={dailyWeatherCode[index]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
