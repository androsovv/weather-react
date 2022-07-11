import './RightBoxContens.css';
import {useDispatch, useSelector} from "react-redux";

const RightBoxContens = () => {
   return (
   <div className="box__right">
      <div className="box__right__added">Added Locations:</div>
      <LocationsList/>
   </div>
   )
}

const LocationsList = () => {
    const dispatch = useDispatch();
    const favoriteCities = useSelector(state => state.favoriteLocations);


    const deleteTown = (index) => {
        dispatch({type:"DELETE_TOWN", name: index});
    }

   return (

       <div className="box__right__towns">
           {favoriteCities.length > 0 ? favoriteCities.map((item, index) =>
                   <div key={index} className="box__right__towns__item">
                       <div className="box__right__towns__item__name">{item}</div>
                       <button src="srs/icons/remove-icon.svg" alt=""
                               className="delete"
                               onClick={() => deleteTown(index)}
                       />
                   </div>)
               : <div>Нет добавленых городов</div>
           }

       </div>
   )
}

export default RightBoxContens;