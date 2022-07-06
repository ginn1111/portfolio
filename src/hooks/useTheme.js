import { useContext } from 'react';
import { ThemeContext } from '../context/theme/theme';

const useTheme = () => {
  const { isMoon, onToggleTheme } = useContext(ThemeContext);
  return [isMoon, onToggleTheme];
};

export default useTheme;
