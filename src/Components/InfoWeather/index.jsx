import React from 'react';
import style from './styles.module.scss';

const InfoWeather = ({ city, cloudiness, temperature, temperatureMin, temperatureMax, pressure, wind, humidity, codeIcon, date }) => {

   return (
       <div className={style.widget__weatherToday}>
            <div>
                <h2 className={style.widget__city}>
                    {city}
                </h2>
                <p>
                    {`${date.currentDate} ${date.currentTime} мск`}
                </p>
                <p>
                    {date.dayWeek}
                </p>
            </div>
            <div>
                <p className={style.widget__cloudiness}>
                    {cloudiness}
                </p>
                <img src={`https://openweathermap.org/img/wn/${codeIcon}@2x.png`} alt="cloudiness" />
            </div>
            <div className={ `${temperature > 0 ? style.widget__temperaturePlus : style.widget__temperatureMinus} ${style.widget__temperatureCurrent}` }>
                {temperature} &#176;C
                <p className={style.widget__temperatureExt}>
                    <span className={ temperatureMin > 0 ? style.widget__temperaturePlus : style.widget__temperatureMinus }>{temperatureMin} / </span>
                    <span className={ temperatureMax > 0 ? style.widget__temperaturePlus : style.widget__temperatureMinus }>{temperatureMax}</span>
                </p>
            </div>
            <div>
                <div>Давление: {pressure} мм рт. ст.</div>
                <div>Влажность: {humidity} %</div>
                <div>Ветер: {wind} м/с</div>
            </div>
       </div>
   )
}

export default InfoWeather