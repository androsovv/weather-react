import './Details.css';


const Details = () => {

    return (
        <div className="box__left__tabs__item">
               <div className="box__left__tabs__two">
                  <div className="box__left__tabs__two__town town__tabs town__name">Choose Town</div>
                  <div className="box__left__tabs__two__temperature temperature__details">Temperature: </div>
                  <div className="box__left__tabs__two__feels feels__like__deatils">Feels like:</div>
                  <div className="box__left__tabs__two__weather weather__deatails">Wheather:</div>
                  <div className="box__left__tabs__two__sunrise sunrise">Sunrise:</div>
                  <div className="box__left__tabs__two__sunset sunset">Sunset:</div>
               </div>
        </div>
    )
}

export default Details;