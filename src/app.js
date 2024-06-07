
function displayWeather(response){
    console.log(response.data)
    let city = response.data.city;
    let temperature = response.data.temperature.current;
    let icon = `<img src="${response.data.condition.icon_url}"
    class="imageIcon"alt="">`
    let feelsLike = response.data.temperature.feels_like;
    let condition= response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let wind =Math.round(response.data.wind.speed);
    
   
    
    
    let timeElement = document.querySelector("#date-time");
    timeElement.innerHTML= formatTime(response.data.time);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML=` ${city.trim()}`;
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML=`${Math.round(temperature)}°`;
    let iconElement = document.querySelector("#iconImage");
    iconElement.innerHTML = icon;
    let feelsLikeElement = document.querySelector("#feelsLike");
    feelsLikeElement.innerHTML=`Feels like ${Math.round(feelsLike)}°`;
    let conditionElement = document.querySelector("#condition");
    conditionElement.innerHTML=condition;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML=`Humidity:${Math.round(humidity)}%`
    let windElement = document.querySelector("#wind");
    windElement.innerHTML=`Wind:${wind}km/h`;

    searchForcast(response.data.city);
    
}

function formatTime(time){
    let now = new Date(time*1000);
    let date = now.getDate();


    let days =[ "Sunday","Monday","Tuesday","Wednesday","Thursday",
        "Friday","Saturday"];
    let CurrentDay= days[now.getDay()];

    let year = now.getFullYear();

    let months =["January","Febuary","March","April","May","June",
        "July","August","September","October","November",
        "December"];
        let currentMonth = months[now.getMonth()];
        
        return`${CurrentDay} ${date} ${currentMonth} ${year}`
}



function displayForcast(response){
    let forcasts = response.data;
    console.log(forcasts);
    let forcast ="";
    response.data.daily.forEach(function(day,index){
    if(index < 6){
        forcast+=`<div class="forcast">
        <div class="day ">${formatForcastDay(day.time)}</div>
        
        <img src="${day.condition.icon_url}"class="forcastIcon">
        
        <div class="temps">
            <span class="max" id="max">${Math.round(day.temperature.maximum)}°</span>
            
            <span class="min" id="min">${Math.round(day.temperature.minimum)}°</span>
    
            </div> 
            </div>`
    }
})

let forcastElement = document.querySelector("#forcast");
forcastElement.innerHTML=forcast;
}

function formatForcastDay(timestamp){
    let day = new Date(timestamp*1000);
    let days =[ "Sun","Mon","Tue","Wed","Thur",
    "Fri","Sat"];
let formatDay= days[day.getDay()];
console.log(formatDay)
return formatDay;
}



function searchForcast(city){
    let apiKey ="93cf0a589b1befff9b43f05fbt79bo02"
    let  apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric` 
    
   
    axios.get(apiUrl).then(displayForcast);
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
displayForcast("Lagos");