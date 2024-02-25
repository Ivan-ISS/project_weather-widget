import './App.css';
import { useState, useEffect } from "react";
import Section from "./Components/Section";
import WidgetBody from "./Components/WidgetBody";
import SearchBar from "./Components/SearchBar";
import BtnLocation from "./Components/BtnLocation";
import InfoWeather from "./Components/InfoWeather";

function App() {
    const [coords, setCoords] = useState({})
    const [city, setCity] = useState('')
    const [dataWeather, setDataWeather] = useState({})

    const handleCoordValue = (coords) => {
        setCoords(coords)
    }

    const handleCityName = (city) => {
        setCity(city)
    }

    const request = () => {
        let url = ''
        if (coords.latitude) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=71785f3da74dc6dd12f7757a1f01cf6e&lang=ru`
        } else if (city !== '') {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71785f3da74dc6dd12f7757a1f01cf6e&lang=ru`
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
                    temp: data.main.temp,
                    cloudiness: data.weather[0].description,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    humidity: data.main.humidity
                })
            })
            .catch(() => {
                console.log('error');
            });
    }

    useEffect(() => {
        console.log(coords)
        console.log(city)
        request()
    }, [coords, city]);

    useEffect(() => {
        if (dataWeather) {
          console.log(dataWeather);
        }
      }, [dataWeather]);

    return (
        <Section>
            <WidgetBody>
                <SearchBar onCityGet={handleCityName} />
                <BtnLocation onCoordsGet={handleCoordValue} />
                {/* { !coords.latitude ? "" : <div>{`${coords.latitude} ${coords.longitude}`}</div> } */}
                { !dataWeather.city ? "" : 
                    <InfoWeather 
                        city={dataWeather.city}
                        cloudiness={dataWeather.cloudiness}
                        temperature={dataWeather.temp}
                        pressure={dataWeather.pressure}
                        wind={dataWeather.wind + 'м/с'}
                        humidity={dataWeather.humidity}
                    /> 
                }
            </WidgetBody>
        </Section>
    );
}

export default App;
