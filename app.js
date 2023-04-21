const details = document.getElementById('details')
const apiButton = document.getElementById('apiCall')
const searchBar = document.getElementById('search')
const cityName = document.getElementById('city-name')
const temp = document.getElementById('temperature')
const descr = document.getElementById('description')
const feelsLike = document.getElementById('feels')
const feelsTemp = document.getElementById('feels-temp')
const windTitle = document.getElementById('wind')
const windSpeed = document.getElementById('wind-speed')
const humidityTitle = document.getElementById('humid')
const humidity = document.getElementById('humid-percent')

let city;



apiButton.addEventListener('click', function(){
    city = searchBar.value
    apiCall()
    const animation = anime({
        targets: apiButton,
        scale: [1, 1.1, 1],
        easing: 'easeInOutSine',
        duration: 500,
      });
})

const defaultCall =  async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=f3fea66a039d88275b050d054a82d627`);
    const data = await res.json()
    const description = data.weather.map(i => i.description)
    cityName.innerHTML = `${data.name}, ${data.sys.country}`
    temp.innerHTML =  Math.round((data.main.temp - 273) * 1.8 + 32) + ' °F'
    descr.innerHTML = description
    feelsTemp.innerHTML = Math.round((data.main.feels_like - 273) * 1.8 + 32) + ' °F';
    windSpeed.innerHTML = Math.round(data.wind.speed * 2.237) + ' mph'
    humidity.innerHTML = data.main.humidity + '%'
    console.log(data)
    const animation = anime({
        targets: [details],
        opacity: [0, 1],
      scale: [0, 1],
      easing: 'easeOutElastic',
      duration: 2000
      });
}

const apiCall =  async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3fea66a039d88275b050d054a82d627`);
    const data = await res.json()
    const description = data.weather.map(i => i.description)
    cityName.innerHTML = `${data.name}, ${data.sys.country}`
    temp.innerHTML =  Math.round((data.main.temp - 273) * 1.8 + 32) + ' °F'
    descr.innerHTML = description
    feelsTemp.innerHTML = Math.round((data.main.feels_like - 273) * 1.8 + 32) + ' °F';
    windSpeed.innerHTML = Math.round(data.wind.speed * 2.237) + ' mph'
    humidity.innerHTML = data.main.humidity + '%'
    searchBar.value = ""
    const animation = anime({
        targets: [details],
        opacity: [0, 1],
      scale: [0, 1],
      easing: 'easeOutElastic',
      duration: 10000
      });
}

defaultCall()
