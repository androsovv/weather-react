import './Form.css';

const Form = ({townName, setTownName, getWeather, setIsTyping}) => {

   function handlerSubmit(e) {
      e.preventDefault();
      // if (!townName.trim()) return;
      getWeather();
   }

   return (

      <form className="search">

         <input 
         type="text" 
         className="search__town" 
         placeholder="Input town"
         value={townName}
         onChange={(event) => {
            setIsTyping(true);
            setTownName(event.target.value);
         }}/>

         <button 
         className="search__img" 
         type="submit" 
         src="srs/icons/search.svg"
         onClick={handlerSubmit}/>
      </form>
   )
}

export default Form;