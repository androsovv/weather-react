
import './App.css';

import { useState, useEffect, createContext} from 'react';
import Form from '../Form/Form';
import MainScreen from '../MainScreen/MainScreen';

const temperatureContext = createContext();

function App() {
  const [townName, setTownName] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [temperatureNow, setTemperatureNow] = useState('-');
  const [feelsLike, setFeelsLike] = useState('-');
  const [wheather, setWeather] = useState('-');
  const [sunrise, setSunrise] = useState('-');
  const [sunset, setSunset] = useState('-');
  
  // useEffect(() => {
  //   if (isTyping) {
  //     return;
  //   }
  //   getWeather();
  // }, [townName, isTyping]);

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
    <Provider.temperatureContext value={temperatureNow}>
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
    </Provider.temperatureContext>
  );
}

export default App;
