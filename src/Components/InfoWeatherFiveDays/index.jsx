import React from 'react';
import style from './styles.module.scss';

const InfoWeatherFiveDays = ({ list, city }) => {
    console.log(list, city)

    return (
        <div className={style.widget__weatherFiveDays}>
            <div>
                <h2 className={style.widget__city}>
                    {city}
                </h2>
            </div>
                <div className={style.widget__weatherTable}>  
                    <div className={style.widget__tableColumn}>
                            {list.map((element, index) => {
                                return (
                                    <>
                                    {(index === 0) ||
                                    (index > 0 && (element.date.currentDate !== list[index - 1].date.currentDate)) ?
                                        <div className={style.widget__dayWeek}>
                                                <>
                                                    <div className={style.widget__date}>
                                                        <div className={style.widget__day}>{element.date.dayWeek}</div>
                                                        <div className={style.widget__currentDate}>{element.date.currentDate}</div>
                                                    </div>
                                                    <div className={style.widget__line}>
                                                        {list.map((elementJ, index) => {
                                                            return (
                                                                <>
                                                                {elementJ.date.currentDate === element.date.currentDate && (['0:00', '15:00', '21:00'].includes(elementJ.date.currentTime)) ?
                                                                    <div className={ `${style.widget__tableRow} ${elementJ.date.currentTime === '15:00' ? style.widget__tableRowLight : style.widget__tableRowDark}` }>
                                                                        <div className={style.widget__time}>
                                                                            {elementJ.date.currentTime}
                                                                        </div>
                                                                        <div className={style.widget__cloudinessImg}>
                                                                            <img className={style.widget__cloudinessIcon} src={`https://openweathermap.org/img/wn/${elementJ.codeIcon}@2x.png`} title={element.cloudiness} alt="cloudiness" />
                                                                        </div>
                                                                        <div className={style.widget__cloudiness}>
                                                                            {elementJ.cloudiness}
                                                                        </div>
                                                                        <div className={ `${elementJ.temperature > 0 ? style.widget__temperaturePlus : style.widget__temperatureMinus} ${style.widget__temperatureCurrent}` }>
                                                                            {elementJ.temperature}&#176;
                                                                        </div>
                                                                        <div className={style.widget__pressure}>
                                                                            {elementJ.pressure + " мм рт.ст."}
                                                                        </div>
                                                                        <div className={style.widget__humidity}>
                                                                            {elementJ.humidity + "%"}
                                                                        </div>
                                                                        <div className={style.widget__wind}>
                                                                            {Math.round(elementJ.wind) + " м/с"}
                                                                        </div>
                                                                    </div>
                                                                : null}
                                                                </>
                                                            )}
                                                        )}
                                                    </div>
                                                </>
                                        </div>
                                        : null}
                                    </>
                                )}
                            )}
                    </div>
                </div>
        </div>
    )
}

export default InfoWeatherFiveDays