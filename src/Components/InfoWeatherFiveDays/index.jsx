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
                                                        <div>{element.date.dayWeek}</div>
                                                        <div>{element.date.currentDate}</div>
                                                    </div>
                                                    {list.map((elementJ, index) => {
                                                        return (
                                                            <>
                                                            {elementJ.date.currentDate === element.date.currentDate && (['0:00', '15:00', '21:00'].includes(elementJ.date.currentTime)) ?
                                                                <div className={style.widget__tableRow}>
                                                                    <div className={style.widget__time}>
                                                                        {elementJ.date.currentTime}
                                                                    </div>
                                                                    <div>
                                                                        <img className={style.widget__cloudinessImg} src={`https://openweathermap.org/img/wn/${elementJ.codeIcon}@2x.png`} title={element.cloudiness} alt="cloudiness" />
                                                                    </div>
                                                                    <div className={ `${elementJ.temperature > 0 ? style.widget__temperaturePlus : style.widget__temperatureMinus} ${style.widget__temperatureCurrent}` }>
                                                                        {elementJ.temperature}&#176;
                                                                    </div>
                                                                </div>
                                                            : null}
                                                            </>
                                                        )}
                                                    )}
                                                </>
                                        </div>
                                        : null}
                                        {/* <div className={style.widget__tableRow}>
                                            <div className={style.widget__time}>
                                                {element.date.currentTime}
                                            </div>
                                            <div>
                                                <img className={style.widget__cloudinessImg} src={`https://openweathermap.org/img/wn/${element.codeIcon}@2x.png`} title={element.cloudiness} alt="cloudiness" />
                                            </div>
                                            <div className={ `${element.temperature > 0 ? style.widget__temperaturePlus : style.widget__temperatureMinus} ${style.widget__temperatureCurrent}` }>
                                                {element.temperature}&#176;
                                            </div>
                                        </div> */}
                                    </>
                                )}
                            )}
                    </div>
                </div>
        </div>
    )
}

export default InfoWeatherFiveDays