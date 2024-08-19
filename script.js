const apiKey = 'a81b7e3dd58c6290a3815ca4190c6281'; 

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cidade').textContent = data.name;
                document.getElementById('descricao').textContent = data.weather[0].description;
                document.getElementById('temperatura').textContent = `Temperatura: ${data.main.temp}°C`;
                document.getElementById('umidade').textContent = `Umidade: ${data.main.humidity}%`;
                
          
                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        
                const weatherIcon = document.getElementById('weatherIcon');
                weatherIcon.src = iconUrl;
                weatherIcon.style.display = 'block';
                
                document.getElementById('weatherInfo').style.display = 'block';
            } else {
                alert('Cidade não encontrada');
            }
        })
        .catch(error => {
            alert('Erro ao tentar achar a cidade');
            console.error(error);
        });
}
