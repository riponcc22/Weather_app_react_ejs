import React from 'react';

const Weather = ({ data }) => {
  const date = new Date();
  const utcOffset = date.getTimezoneOffset() * 60000; // Local time offset in milliseconds
  const cityTime = new Date(date.getTime() + utcOffset + data.timezone * 1000); // City time in milliseconds
  const formattedDate = cityTime.toLocaleDateString();
  const formattedTime = cityTime.toLocaleTimeString();

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>{formattedDate} {formattedTime}</p>
      <table style={{ width: '100%', fontSize: '1.5em', padding: '10px', borderCollapse: 'collapse' }}>
  <tbody>
    <tr>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>Temperature:</td>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>{data.main.temp} °C</td>
    </tr>
    <tr>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>Weather:</td>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>{data.weather[0].description}</td>
    </tr>
    <tr>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>Humidity:</td>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>{data.main.humidity} %</td>
    </tr>
    <tr>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>Wind Speed:</td>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>{data.wind.speed} m/s</td>
    </tr>
    <tr>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>Pressure:</td>
      <td style={{ padding: '15px', border: '1px solid #ddd' }}>{data.main.pressure} hPa</td>
    </tr>
  </tbody>
</table>


    </div>
  );
};

export default Weather;
