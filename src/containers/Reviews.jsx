import React from 'react';
import Image from 'next/image';

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="relative flex items-center justify-center w-full h-screen"
    >
      <div className="h-full section">
        <Image
          src="/truckasset.png"
          alt="B&C company vehicle"
          width={1000}
          height={400}
        />
      </div>
    </section>
  );
};

export default Reviews;
