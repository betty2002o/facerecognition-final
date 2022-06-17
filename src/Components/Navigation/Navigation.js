import React from 'react';
function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          className=" mr4 f5 link  ba br3 shadow-3 bg-white pa2 pointer grow"
          onClick={() => onRouteChange('signin')}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          className=" mr4 f5 link  ba br3 shadow-3 bg-white pa2 pointer grow"
          onClick={() => onRouteChange('register')}
        >
          Register
        </p>
        <p
          className=" mr4 f5 link  ba br3 shadow-3 bg-white pa2 pointer grow"
          onClick={() => onRouteChange('signin')}
        >
          Sign In
        </p>
      </nav>
    );
  }
}

export default Navigation;
