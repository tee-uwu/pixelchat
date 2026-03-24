import React from 'react';
import { useThemeStore } from '../store/useThemeStore';

const PixelToggle = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isNight = theme === 'night';

  return (
    <label className="pixel-toggle-label">
      <input
        type="checkbox"
        checked={!isNight}
        onChange={toggleTheme}
        className="pixel-toggle-input"
      />
      <span className="pixel-toggle-slider">
        <span className="pixel-toggle-text night">🌙</span>
        <span className="pixel-toggle-text wireframe">⚡</span>
      </span>
    </label>
  );
};

export default PixelToggle;