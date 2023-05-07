import React from 'react';
import { toast } from 'react-hot-toast';
import { Ping, Button } from '@/components';
import { PhoneIcon } from '@heroicons/react/24/solid';

const About = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <span className="absolute font-bebas text-[24rem] -translate-y-32 z-0 pointer-events-none text-logo opacity-[.03]">
        about us
      </span>
      <div
        id="about"
        className="grid grid-cols-3 grid-rows-1 gap-10 section h-3/5"
      >
        <div className="flex flex-col justify-center p-6 rounded-lg ring ring-logo ring-inset">
          <div className="flex items-center mb-1">
            <Ping />
            <h2 className="ml-2 text-lg font-bebas text-logo">Update</h2>
          </div>
          <h2 className="mb-6 text-3xl font-bebas">brevard county service</h2>
          <p className="mb-10 text-sm opacity-75">
            We&apos;re happy to announce we are now offering pest control in
            Brevard County which will be serviced by Andy Anderson.
            <br />
            <br />
            Andy is a lifelong resident of Melbourne and he and Garry have been
            friends since high school.
          </p>
          <Button
            onClick={() => {
              toast.success('Phone Number Copied!');
              navigator.clipboard.writeText('3212656877');
            }}
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Call to schedule
          </Button>
          <p className="self-center mt-2 text-xs">
            or text Andy directly at: 321-265-6877
          </p>
        </div>
        <div className="flex flex-col justify-between col-span-2 pl-6 text-md">
          <div className="flex flex-col gap-6">
            <div>
              <div className="inline-flex w-4 h-1 -translate-y-[.13rem] rounded self-baseline bg-logo mr-2" />
              <p className="inline">
                Welcome to B&C Pest Control, a locally-owned and family-operated
                business serving Seminole, West Volusia, and Brevard counties,
                FL. Our company was founded over 30 years ago by Bob Carpenter.
                When Bob retired, he entrusted us, Garry and JJ Reese, with his
                legacy and we have been proudly continuing his tradition of
                excellence ever since.
              </p>
            </div>
            <div>
              <div className="inline-flex w-4 h-1 -translate-y-[.13rem] rounded self-baseline bg-logo mr-2" />
              <p className="inline">
                We specialize in once-a-year pest control treatments that keep
                your home pest-free all year round. If you have any issues
                during the year, we offer re-treatments at no additional cost.
              </p>
            </div>
            <div>
              <div className="inline-flex w-4 h-1 -translate-y-[.13rem] rounded self-baseline bg-logo mr-2" />
              <p className="inline">
                Our philosophy is to use the best quality products and treat our
                customers the way we want to be treated, and we pride ourselves
                on developing personal relationships with our customers. Thank
                you for choosing B&C Pest Control, where your satisfaction is
                our top priority.
              </p>
            </div>
          </div>
          <h4 className="text-4xl font-zeyada">Garry & JJ Reese</h4>
        </div>
      </div>
    </section>
  );
};

export default About;
