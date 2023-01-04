import { useContext } from 'react';
import { ThemeContext } from '../context/theme/theme';
const useSticky = () => {
  const { isSticky } = useContext(ThemeContext);
  return isSticky;
};

export default useSticky;
