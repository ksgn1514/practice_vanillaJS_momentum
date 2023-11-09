
const API_KEY = "ff4f6e237bf80fee6dcd39e11d2fb3c4"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather #spanWeather")
            const city = document.querySelector("#weather #spanGeo")
            const weatherIcon = document.querySelector("#weather #wicon") 

            city.innerText = "Location: " + data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;

            
            var iconcode = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            
            weatherIcon.setAttribute("src", iconurl);
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);