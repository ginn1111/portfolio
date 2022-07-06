import { useEffect, useCallback, useState, createContext } from 'react';

const WINDOW = 'WINDOW';
const TABLET = 'TABLET';
const MOBILE = 'MOBILE';

const TABLET_SIZE = 980;
const MOBILE_SIZE = 500;

export const ThemeContext = createContext({
  isResponsive: WINDOW,
  isMoon: false,
  onToggleTheme: () => {},
});

const ThemeProvider = (props) => {
  const [isMoon, setIsMoon] = useState(false);
  const [responsive, setResponsive] = useState(WINDOW);

  useEffect(() => {
    const watchResizeWindow = () => {
      const size = window.innerWidth;
      if (size > TABLET_SIZE) {
        setResponsive(WINDOW);
      } else if (size > MOBILE_SIZE) {
        setResponsive(TABLET);
      } else {
        setResponsive(MOBILE);
      }
    };

    window.addEventListener('resize', watchResizeWindow);

    return () => window.removeEventListener('resize', watchResizeWindow);
  }, []);

  const toggleThemeHandler = useCallback(() => {
    setIsMoon((prev) => !prev);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isMoon, responsive, onToggleTheme: toggleThemeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
