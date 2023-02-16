import React from 'react';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import ToggleTheme from '../ui/toggle-theme/ToggleTheme';
import Theme from '../ui/theme/Theme';
import { Link } from 'react-scroll';
import useSticky from '../../hooks/useSticky';
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
  const isSticky = useSticky();
  const [isMoon] = useTheme();
  const sticky = {
    position: 'fixed',
    inset: 0,
    backdropFilter: 'blur(14px)',
    zIndex: 100000000000,
    padding: '3rem 5rem',
    boxShadow: `0 8px 10px -15px ${isMoon ? 'var(--orange)' : 'black'}`,
  };
  return (
    <Theme>
      <nav className={styles.navWrapper} style={isSticky ? sticky : {}}>
        <div className={styles.navContainer}>
          <section className={styles.navLeft}>
            <span className={styles.navName}>Gin</span>
            <ToggleTheme />
          </section>
          <section className={styles.navRight}>
            <div className={styles.navRightList}>
              <ul>
                <li>
                  <Link smooth={true} to="Home" spy={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link smooth={true} to="Services" spy={true}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link smooth={true} to="Experience" spy={true}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link smooth={true} to="Works" spy={true}>
                    Works
                  </Link>
                </li>
                <li>
                  <Link smooth={true} to="Portfolio" spy={true}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="Contact" smooth={true}>
              <button className={clsx(styles.contactMe, 'button')}>
                Contact me
              </button>
            </Link>
          </section>
        </div>
      </nav>
    </Theme >
  );
};

export default Navbar;
