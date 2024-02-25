/* import style from './styles.module.scss'; */

const User = ({city, cloudiness, temperature, pressure, wind, humidity}) => {


   return (
       <div>
            <h2 /* className={st.name} */>
                {city}
            </h2>
            <h3>
                {temperature}
            </h3>
            <div>
                {cloudiness}
            </div>
            <div>
                <div>{pressure}</div>
                <div>{wind.speed}</div>
                <div>{humidity}</div>
            </div>
       </div>
   )
}

export default User