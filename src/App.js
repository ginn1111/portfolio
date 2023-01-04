import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import GlobalCss from './components/ui/global-css/GlobalCss';
import './App.css';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import useTheme from './hooks/useTheme';
import ArrowOnTop from '@iconscout/react-unicons/icons/uil-arrow-up';

function App() {
  const [isMoon] = useTheme();
  const [isShowOnTop, setIsShowOnTop] = useState(false);

  useEffect(() => {
    function watchScrollHandler() {
      if (window.scrollY >= 500) {
        setIsShowOnTop(true);
      } else {
        setIsShowOnTop(false);
      }
    }

    window.addEventListener('scroll', watchScrollHandler);

    return () => window.removeEventListener('scroll', watchScrollHandler);
  }, []);
  return (
    <div
      className="App"
      id="/"
      style={{ backgroundColor: isMoon ? 'black' : '' }}
    >
      <div
        className="scrollOnTop"
        style={{ transform: !isShowOnTop ? 'translateX(200%)' : '' }}
      >
        <Link to="/" smooth={true}>
          <ArrowOnTop size="4rem" color="var(--orange)" />
        </Link>
      </div>
      <GlobalCss>
        <main>
          <Navbar />
          <Intro />
          <Services />
          <Experience />
          <Works />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </GlobalCss>
    </div>
  );
}

export default App;
