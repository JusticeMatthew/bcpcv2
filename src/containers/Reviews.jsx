import React from 'react';
import Image from 'next/image';

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="relative flex items-center justify-center w-full h-[90vh] bg-truck bg-cover"
    >
      <div className="absolute w-full bg-fit -top-14 h-14 bg-truck"></div>
      <div className="absolute w-full bg-black -top-14 h-14 opacity-80"></div>
      <div className="w-full h-full bg-black opacity-80"></div>
    </section>
  );
};

export default Reviews;
