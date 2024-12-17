// Layout.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import SkeletonLoader from './SeletonLoader';

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show loader on route change
    const timeout = setTimeout(() => {
      setLoading(false); // Hide loader after a delay
    }, 1000); // Adjust delay as needed (e.g., for API calls)
    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [location]);

  return (
    <>
      {loading && <SkeletonLoader />}
      {!loading && <Outlet />}
    </>
  );
};

export default Layout;
