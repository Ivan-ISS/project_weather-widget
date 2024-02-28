import React from 'react';
import style from './styles.module.scss';

const InfoWeatherFiveDays = ({ city, cloudiness, temperature, temperatureMin, temperatureMax, pressure, wind, humidity, codeIcon, date }) => {

    return (
        <div className={style.widget__weatherFiveDays}>
            <div>
                <h2 className={style.widget__city}>
                    {city}
                </h2>
            </div>
            <div className={style.widget__weatherTable}>
                <div className={style.widget__tableColumn}>
                    <div className={style.widget__dayWeek}>
                        <div>{date.dayWeek}</div>
                        <div>{date.currentDate}</div>
                    </div>
                    <div className={style.widget__tableRow}>
                        <div className={style.widget__time}>
                            {date.currentTime}
                        </div>
                        <div>
                            <img className={style.widget__cloudinessImg} src={`https://openweathermap.org/img/wn/${codeIcon}@2x.png`} title={cloudiness} alt="cloudiness" />
                        </div>
                        <div className={ `${temperature > 0 ? style.widget__temperaturePlus : style.widget__temperatureMinus} ${style.widget__temperatureCurrent}` }>
                            {temperature}&#176;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoWeatherFiveDays