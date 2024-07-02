import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p>&copy; @Ripon-2024 Weather App. All rights reserved.</p>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
};

export default Footer;
