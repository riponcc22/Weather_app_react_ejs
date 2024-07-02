
const Header = ({ isLoggedIn, onLogout, displayname }) => (
  <header style={headerStyles}>
    <h1>Weather App</h1>
    {isLoggedIn ? (
      <div>
        <span>Welcome, {displayname}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
    ) : null}
  </header>
);



const headerStyles = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
};

export default Header;
