import React from 'react';
// ... other imports
import CoreBanner from './CoreBanner';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Add CoreBanner component at the top */}
      <CoreBanner />
      
      {/* Other home page components */}
      {/* ... */}
    </div>
  );
};

export default Home; 