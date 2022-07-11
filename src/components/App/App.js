
import './App.css';

import { useState, createContext} from 'react';
import Form from '../Form/Form';
import MainScreen from '../MainScreen/MainScreen';
import {useDispatch, useSelector} from "react-redux";

export const TemperatureContext = createContext();


function App() {

  const [townName, setTownName] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [temperatureNow, setTemperatureNow] = useState('-');




  async function getWeather() {
    const serverUrl = 'https://api.openweathermap.org/data/2.5/weather',
       apiKey = 'e6ca4f582a85a52b47aa34c1cb1f9804',
       url = `${serverUrl}?q=${townName}&appid=${apiKey}`;

   try {
    const weatherResponse = await fetch(url);
    const response =  await weatherResponse.json();

    setTemperatureNow(convertTemperature(response.main.temp));
    setTownName(response.name);
    console.log(response);
   } catch (err) {
    alert(err);
   }
  }

  function convertTemperature(temp) {
    return Math.round(temp - 273.15);
 }

  return (
    <TemperatureContext.Provider value={temperatureNow}>
      <div className="App">
          <Form 
          townName={townName} 
          setTownName={setTownName}
          getWeather={getWeather}
          isTyping={isTyping}
          setIsTyping={setIsTyping}
          />
          <MainScreen 
          townName={townName} 
          setTownName={setTownName}
          temperatureNow={temperatureNow}/>
      </div>
    </TemperatureContext.Provider>
  );
}

export default App;
