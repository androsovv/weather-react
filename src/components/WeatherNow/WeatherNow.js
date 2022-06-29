import './WeatherNow.css';

import { useContext } from 'react';

const WeatherNow = ({temperatureNow, townName, toggleState}) => {
   return (
      <div className="box__left__tabs__item"> 
               <div className={toggleState === 1 ? "box__left__tabs__one show" : "box__left__tabs__one"}>

                  <div className="box__left__top temperature__now">{temperatureNow + '°'}</div>

                  <div className="box__left__middle"></div>

                  <div className="box__left__bottom">
                     <div className="box__left_bottom__town town__name town__name__now">{townName}</div>
                     <img src="../../icons/Shape.svg" alt="" className="box__left_bottom__favorite"/>
                  </div>
               </div>
            </div>
   )
}

export default WeatherNow;