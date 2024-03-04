import React from 'react';
import style from './styles.module.scss';

const WidgetBody = ({ children }) => {
    const childrenArray = React.Children.toArray(children);

   return (
       <div className={style.widget__body}>
            <div className={style.widget__coordinateBlock}>
                {
                    childrenArray[0]
                }
                {
                    childrenArray[1]
                }
            </div>
            <div className={style.widget__infoBlock}>
                {
                    childrenArray[2]
                }
            </div>
            <div className={style.widget__infoBlock}>
                {
                    childrenArray[3]
                }
            </div>
       </div>
   )
}

export default WidgetBody