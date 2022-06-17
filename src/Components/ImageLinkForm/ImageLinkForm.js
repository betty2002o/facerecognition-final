import React from 'react';
import './ImageLinkForm.css';
function ImageLinkForm({ onInputChange, onPictureSubmit }) {
  return (
    <div>
      <p className="f3 tc b ma4">
        This Magic Brain will detect faces in your pictures. Give it a try!
      </p>
      <div className="center ma3">
        <div className="pa4 br3 shadow-5 center grow form">
          <input
            type="text"
            className="center f3 w-70 pa2"
            placeholder="url..."
            onChange={onInputChange}
          />
          <button
            className=" center w-30 grow f4 ph3 link pv2 white
          bg-light-purple b--light-purple br2 pointer dib"
            onClick={onPictureSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
