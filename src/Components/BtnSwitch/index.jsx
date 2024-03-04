import React from "react";
import { useState } from "react";
import style from './styles.module.scss'

const BtnSwitch = ({ onPeriodGet }) => {
    let [period, setPeriod] = useState(false)

    const handlerClickSwitch = () => {
        setPeriod(v => !v)
        onPeriodGet(period)
    }

    return (
            <button 
                className={style.widget__btnSwitch}
                type="button"
                onClick={handlerClickSwitch}
            >
            { period === false ? "Показать погоду на 5 суток" : "Показать погоду сейчас" }
            </button>
    )
}
       
export default BtnSwitch