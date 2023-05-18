import React from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { Ping, Button } from '@/components';
import { PhoneIcon } from '@heroicons/react/24/solid';

const About = () => {
  return (
    <section className="flex w-full h-screen md:items-center md:justify-center">
      <div
        id="about"
        className="absolute z-0 flex justify-center w-full overflow-hidden -translate-y-32 pointer-events-none"
      >
        <span className="font-bebas text-[24rem] text-logo opacity-[.03] whitespace-nowrap">
          about us
        </span>
      </div>
      <div className="md:grid flex flex-col md:grid-cols-3 md:grid-rows-1 gap-10 section h-[26rem]">
        <div className="flex flex-col justify-center p-6 rounded-lg ring ring-logo ring-inset">
          <div className="flex items-center mb-1">
            <Ping />
            <h2 className="ml-2 text-lg font-bebas text-logo">Update</h2>
          </div>
          <h2 className="mb-4 text-3xl lg:mb-6 font-bebas">
            brevard county service
          </h2>
          <p className="mb-6 text-xs opacity-75 lg:mb-10 lg:text-sm">
            We&apos;re happy to announce we are now offering pest control in
            Brevard County which will be serviced by Andy Anderson.
            <br />
            <br />
            Andy is a lifelong resident of Melbourne and he and Garry have been
            friends since high school.
          </p>
          <Link href="tel:4073302644">
            <Button
              className="w-full hover:bg-dark hover:text-logo"
              onClick={() => {
                toast.success('Phone Number Copied!');
                navigator.clipboard.writeText('3212656877');
              }}
            >
              <PhoneIcon className="w-4 h-4 mr-2" />
              Call to schedule
            </Button>
          </Link>
          <p className="self-center mt-2 text-xs text-center">
            or text Andy directly at:&nbsp;
            <br className="hidden md:max-lg:flex" />
            <Link href="sms:3212656877">321-265-6877</Link>
          </p>
        </div>
        <div className="flex flex-col justify-between col-span-2 pl-6">
          <div className="flex flex-col gap-2 text-xs sm:gap-6 sm:text-sm mg:text-base">
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
          <h4 className="mt-6 text-4xl md:mt-0 font-zeyada">
            Garry & JJ Reese
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;
