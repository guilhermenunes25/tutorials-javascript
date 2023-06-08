let weather = {
    apiKey: "8ec731e332e3b17fa924b9320c7672ce",
    fetchWeather: function(city) {
        let apiKey = this.apiKey;
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&appid=" 
        + apiKey
        )
        .then((response) => response.json())
        .then((data) => {
            this.displayWeather(data);
        })
        
    },
    displayWeather:function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const tempCelsius = Math.round(temp - 273.15);
        
        console.log(name, icon, description, tempCelsius, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = tempCelsius + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";


    }, 
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
})