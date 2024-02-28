import React from "react";
import { useState } from "react";
import style from './styles.module.scss'

const SearchBar = ({ onCityGet }) => {
    const [messege, setMessage] = useState(null)
    const [inputValue, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setMessage(inputValue)
            onCityGet(inputValue)
            setInput('')
        }
    }

    const handlerClickSearch = () => {
        setMessage(inputValue)
        onCityGet(inputValue)
        setInput('')
    }

    return (
        <div>
            <div className={style.widget__searchBar}>
                <input
                    className={style.widget__searchLine}
                    placeholder="Название города или села"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className={style.widget__btnSearch}
                    onClick={handlerClickSearch}
                    type="button"
                >
                    <svg className={style.widget__iconSearch} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                    </svg>
                </button>
            </div>
            {
                inputValue === "" && (messege === null || messege === "") ?
                "" :
                inputValue !== "" && messege === null ?
                <div>Идет набор текста…</div> :
                <div>Вы ввели город: {messege}</div>
            }
        </div>
    )
}
       
export default SearchBar