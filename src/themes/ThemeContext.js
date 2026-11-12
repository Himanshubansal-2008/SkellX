import React, { createContext } from 'react';

export const ThemeContext = createContext('light');

export const SkeletonThemeProvider = ({
  theme = 'light',
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
