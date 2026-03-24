import React from 'react';

const PixelLoadingBar = ({ progress = 50 }) => {
  return (
    <div className="pixel-loading-bar-container">
      <div
        className="pixel-loading-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default PixelLoadingBar;