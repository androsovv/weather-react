import './Details.css';

import { useContext } from 'react';
import { TemperatureContext } from '../App/App';

const Details = ({toggleState, townName}) => {

    const context = useContext(TemperatureContext);

    return (
        <div className="box__left__tabs__item">
               <div className={toggleState === 2 ? "box__left__tabs__two show" : "box__left__tabs__two"}>
                  <div className="box__left__tabs__two__town town__tabs town__name">{townName}</div>
                  <div className="box__left__tabs__two__temperature temperature__details">Temperature: {context + "°"}</div>
                  <div className="box__left__tabs__two__feels feels__like__deatils">Feels like:</div>
                  <div className="box__left__tabs__two__weather weather__deatails">Wheather:</div>
                  <div className="box__left__tabs__two__sunrise sunrise">Sunrise:</div>
                  <div className="box__left__tabs__two__sunset sunset">Sunset:</div>
               </div>
        </div>
    )
}

export default Details;