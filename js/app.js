const apiKey="0a58529dd130b7e44a8350d2a89b94b2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let degrees=document.getElementById('degrees');
let cityName=document.getElementById('cityName');
let humidityValue=document.getElementById('humidityValue');
let windSpeedValue=document.getElementById('windSpeedValue');
let weatherImage=document.getElementById('weatherImage');

let searchCity=document.getElementById("searchCity");
let searchIcon=document.getElementById("searchIcon");
let view=document.querySelector('.hidden');
let errorMsg=document.getElementById('errorMsg');

async function forecastWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404)
    {
        errorMsg.style.display='block';
        view.style.display="none";
    }
    else
    {
        let data= await response.json();

        console.log(data);
    
        degrees.innerHTML=Math.round(data.main.temp)+"°C";
        cityName.innerHTML=data.name;
        humidityValue.innerHTML=data.main.humidity+"%";
        windSpeedValue.innerHTML=data.wind.speed+"km/hr";
        if(data.weather[0].main=="Clouds")
        {
            weatherImage.src="img/clouds.png";
        }
        else if(data.weather[0].main=="Clear")
        {
            weatherImage.src="img/clear.png";
        }
        else if(data.weather[0].main=="Drizzle")
        {
            weatherImage.src="img/drizzle.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            weatherImage.src="img/mist.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            weatherImage.src="img/rain.png";
        }
        else if(data.weather[0].main=="Snow")
        {
            weatherImage.src="img/snow.png";
        }

        view.style.display="block";
        errorMsg.style.display='none';
    }

}

searchIcon.addEventListener('click',function(){
    forecastWeather(searchCity.value);
})

console.log("Hello");