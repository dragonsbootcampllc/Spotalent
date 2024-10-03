import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation(); // Get current route's pathname

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // Scroll to top when pathname changes
  }, [pathname]);

  return null; // No UI component needed, it's purely functional
};

export default ScrollToTop;
