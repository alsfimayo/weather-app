const apiKey='418a3f3eaa55ce1c3d0622ea06ab069a';

const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search-btn');
const img=document.querySelector('.weather-icon');
const weatherBtn=document.querySelector('.weather');
const Error=document.querySelector('.error');
async function checkWeather(city) {
    
    const response=await fetch(apiUrl+ city + `&appid=${apiKey}`);

    
    
    if(response.status==404){
        Error.style.display='block';
        weatherBtn.style.display='none';
    }
    
    else{
        var data=await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°C';

        document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
        document.querySelector('.wind-text').innerHTML=data.wind.speed +'km/h';
        if(data.weather[0].main=='Smoke'){
        img.src='images/clear.png';
    }
    else if(data.weather[0].main=='cloudy'){
        img.src='images/clouds.png';

    }
    Error.style.display='none';
    weatherBtn.style.display='block';

    }

    
    
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
    

})