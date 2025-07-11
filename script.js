let btn = document.getElementById("fetchbtn")
let city = document.getElementById("cityinput")
let output = document.getElementById("output")
btn.addEventListener("click", async () => {
    let cityName = city.value
    let url = `https://api.weatherapi.com/v1/current.json?key=5c90715be5954158a5295453251107&q=${cityName}`

    try {
        let response = await fetch(url)
        let data = await response.json()
        let temp = data.current.temp_c
        let desc = data.current.condition.text
        let loc = data.location.name
        output.innerText = `City: ${loc}\nTemp: ${temp}°C\nWeather: ${desc}`
    } catch (e) {
        output.innerText = "Something went wrong"
    }
})
