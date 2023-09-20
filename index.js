
const API_KEY = "your api key here"

async function showWeather() {
    
    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
   
    const data = await response.json();
   console.log("weather Data:->", data);
   
   let newPara = document.createElement('p');
   newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

   document.body.appendChild(newPara);
}
showWeather() 
