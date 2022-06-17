import React from 'react';
import Tilt from 'react-parallax-tilt';

function Rank({ name, entries }) {
  return (
    <div className="ma4 w-20 center">
      <Tilt
        className="parallax-effect-glare-scale br4 "
        perspective={800}
        glareEnable={true}
        glareMaxOpacity={0.75}
        scale={1.15}
      >
        <div
          className="pa4 br3 shadow-5"
          style={{ backgroundColor: 'whitesmoke' }}
        >
          <p className="f3 b">{`${name}, your current entry count is...`}</p>
          <p className="f3 b tc"> {entries} </p>
        </div>
      </Tilt>
    </div>
  );
}

export default Rank;
