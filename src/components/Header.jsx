import React from 'react';
import header1 from '../images/header1.jpg'

const Header = () => {
  return (
    <div className="w-full object-fill">
      <img
        src={header1}
        alt="Contact Us Header"
        className="w-full h-64"
      />
    </div>
  );
};

export default Header;
