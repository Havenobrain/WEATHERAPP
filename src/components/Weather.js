import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: 'Tbilisi', // Замените на ваш город
                        appid: '677090423d0cec72c3dc2bfdd8b07ceb', // Новый API-ключ OpenWeather
                        units: 'metric',
                    },
                });
                setWeatherData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Не удалось получить данные о погоде');
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="weather-container">
            <h2>Текущая погода в {weatherData.name}</h2>
            <p>Температура: {weatherData.main.temp} °C</p>
            <p>Погода: {weatherData.weather[0].description}</p>
            <p>Влажность: {weatherData.main.humidity}%</p>
        </div>
    );
};

export default Weather;
