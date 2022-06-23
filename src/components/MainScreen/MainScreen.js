

import LeftBoxContent from "../LeftContent/LeftBoxContent";
import RightBoxContens from "../RightContent/RightBoxContent";
import "./MainScreen.css";

const MainScreen = (props) => {
   return (
      <div className="box__content">
         <LeftBoxContent/>
         <RightBoxContens/>
         
      </div>
   )
}

export default MainScreen;