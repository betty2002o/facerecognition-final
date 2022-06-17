import React from 'react';
import Tilt from 'react-parallax-tilt';
import Githiblog from './GitHub-Mark-Light-120px-plus.png';

function Logo() {
  return (
    <div className="ma4 mt0 w-10">
      <Tilt
        className="parallax-effect-glare-scale br4 "
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.15}
      >
        <div
          style={{
            backgroundColor: '#967bb6',
          }}
          className="br4 pa2 shadow-5 center"
        >
          <a
            href="https://github.com/betty2002o/facerecognition-final"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Githiblog} alt="logo" />
          </a>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
