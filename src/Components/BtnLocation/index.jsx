import React from "react";
import { useState } from "react";
import style from './styles.module.scss'

const BtnLocation = ({ onCoordsGet }) => {
    let [textContent, setTextContent] = useState('')
    let [latitude, setLatitude] = useState('')
    let [longitude, setLongitude] = useState('')

    const success = (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        onCoordsGet({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    const error = () => {
        setTextContent('Невозможно получить ваше местоположение')
    }

    const handlerClickLocation = () => {
        if (!navigator.geolocation) {
            setTextContent('Geolocation  не поддерживается вашим браузером')
        } else {
            setTextContent('Определение местоположения...')
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    return (
        <div>
            <button 
                className={style.widget__btnLocation}
                type="button"
                onClick={handlerClickLocation}
            >
                Геолокация
                <svg className={style.widget__iconLocation} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z"/>
                </svg>
            </button>
            {
                textContent === "" ?
                "" :
                latitude === "" && longitude === "" ?
                <div>Статус: {textContent}</div> :
                <div>Ваши координаты:<br/> lat: {latitude}, lon: {longitude}</div>
            }
        </div>
    )
}
       
export default BtnLocation