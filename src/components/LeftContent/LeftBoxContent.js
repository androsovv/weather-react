

import LeftBottomOptions from "../LeftBottomOptions/LeftBottomOptions";
import "./LeftBoxContent.css";

const LeftBoxContent = (props) => {
   return (
      <div className="box__left">

            <div className="box__left__tabs__item">
               
               <div className="box__left__tabs__one">

                  <div className="box__left__top temperature__now">-°</div>

                  <div className="box__left__middle"></div>

                  <div className="box__left__bottom">
                     <div className="box__left_bottom__town town__name town__name__now">Choose Town</div>
                     <img src="../../icons/Shape.svg" alt="" className="box__left_bottom__favorite"/>
                  </div>
               </div>
            </div>
            <LeftBottomOptions/>
         </div>
   )
}

export default LeftBoxContent;
