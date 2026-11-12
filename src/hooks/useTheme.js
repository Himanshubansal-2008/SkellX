import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';
import { getTheme } from '../themes/themes';

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return getTheme(theme || 'light');
};

export default useTheme;
