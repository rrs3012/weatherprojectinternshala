async function getWeather(city) {
    const apiKey = '87b8dceb70a8ced347d2217fb86167c4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        console.log(data); // Process weather data
        return data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}