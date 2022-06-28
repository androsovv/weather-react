import { useState } from "react";

import Details from "../Details/Details";
import LeftBottomOptions from "../LeftBottomOptions/LeftBottomOptions";
import WeatherNow from "../WeatherNow/WeatherNow";
import "./LeftBoxContent.css";

const LeftBoxContent = ({townName,temperatureNow}) => {

   const [toggleState, setToggleState] = useState(1);


   return (
      
      <div className="box__left">
         <Details toggleState={toggleState} setToggleState={setToggleState} townName={townName} temperatureNow={temperatureNow}/>
         <WeatherNow townName={townName} temperatureNow={temperatureNow} toggleState={toggleState} setToggleState={setToggleState}/>
         <LeftBottomOptions toggleState={toggleState} setToggleState={setToggleState}/>
            
         </div>
   )
}

export default LeftBoxContent;
