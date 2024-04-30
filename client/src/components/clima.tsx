import React, { useEffect, useState } from 'react';
import "../style/clima.css"
import clearImage from '/img_clima/clear.png';
import cloudImage from '/img_clima/cloud.png';
import mistImage from '/img_clima/mist.png';
import rainImage from '/img_clima/rain.png';
import snowImage from '/img_clima/snow.png';
import stormImage from '/img_clima/tormenta.png';
import defaultImage from '/img_clima/404.png';

const apiKey = '4a2a16afca706b0caca04c994f81284d';
const city_name = 'formosa';

interface WeatherData {
    main: {
        humidity: number;
        temp: number;
    };
    weather: {
        description: string;
    }[];
    wind: {
        speed: number;
    };
    rain?: {
        '1h'?: number;
        '3h'?: number;
    };
}

interface HourlyForecast {
    dt: number;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
    }[];
    wind: {
        speed: number;
    };
    rain?: {
        '3h'?: number;
    };
}

const WeatherComponent: React.FC = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [hourlyForecast, setHourlyForecast] = useState<HourlyForecast[]>([]);

    useEffect(() => {
        const getWeatherData = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            setWeather(data);
        };

        const fetchHourlyForecast = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            setHourlyForecast(data.list);
        };

        getWeatherData().catch(error => console.error('Error al obtener datos meteorológicos actuales:', error));
        fetchHourlyForecast().catch(error => console.error('Error al obtener datos de pronóstico por horas:', error));
    }, []);

    const createDayStructure = (date: Date, imageUrl: string, description: string, temperature: number, humidity: number, windSpeed: number, rain: number): JSX.Element => {
        const formattedDate = `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`;
        const formattedTime = date.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit' });

        return (
            <div className="day" key={date.getTime()}>
                <h4>{formattedDate} {formattedTime}</h4>
                <img src={imageUrl} alt={description} />
                <p>Description: {description}</p>
                <div className="Temperatura">Temperature: {temperature} °C</div>
                <div className="info-container">
                    <div className="humedad">
                        <p>Humidity: {humidity}%</p>
                    </div>
                    <div className="viento">
                        <p>Wind Speed: {windSpeed} m/s</p>
                        <p>Rain: {rain} mm</p>
                    </div>
                </div>
            </div>
        );
    };

    const getMonthName = (monthIndex: number): string => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[monthIndex];
    };

    const getImageFileName = (description: string): string => {
        const lowercaseDescription = description.toLowerCase();
        switch (true) {
            case lowercaseDescription.includes('clear'):
                return clearImage;
            case lowercaseDescription.includes('cloud'):
                return cloudImage;
            case lowercaseDescription.includes('mist'):
                return mistImage;
            case lowercaseDescription.includes('rain'):
                return rainImage;
            case lowercaseDescription.includes('snow'):
                return snowImage;
            case lowercaseDescription.includes('storm'):
                return stormImage;
            default:
                return defaultImage; // Imagen predeterminada
        }
    };

    return (
        <div className="weather-container" id="weatherContainer">
            {weather && (
                <>
                    {createDayStructure(new Date(), getImageFileName(weather.weather[0].description), weather.weather[0].description, weather.main.temp, weather.main.humidity, weather.wind.speed, weather.rain ? weather.rain['1h'] || 0 : 0)}
                    {hourlyForecast.map(hour => createDayStructure(new Date(hour.dt * 1000), getImageFileName(hour.weather[0].description), hour.weather[0].description, hour.main.temp, hour.main.humidity, hour.wind.speed, hour.rain ? hour.rain['3h'] || 0 : 0))}
                </>
            )}
        </div>
    );
};

export default WeatherComponent;
