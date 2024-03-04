import React from "react";
import { useState } from "react";
import style from './styles.module.scss'

const BtnSwitch = ({ onPeriodGet }) => {
    let [period, setPeriod] = useState(true)

    const handlerClickSwitch = () => {
        setPeriod(v => !v)
        onPeriodGet(period)
    }

    return (
            <button 
                className={style.widget__btnLocation}
                type="button"
                onClick={handlerClickSwitch}
            >
            { period === true ? "5 суток" : "Сейчас" }
            </button>
    )
}
       
export default BtnSwitch