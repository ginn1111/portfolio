import { useEffect, useCallback, useState, createContext } from 'react';

const WINDOW = 'WINDOW';
const TABLET = 'TABLET';
const MOBILE = 'MOBILE';

const TABLET_SIZE = 1179;
const MOBILE_SIZE = 767;

const setSize = (size) => {
  if (size > TABLET_SIZE) {
    return WINDOW;
  } else if (size > MOBILE_SIZE) {
    return TABLET;
  }
  return MOBILE;
};

export const ThemeContext = createContext({
  isResponsive: WINDOW,
  isMoon: false,
  onToggleTheme: () => { },
  sticky: false,
});

const ThemeProvider = (props) => {
  const [isMoon, setIsMoon] = useState(false);
  const [responsive, setResponsive] = useState(WINDOW);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    setResponsive(setSize(window.innerWidth));
  }, []);

  const toggleThemeHandler = useCallback(() => {
    setIsMoon((prev) => !prev);
  }, []);

  console.log(responsive);

  return (
    <ThemeContext.Provider
      value={{
        isMoon,
        responsive,
        onToggleTheme: toggleThemeHandler,
        isSticky,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
