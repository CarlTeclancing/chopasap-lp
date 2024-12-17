// SkeletonLoader.jsx
import React from 'react';
import '../SkeletonLoader.css'; // Add styles for skeleton loader


const SkeletonLoader = () => {
  return (
    <div className="circular-loader-container">
      <div className="circular-loader"></div>
    </div>
  );
};

export default SkeletonLoader;
