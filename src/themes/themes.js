export const lightTheme = {
  name: 'light',
  backgroundColor: '#E1E1E1',
  highlightColor: '#FFFFFF',
};

export const darkTheme = {
  name: 'dark',
  backgroundColor: '#374151',
  highlightColor: '#6B7280',
};

export const getTheme = (theme = 'light') => {
  if (typeof theme === 'object' && theme !== null) {
    return {
      ...lightTheme,
      ...theme,
    };
  }

  return theme === 'dark' ? darkTheme : lightTheme;
};

export const createTheme = (customTheme = {}) => {
  return {
    ...lightTheme,
    ...customTheme,
  };
};
