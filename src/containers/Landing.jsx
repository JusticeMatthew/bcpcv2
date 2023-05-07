import React, { useState } from 'react';
import Link from 'next/link';
import { PhoneIcon, ArrowUturnDownIcon } from '@heroicons/react/24/solid';
import { Button, ScrollLink } from '@/components';

const Landing = () => {
  const [tooltipText, setTooltipText] = useState('Click to copy');

  const handleClick = () => {
    navigator.clipboard.writeText('4073302644');
    setTooltipText('Copied!');
    setTimeout(() => setTooltipText('Click to copy'), 4000);
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center w-full h-screen"
    >
      <div className="flex flex-col items-center justify-center text-center section">
        <h1 className="text-5xl whitespace-pre sm:text-6xl md:text-8xl font-bebas">
          No Pest Worries for
          <br />
          <span className="text-logo">An Entire Year</span>
          <br />
          With B&C Pest Control
        </h1>
        <h2 className="mt-4 text-xs sm:text-sm opacity-70">
          Our once-a-year pest control treatment in Seminole,
          <br />
          West Volusia, and Brevard counties is the perfect
          <br />
          solution for homeowners who want peace of mind.
        </h2>
        <div className="flex flex-col items-center gap-6 mt-12 sm:flex-row">
          <div className="group">
            <span
              className={`absolute max-[400px]:hidden invisible px-2 py-1 w-[5.7rem] text-xs transition-opacity duration-200 -translate-x-[11.5rem] rounded opacity-0 group-hover:opacity-100 group-hover:visible bg-mid before:content-[''] before:absolute before:top-1/2  before:left-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-r-transparent before:border-l-logo border border-logo ${
                tooltipText === 'Copied!' ? 'text-logo' : 'text-white'
              }`}
            >
              {tooltipText}
            </span>
            <Link href="tel:4073302644">
              <Button className="group" onClick={handleClick}>
                <PhoneIcon className="w-4 h-4 mr-2" />
                407-330-2664
              </Button>
            </Link>
          </div>
          <ScrollLink to="about" offset={-120}>
            <Button variant="secondary" className="group">
              <ArrowUturnDownIcon className="w-4 h-4 mr-2" />
              Learn more
            </Button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Landing;
