let cityConditionIcon = document.getElementById('cityConditionIcon')
let cityName = document.getElementById('cityName')
let cityCondition = document.getElementById('cityCondition')
let cityTemp = document.getElementById('cityTemp')
let cityFeelsLike = document.getElementById('cityFeelsLike')
let cityWindSpeed = document.getElementById('cityWindSpeed')
let cityHumidity = document.getElementById('cityHumidity')
let searchbtn = document.getElementById('searchbtn')
let searchInput = document.getElementById('searchInput')
let forecastContainer = document.getElementById('forecastContainer');

let city = ""

const todayDate = new Date()
console.log(todayDate)

const api = async (city) => {
    if (city === undefined) {
        city = "Boston"
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=df4a82f0766e465cb20153214230410&q=${city}`;
    // yyyy-MM-dd
    // Need 
    const url2 = `http://api.weatherapi.com/v1/forecast.json?key=df4a82f0766e465cb20153214230410&q=${city}&days=3&aqi=no&alerts=no
`

    try {
        const response = await fetch(url);
        const result = await response.json();
        const response2 = await fetch(url2);
        const result2 = await response2.json();
        console.log(result2);
        cityConditionIcon.innerHTML = `<img src="${result.current.condition.icon}" class="iconwidth card-img-top" alt="..." >`
        cityName.innerText = ` ${result.location.name.toUpperCase()}`
        cityCondition.innerText = ` ${result.current.condition.text.toUpperCase()}`
        cityTemp.innerText = `CURRENT TEMP : ${result.current.temp_c}`
        cityFeelsLike.innerText = `FEELS LIKE : ${result.current.feelslike_c}`
        cityWindSpeed.innerText = `WIND SPEED : ${result.current.gust_kph}`
        cityHumidity.innerText = `HUMIDITY :  \u00A0  ${result.current.humidity}`

        renderForecast(result2.forecast.forecastday);

        if (result.current.condition.text === "Sunny") {

            document.body.style.backgroundImage = "url('Images/Sunny.jpg')";
        }

        else if (result.current.condition.text === "Clear") {
            document.body.style.backgroundImage = "url('Images/Clear.jpg')";
        }

        else if (result.current.condition.text === "Partly cloudy" || result.current.condition.text === "Cloudy") {
            document.body.style.backgroundImage = "url('Images/Partlycloudy.jpg')";
        }

        else if (result.current.condition.text === "Overcast") {
            document.body.style.backgroundImage = "url('Images/Overcast.avif')";
        }

        else if (result.current.condition.text === "Mist" || result.current.condition.text === "Fog" || result.current.condition.text === "Freezing fog") {
            document.body.style.backgroundImage = "url('Images/Mist.jpg')";
        }

        else if (result.current.condition.text === "Patchy rain possible" || result.current.condition.text === "Patchy light rain" || result.current.condition.text === "Light rain" || result.current.condition.text === "Moderate rain at times" || result.current.condition.text === "Moderate rain" || result.current.condition.text === "Heavy rain at times" || result.current.condition.text === "Heavy rain" || result.current.condition.text === "Light rain shower" || result.current.condition.text === "Moderate or heavy rain shower" || result.current.condition.text === "Torrential rain shower" || result.current.condition.text === "Patchy light drizzle" || result.current.condition.text === "Light drizzle") {
            document.body.style.backgroundImage = "url('Images/rain.jpg')";
        }

        else if (result.current.condition.text === "Patchy snow possible" || result.current.condition.text === "Blowing snow" || result.current.condition.text === "Patchy light snow" || result.current.condition.text === "Light snow" || result.current.condition.text === "Patchy moderate snow" || result.current.condition.text === "Moderate snow" || result.current.condition.text === "Patchy heavy snow" || result.current.condition.text === "Heavy snow" || result.current.condition.text === "Light snow showers" || result.current.condition.text === "Moderate or heavy snow showers") {
            document.body.style.backgroundImage = "url('Images/snow.jpg')";
        }

        else if (result.current.condition.text === "Patchy sleet possible" || result.current.condition.text === "Light sleet" || result.current.condition.text === "Moderate or heavy sleet" || result.current.condition.text === "Light sleet showers" || result.current.condition.text === "Moderate or heavy sleet showers" || result.current.condition.text === "Ice pellets" || result.current.condition.text === "Light showers of ice pellets" || result.current.condition.text === "Moderate or heavy showers of ice pellets") {
            document.body.style.backgroundImage = "url('Images/Icepellets.avif')";
        }

        else if (result.current.condition.text === "Patchy freezing drizzle possible" || result.current.condition.text === "Freezing drizzle" || result.current.condition.text === "Heavy freezing drizzle" || result.current.condition.text === "Light freezing rain" || result.current.condition.text === "Moderate or heavy freezing rain") {
            document.body.style.backgroundImage = "url('Images/freezingdrizzle.jpg')";
        }

        else if (result.current.condition.text === "Blizzard") {
            document.body.style.backgroundImage = "url('Images/Blizzard.jpg')";
        }

        else if (result.current.condition.text === "Thundery outbreaks possible") {
            document.body.style.backgroundImage = "url('Images/thundery.jpg')";
        }

        else if (result.current.condition.text === "Patchy light rain with thunder" || result.current.condition.text === "Moderate or heavy rain with thunder") {
            document.body.style.backgroundImage = "url('Images/rainwiththnder.jpg')";
        }


        else if (result.current.condition.text === "Patchy light snow with thunder" || result.current.condition.text === "Moderate or heavy snow with thunder") {
            document.body.style.backgroundImage = "url('Images/snowwiththunder.jpg')";
        }


    } catch (error) {
        console.error(error);
        console.log(`${city} not found`)
    }


}

const renderForecast = (forecastData) => {
    forecastContainer.innerHTML = '';
    forecastData.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('card', 'forecastCard',"me-4","mb-4");
        forecastCard.style.width = '18rem';
        forecastCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title text-center">${formatDate(day.date)}</h5>
                <div class="text-center">
                    <img src="${day.day.condition.icon}" class="iconwidth" alt="..." />
                </div>
                <div class="text-center mt-2">
                    <p>${day.day.condition.text}</p>
                    <p>Max Temp: ${day.day.maxtemp_c}°C</p>
                    <p>Min Temp: ${day.day.mintemp_c}°C</p>
                    <p>Humidity: ${day.day.avghumidity}%</p>
                    <p>Chance of Rain: ${day.day.daily_chance_of_rain}%</p>
                </div>
            </div>
        `;
        forecastContainer.appendChild(forecastCard);
    });
};

const formatDate = (dateString)=>{
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

searchbtn.addEventListener("click", (e, city) => {
    e.preventDefault();
    city = searchInput.value
    api(city)
});

window.onload = api()