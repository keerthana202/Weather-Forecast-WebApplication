      //Api details
        const weatherApi = {
            key : "75816751e6b891f08181f25c7f69e532",
            baseUrl : "https://api.openweathermap.org/data/2.5/weather"
        };
        //getting city name from user
        const inputcity = document.getElementById('inputcityid');
        inputcity.addEventListener('keypress',(event) =>{
            if(event.keyCode==13){
            getweatherreport(inputcity.value); //calling function
            }
        });
        // fetching details from openweather API
        function getweatherreport(cityname){
            fetch(`${weatherApi.baseUrl}?q=${cityname}&appid=${weatherApi.key}&units=metric`)
            .then(weather =>{
                return weather.json();
            }).then(showweatherreport);
        }
        //Showing details on screen
        function showweatherreport(weather){
            let cityname = document.getElementById('city');
            cityname.innerText= `${weather.name}, ${weather.sys.country}`;

            let temperature = document.getElementById('temp');
            temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

            let weathertype = document.getElementById('weather');
            weathertype.innerText=`${weather.weather[0].main}`;
            
            let ddate= document.getElementById('date');
            var nowDate = new Date(); 
            var date = nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear(); 
            ddate.innerText=`${date}`;
            
            let weathericon = document.getElementById('wicon'); 
            iconurl='http://openweathermap.org/img/wn/';
            idicon=`${weather.icon}`;
            source=`${iconurl}${weather.weather[0].icon}.png`;
            weathericon.setAttribute("src",source);

            if (weathertype.textContent=='Clear'){
              document.body.style.backgroundImage="url('./Assets/clear.jpg')";
            }
            else if(weathertype.textContent=='Thunderstorm'){
              document.body.style.backgroundImage="url('./Assets/thunderstrom.jpg')";
            }
            else if(weathertype.textContent=='Snow'){
              document.body.style.backgroundImage="url('./Assets/snow.jpg')";
            }
            else if(weathertype.textContent=='Clouds'){
              document.body.style.backgroundImage="url('./Assets/clouds.jpg')";
            }
            else if(weathertype.textContent=='Rain'){
              document.body.style.backgroundImage="url('./Assets/rain.jpg')";
            }
            else if(weathertype.textContent=='Drizzle'){
              document.body.style.backgroundImage="url('./Assets/drizzle.jpg')";
            }
            else {
              document.body.style.backgroundImage="url('./Assets/atmosphere.jpg')";
            }
        }
        //clearing input press enter and setting to default 
        const INPUT = document.getElementById('inputcityid');
          INPUT.addEventListener('keypress',(event) =>{
            if(event.keyCode==13  && $(INPUT).val()==''){
              location.reload();
            }
        });
