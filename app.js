const APIKEY ='2ce659b9c25fc6fe3a07de4ca71d1dac';

/**Appel a l'API openwheather avec ville en permettre de fonction */
let apiCall = function (city) {
    let url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
fetch(url)
.then((response) => 
response.json()
.then((data) => {
    console.log(data);
document.querySelector('#city').innerHTML= data.name ;
document.querySelector('#temp').innerHTML= 
"<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°C'   ;
document.querySelector('#humidity').innerHTML= 
"<i class='fas fa-tint'></i>" +data.main.humidity + '%' ;
document.querySelector('#wind').innerHTML= 
"<i class='fas fa-wind'></i>" + data.wind.speed + "km/h" ;
})
    )
    .catch((err) => console.log('Erreur : ' + err));
};
    
/**Ecouteur d'evennement sur la soumission du formilaire */
    document.querySelector('form').addEventListener('submit', function (e) {
e.preventDefault();
let ville = document.querySelector('#inputCity').value;
apiCall(ville);

    });

    /**Appel par defaut au chargement de la page */
    apiCall('Tunisie');