async function openWeatherMap() {
  const weer = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&hourly=temperature_2m')
  const weerData = await weer.json()
  return weerData
}