import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useSidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveItem('home');
    } else if (path === '/seniortojunior') {
      setActiveItem('mentor');
    } else if (path.startsWith('/portfolio')) {
      setActiveItem('portfolio');
    } else if (path.startsWith('/competition')) {
      setActiveItem('competition');
    } else {
      setActiveItem(null);
    }
  }, [location.pathname]);

  return activeItem;
};

export default useSidebar;