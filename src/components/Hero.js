import React from 'react';

const Hero = ({handleLogout, user}) => {
  return (
    <div className="hero">
      <nav>
          <h2>Welcome {user}</h2>
          <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
}

export default Hero;
