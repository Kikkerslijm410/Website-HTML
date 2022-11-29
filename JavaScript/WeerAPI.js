// async function openWeatherMap() {
//   const weer = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&hourly=temperature_2m')
//   const weerData = await weer.json()
//   alert(weerData)
//   return weerData
// }

// https://www.visualcrossing.com/resources/documentation/weather-api/how-do-i-add-weather-forecast-to-my-webpage/

window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector:".weatherWidget",
    apiKey:"ZPZ57RHZ6AE92CWR6XQ9FNVX2", 
    location:"Amsterdam, NL",
    // location: "London, UK", 
    unitGroup:"metric", 
    forecastDays:5, 
    title:"Amsterdam, NL", 
    showTitle:true, 
});

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();