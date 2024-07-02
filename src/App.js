// import React, { useState, useEffect } from 'react';
// import Weather from './Weather';
// import Search from './Search';
// import Header from './Header';
// import Footer from './Footer';
// import './App.css'; // Import the CSS file

// const App = () => {
//   const [city, setCity] = useState('London'); // Default city
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const getWeather = async (city) => {
//     try {
//       const apiKey = '44422d5be37038411b70103761049184'; // Your OpenWeatherMap API key
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//       const data = await response.json();
//       if (data.cod === 200) {
//         setWeather(data);
//         setError('');
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError('Failed to fetch data. Please try again.');
//     }
//   };

//   useEffect(() => {
//     getWeather(city); // Fetch weather data for the default city on mount
//   }, [city]);

//   const handleSearch = (city) => {
//     setCity(city);
//     getWeather(city);
//   };

//   return (
//     <div className="App"> {/* Apply the CSS class */}
//       <Header />
//       <main style={mainStyles}>
//         <Search onSearch={handleSearch} />
//         {error && <p className="error">{error}</p>}
//         {weather && <Weather data={weather} />}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// const mainStyles = {
//   marginTop: '60px', // Adjust for fixed header
//   marginBottom: '40px', // Adjust for fixed footer
//   padding: '20px',
//   width: '100%',
//   textAlign: 'center',
// };

// export default App;


import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import Search from './Search';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './loginForm';
import RegisterForm from './RegisterForm';
import './App.css'; // Import the CSS file
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('London'); // Default city
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [displayname, setDisplayname] = useState(localStorage.getItem('displayname') || '');

  const getWeather = async (city) => {
    try {
      const apiKey = '44422d5be37038411b70103761049184'; // Your OpenWeatherMap API key
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to fetch data. Please try again.');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getWeather(city); // Fetch weather data for the default city on mount
    }
  }, [city, isLoggedIn]);

  const handleSearch = (city) => {
    setCity(city);
    getWeather(city);
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('displayname', response.data.displayname);
      setDisplayname(response.data.displayname);
      setIsLoggedIn(true);
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const handleRegister = async (username,email, displayname,password) => {
    try {
      await axios.post('http://localhost:5000/register', { username,email, displayname,password });
      alert('Registration successful. Please log in.');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('displayname');
    setIsLoggedIn(false);
    setWeather(null);
  };

  return (
    <div className="App"> {/* Apply the CSS class */}
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} displayname={displayname} />
      <main style={mainStyles}>
        {!isLoggedIn ? (
          <>
            <h1>Login</h1>
            <LoginForm onLogin={handleLogin} />
            <h1>Register</h1>
            <RegisterForm onRegister={handleRegister} />
          </>
        ) : (
          <>
            <h2>Welcome, {displayname}!</h2>
            <Search onSearch={handleSearch} />
            {error && <p className="error">{error}</p>}
            {weather && <Weather data={weather} />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

const mainStyles = {
  marginTop: '60px', // Adjust for fixed header
  marginBottom: '40px', // Adjust for fixed footer
  padding: '20px',
  width: '100%',
  textAlign: 'center',
};

export default App;
