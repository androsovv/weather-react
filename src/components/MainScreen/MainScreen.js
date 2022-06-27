

import LeftBoxContent from "../LeftContent/LeftBoxContent";
import RightBoxContens from "../RightContent/RightBoxContent";
import "./MainScreen.css";

const MainScreen = ({townName, setTownName, temperatureNow}) => {
   return (
      <div className="box__content">
         <LeftBoxContent 
         townName={townName} 
         setTownName={setTownName} 
         temperatureNow={temperatureNow}/>
         <RightBoxContens/>
         
      </div>
   )
}

export default MainScreen;