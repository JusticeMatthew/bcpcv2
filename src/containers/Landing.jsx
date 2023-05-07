import React from 'react';
import { PhoneIcon, ArrowUturnDownIcon } from '@heroicons/react/24/solid';
import { Button, ScrollLink } from '@/components';

const Landing = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center w-full h-screen"
    >
      <div className="flex flex-col items-center justify-center text-center section">
        <h1 className="text-8xl font-bebas">
          No Pest Worries for
          <br />
          <span className="text-logo">An Entire Year</span>
          <br />
          With B&C Pest Control
        </h1>
        <h2 className="mt-4 text-sm opacity-70">
          Our once-a-year pest control treatment in Seminole,
          <br />
          West Volusia, and Brevard counties is the perfect
          <br />
          solution for homeowners who want peace of mind.
        </h2>
        <div className="flex gap-6 mt-12">
          <Button className="group">
            <PhoneIcon className="w-4 h-4 mr-2" />
            407-330-2664
          </Button>
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
