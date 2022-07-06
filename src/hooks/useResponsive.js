import { useContext } from 'react';
import { ThemeContext } from '../context/theme/theme';

const useResponsive = () => {
  const { responsive } = useContext(ThemeContext);

  return responsive;
};

export default useResponsive;
