import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './Footer'
import Job from './Job';

const random = [1, 2, 3, 4, 5, 6, 7];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full sm:px-25 sm:py-6 md:px-15 md:py-6 lg:py-6 lg:px-25 py-5 px-5 sm:mt-5">
        <h1 className="text-lg font-bold mb-5">
          Search Results ({random.length})
        </h1>

        {/* Responsive grid with gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {random.map((item, index) => (
            <Job key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
