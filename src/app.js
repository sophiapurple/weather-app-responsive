function handleSubmit(event){
    event.preventDefault();
let cityElement = document.querySelector("#city");
let cityInput= document.querySelector("#city-input-text");
cityElement.innerHTML= cityInput.value;
searchCity(cityInput,value);



}

let form = document.querySelector("#form");
form.addEventListener("submit",handleSubmit);