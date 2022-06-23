import './LeftBottomOptions.css';

const LeftBottomOptions = (props) => {
   return (
   <div className="box__left__options">
      <div data-tab-now className="box__left__options__item active">Now</div>
      <div data-tab-details className="box__left__options__item">Details</div>
      <div data-tab-forecast className="box__left__options__item">Forecast</div>
   </div>
   )
}

export default LeftBottomOptions;