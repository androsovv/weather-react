import './Form.css';

const Form = (props) => {


   return (
      <form className="search">
         <input type="text" className="search__town" placeholder="Input town"/>
         <button className="search__img" type="submit" src="srs/icons/search.svg"/>
      </form>
   )
}

export default Form;