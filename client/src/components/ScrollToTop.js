import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  window.onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export default ScrollToTop;
