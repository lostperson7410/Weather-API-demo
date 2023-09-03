import './App.css';
import sunny from './asset/icons/sun.png';
import cloudy from './asset/icons/cloudy.png';
import rainy from './asset/icons/rainy.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
const App = () =>{


  const [data, setData] = useState()

  useEffect(() => {
    fetchAPI()

  }, [])
  

  //Create AXIOS GET A WEATHER API 

  //this is API Path
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const fetchAPI = async (city_name) =>{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name ? city_name : "Bangkok"}&appid=${process.env.API_KEY}`)
    setData(res?.data)
  }
  

  return(
    <div className='container'>
      <div className='main_box'>
        <div className='inner_main_box'>
            {
              data?.weather?.map((item)=>(
                <div className='col weather_box'>
                  <div className='weather_title'>{item?.main}</div>
                  <div className='icon_section'>
                    <img alt='iconsimage' className='imageIcons' src={ item?.main === 'Clouds' ? cloudy : item?.main === 'Rain' ? rainy : sunny }/>
                  </div>
                  <div className='weather_Town'>{data?.name}</div>
                  <div className='weather_desc'>
                    <div className='desc_One'>{item?.description}</div>
                    <div>
                    feels_like : {data.main.feels_like}
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}
export default App;
