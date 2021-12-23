
//ロードされたときにconsole logにポジションを表示する
window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.getElementsByClassName('temperature-description');
    let temperatureDegree = document.getElementsByClassName('temperature-degree');
    let locationTimezone = document.getElementsByClassName('location-timezone');
    

    //if geolocation exists = true
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //const proxy = "https://cors-anywhere.herokuapp.com";//

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d721001d003286a976c06f52507a30ea`;

        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            //console.log(data);
            //console.log(data.main.temp);
            //console.log(data.weather[0].description);

            const timezone = data.name;
    

            const description = data.weather[0].description;
            const temperatureKelvin =  data.main.temp;
            const temperatureCelsius = Math.floor(temperatureKelvin -  273.15) ;
            //const temperatureCelsiusRound = Math.floor(temperatureCelsius / 100) ;
            temperatureDescription[0].textContent = description;
            temperatureDegree[0].textContent = temperatureCelsius ;
            locationTimezone[0].textContent = timezone;

            //setIcons(icon, document.querySelector(".icon"));
        });

        });

    }

    //function setIcons(icon, iconId){
      //  const skycons = new Skycons({"color": "white"});
      //  const currentIcon = icon.replace(/-/g,"_").toUpperCase();
       // skycons.play();
       // return skycons.set(iconID, Skycons[currentIcon]);
   // }


});