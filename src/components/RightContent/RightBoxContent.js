import './RightBoxContens.css';

const RightBoxContens = (props) => {
   return (
   <div className="box__right">
      <div className="box__right__added">Added Locations:</div>
      <LocationsList/>
   </div>
   )
}

const LocationsList = () => {
   return (
       <div className="box__right__towns">
          <div className="box__right__towns__item">
             <div className="box__right__towns__item__name">RRRRRR</div>
             <button src="srs/icons/remove-icon.svg" alt="" className="delete"/>
          </div>
       </div>
   )
}

export default RightBoxContens;