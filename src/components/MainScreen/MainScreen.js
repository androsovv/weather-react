

import LeftBoxContent from "../LeftContent/LeftBoxContent";
import RightBoxContens from "../RightContent/RightBoxContent";
import "./MainScreen.css";

const MainScreen = ({townName, setTownName}) => {
   return (
      <div className="box__content">
         <LeftBoxContent 
         townName={townName} 
         setTownName={setTownName}/>
         <RightBoxContens/>
         
      </div>
   )
}

export default MainScreen;