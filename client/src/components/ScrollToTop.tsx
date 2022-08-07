import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'auto',
    });
  }, [location]);

  return null;
}
