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
searchCity(cityInput,value);

}

let form = document.querySelector("#form");
form.addEventListener("submit",handleSubmit);