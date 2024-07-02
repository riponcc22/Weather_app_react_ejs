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
      <table>
        <tbody>
          <tr>
            <td>Temperature:</td>
            <td>{data.main.temp} °C</td>
          </tr>
          <tr>
            <td>Weather:</td>
            <td>{data.weather[0].description}</td>
          </tr>
          <tr>
            <td>Humidity:</td>
            <td>{data.main.humidity} %</td>
          </tr>
          <tr>
            <td>Wind Speed:</td>
            <td>{data.wind.speed} m/s</td>
          </tr>
          <tr>
            <td>Pressure:</td>
            <td>{data.main.pressure} hPa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
