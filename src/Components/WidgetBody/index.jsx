import React from 'react';
import style from './styles.module.scss';

const WidgetBody = ({children}) => {

   return (
       <div className={style.widget__body}>
            <div className={style.widget__coordinateBlock}>
                {
                    children
                }
            </div>
       </div>
   )
}

export default WidgetBody