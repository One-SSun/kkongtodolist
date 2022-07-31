const API_KEY = "fe8e82dde88ceb230fd05a8a90233665";

function geoYes(userPosition){
    const latitude = userPosition.coords.latitude;
    const longitude = userPosition.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const userWeather = document.querySelector(".weather span:last-child");
        const userCity = document.querySelector(".weather span:first-child");
        userWeather.innerText = `${data.weather[0].main}`;
        userCity.innerText = `${data.name},`;
    });
}

function geoNo(){
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(geoYes, geoNo);