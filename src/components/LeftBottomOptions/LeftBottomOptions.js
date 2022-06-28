

import './LeftBottomOptions.css';

const LeftBottomOptions = ({toggleState, setToggleState}) => {

   

   const toggleTab = (index) => {
      setToggleState(index);
   }

   return (
   <div className="box__left__options">
      <div data-tab-now 
      className={toggleState === 1 ? "box__left__options__item active" : "box__left__options__item"} 
      onClick={() => toggleTab(1)}>Now</div>

      <div data-tab-details 
      className={toggleState === 2 ? "box__left__options__item active" : "box__left__options__item"} 
      onClick={() => toggleTab(2)} >Details</div>

      <div data-tab-forecast 
      className={toggleState === 3 ? "box__left__options__item active" : "box__left__options__item"} 
      onClick={() => toggleTab(3)}>Forecast</div>
   </div>
   )
}

export default LeftBottomOptions;