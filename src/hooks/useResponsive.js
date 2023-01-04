import { useContext, useMemo } from "react";
import { ThemeContext } from "../context/theme/theme";

const useResponsive = () => {
  const { responsive } = useContext(ThemeContext);
  const isTablet = useMemo(() => responsive === "TABLET", [responsive]);
  const isMobile = useMemo(() => responsive === "MOBILE", [responsive]);
  const isWindow = useMemo(() => !isTablet && !isMobile, [isTablet, isMobile]);

  return { isWindow, isMobile, isTablet };
};

export default useResponsive;
