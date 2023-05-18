import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import reviews from '@/data/reviews';

const Reviews = () => {
  const [windowWidth, setWindowWidth] = useState('undefined');
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="reviews"
      className="relative flex items-center justify-center w-full h-[90vh] bg-truck bg-cover"
    >
      <div className="absolute w-full bg-fit -top-14 h-14 bg-truck"></div>
      <div className="absolute w-full bg-black -top-14 h-14 opacity-80"></div>
      <div className="absolute w-full h-full bg-black opacity-80"></div>
      <div className="z-10 flex flex-col items-center justify-center w-full">
        <h2 className="mb-20 text-5xl font-bebas">
          What our customers
          <br className="md:hidden" /> are saying...
        </h2>
        {windowWidth > 1020 ? (
          <div className="w-[62.5rem]">
            <Carousel
              infiniteLoop
              autoPlay={true}
              stopOnHover={true}
              interval={5000}
              centerMode={true}
              centerSlidePercentage={32}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
            >
              {reviews.map((item, idx) => (
                <div key={idx} className="px-10 text-sm text-left">
                  <p className="w-full mb-[2px] text-lg">{item.name}</p>
                  <div className="relative w-20 h-4 mb-2">
                    <Image src="/Ratings.svg" alt="5 stars" fill />
                  </div>
                  <p className="w-full">{`"${item.content}"`}</p>
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <Carousel
            infiniteLoop
            axis="vertical"
            autoPlay={true}
            stopOnHover={true}
            interval={5000}
            centerMode={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            emulateTouch={true}
          >
            {reviews.map((item, idx) => (
              <div key={idx} className="text-sm text-left w-[90%] pl-10 h-full">
                <p className="w-full mb-[2px] text-lg">{item.name}</p>
                <div className="relative w-20 h-4 mb-2">
                  <Image src="/Ratings.svg" alt="5 stars" fill />
                </div>
                <p className="w-full">{`"${item.content}"`}</p>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Reviews;
