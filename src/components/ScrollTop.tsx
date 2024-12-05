import { ReactElement, useEffect } from 'react';

import { useLocation } from 'react-router';

const ScrollTop = ({ children }: { children?: ReactElement | null }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollTop;
