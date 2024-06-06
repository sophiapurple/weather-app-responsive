function displayWeather(response){
    console.log(response.data)
    let city = response.data.city;
    let temperature = response.data.temperature.current;
    let icon = `<img src="${response.data.condition.icon_url} alt="">`
    let feelsLike = response.data.temperature.feels_like;
    let condition= response.data.condition.description;
    let wind =Math.round(response.data.wind.speed);
    
   
    
    
    let timeElement = document.querySelector("#date-time");
    timeElement.innerHTML= formatTime(date);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML=city.trim();
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML=`${Math.round(temperature)}°`;
    let iconElement = document.querySelector("#icon");
    iconElement = icon;
    let feelsLikeElement = document.querySelector("#feelsLike");
    feelsLikeElement.innerHTML=`Feels like ${Math.round(feelsLike)}°`;
    let conditionElement = document.querySelector("#condition");
    conditionElement.innerHTML=condition;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML=`${wind}km/h`;
    

    
}


function searchCity(city){
    let apiKey = "93cf0a589b1befff9b43f05fbt79bo02";
    let  apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  
    axios.get(apiUrl).then(displayWeather);
}


function handleSubmit(event){
    event.preventDefault();
let cityElement = document.querySelector("#city");
let cityInput= document.querySelector("#city-input-text");
cityElement.innerHTML= cityInput.value;
searchCity(cityInput.value);

}

let form = document.querySelector("#form");
form.addEventListener("submit",handleSubmit);


searchCity("lagos");