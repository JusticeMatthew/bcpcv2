import React from 'react';
import {
  PhoneArrowUpRightIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/24/solid';
import { Button, ScrollLink } from '@/components';

const Landing = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center w-full h-screen pt-10"
    >
      <div className="grid items-center grid-cols-3 grid-rows-1 gap-10 section h-2/3">
        <div className="flex flex-col col-span-2 gap-8 pr-10">
          <h1 className="text-[4rem] font-bold leading-tight font-inter">
            No Pest Worries for an&nbsp;
            <span className="text-logo">Entire Year </span>
            With B&C
          </h1>
          <h2 className="text-sm leading-snug opacity-60">
            Our once-a-year pest control treatment in Seminole, West Volusia,
            and Brevard counties is the perfect solution for homeowners who want
            peace of mind.
          </h2>
          <div className="flex gap-5 mt-6">
            <Button>
              407-330-2664
              <PhoneArrowUpRightIcon className="w-5 h-5" />
            </Button>
            <ScrollLink to="about">
              <Button variant="secondary" className="group">
                Learn More
                <ArrowDownCircleIcon className="w-6 h-6 transition-all duration-75 group-hover:text-logo" />
              </Button>
            </ScrollLink>
          </div>
        </div>
        <div className="flex items-center justify-center h-full ring-logo ring-2 bg-dark text-logo">
          Image
        </div>
      </div>
    </section>
  );
};

export default Landing;
