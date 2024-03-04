import './App.css';
import { useState, useEffect } from "react";
import { dateFormat } from "../src/Modules/dateFormat";
import Section from "./Components/Section";
import WidgetBody from "./Components/WidgetBody";
import SearchBar from "./Components/SearchBar";
import BtnLocation from "./Components/BtnLocation";
import BtnSwitch from "./Components/BtnSwitch";
import InfoWeather from "./Components/InfoWeather";
import InfoWeatherFiveDays from "./Components/InfoWeatherFiveDays";

function App() {
    const [coords, setCoords] = useState({})
    let [period, setPeriod] = useState(true)
    const [loading, setLoading] = useState('')
    const [city, setCity] = useState('')
    const [dataWeather, setDataWeather] = useState({})
    const [dataWeatherFiveDays, setDataWeatherFiveDays] = useState({ city: '', list: [] })
    const apiKey = '71785f3da74dc6dd12f7757a1f01cf6e'

    const handleCoordValue = (coords) => {
        setCoords(coords)
    }

    const handlerClickSwitch = (period) => {
        setPeriod(period)
    }

    const handleCityName = (city) => {
        setCity(city)
    }

    const request = () => {
        let url = ''
        if (coords.latitude && coords.longitude) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&lang=ru`
            setCoords({})
        } else if (city !== '') {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru`
            setCity('')
        }
        fetch(url)
            .then((response) => {
                //console.log('response', response);
                const result = response.json();
                return result;
            })
            .then((data) => {
                //console.log(data)
                setDataWeather({
                    city: data.name,
                    temperature: Math.round(data.main.temp - 273),
                    temperatureMin: Math.round(data.main.temp_min - 273),
                    temperatureMax: Math.round(data.main.temp_max - 273),
                    cloudiness: data.weather[0].description,
                    pressure: Math.round(data.main.pressure * 0.7500637554192),
                    wind: data.wind.speed,
                    humidity: data.main.humidity,
                    codeIcon: data.weather[0].icon,
                    date: dateFormat(data.dt)
                })
                setLoading('')
            })
            .catch(() => {
                console.log('error');
                if (coords.latitude || coords.longitude || city) { setLoading('Информация не найдена...') }
            });
    }

    const requestFiveDay = () => {
        let url = ''
        if (coords.latitude && coords.longitude) {
            url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&lang=ru`
            setCoords({})
        } else if (city !== '') {
            url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=ru`
            setCity('')
        }
        fetch(url)
            .then((response) => {
                // console.log('response', response);
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setDataWeatherFiveDays({ city: data.city.name, /* list: data.list */ list: [] })
                for (let i = 0; i < data.list.length; i++) {
                    setDataWeatherFiveDays(prevState => ({ 
                        city: data.city.name,
                        list: [...prevState.list, { 
                            date: dateFormat(data.list[i].dt),
                            temperature: Math.round(data.list[i].main.temp - 273),
                            temperatureMin: Math.round(data.list[i].main.temp_min - 273),
                            temperatureMax: Math.round(data.list[i].main.temp_max - 273),
                            pressure: Math.round(data.list[i].main.pressure * 0.7500637554192),
                            humidity: data.list[i].main.humidity,
                            cloudiness: data.list[i].weather[0].description,
                            codeIcon: data.list[i].weather[0].icon,
                            wind: data.list[i].wind.speed,
                        }]
                    }));
                }
                setLoading('')
            })
            .catch(() => {
                console.log('error на 5 дней');
                if (coords.latitude || coords.longitude || city) { setLoading('Информация не найдена...') }
            });
    }

    useEffect(() => {
        /* console.log(coords)
        console.log(city) */
        if (coords.latitude || coords.longitude || city) { setLoading('Идет поиск данных о погоде...') }
        request()
        requestFiveDay()
    }, [coords, city]);

    useEffect(() => {
        console.log(dataWeatherFiveDays.city);
        if (dataWeather) {
            /* console.log(dataWeather); */
        }
        if (dataWeatherFiveDays && dataWeatherFiveDays.list.length > 39) {
            console.log(dataWeatherFiveDays.list);
        }
      }, [dataWeather, dataWeatherFiveDays]);

    return (
        <Section>
            <WidgetBody>
                <SearchBar onCityGet={handleCityName} />
                <BtnLocation onCoordsGet={handleCoordValue} />
                <BtnSwitch onPeriodGet={handlerClickSwitch} />
                {/* { !dataWeather.city ? "" : <InfoWeather {... dataWeather} /> } */}
                {/* { !dataWeatherFiveDays.city ? "" : <InfoWeatherFiveDays {... dataWeatherFiveDays.list[0]} city={dataWeatherFiveDays.city} /> } */}
                {/* { !dataWeatherFiveDays.list ? "" : <InfoWeatherFiveDays list={dataWeatherFiveDays.list} city={dataWeatherFiveDays.city} /> } */}
                {
                    !dataWeather.city || loading !== ""
                    ? loading
                    : period
                    ? <InfoWeather {... dataWeather} />
                    : !dataWeatherFiveDays.list ? loading : <InfoWeatherFiveDays list={dataWeatherFiveDays.list} city={dataWeatherFiveDays.city} />
                }
            </WidgetBody>
        </Section>
    );
}

export default App;
