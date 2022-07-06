import React from 'react';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import ToggleTheme from '../ui/toggle-theme/ToggleTheme';
import Theme from '../ui/theme/Theme';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <Theme>
      <div className={styles.navWrapper}>
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
                <Link smooth={true} to="Portfolio" spy={true}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link smooth={true} to="Testimonial" spy={true}>
                  Testimonial
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
    </Theme>
  );
};

export default Navbar;
