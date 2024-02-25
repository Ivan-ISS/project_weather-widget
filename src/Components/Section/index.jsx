import React from 'react';
import style from './styles.module.scss';

const Section = ({children}) => {

   return (
        <section className={`${style.page__widget} ${style.widget}`}>
            <div className={`${style.widget__container} ${style.container_common}`}>
                <h1 className={style.widget__title}>Виджет с прогнозом погоды</h1>
                {
                    children
                }
            </div>
        </section>
   )
}

export default Section