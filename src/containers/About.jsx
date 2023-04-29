import React from 'react';
import { toast } from 'react-hot-toast';
import { Ping, Button } from '@/components';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center w-full h-screen"
    >
      <div className="grid grid-cols-3 grid-rows-1 gap-10 section h-2/3">
        <div className="flex flex-col items-center justify-center text-center rounded-2xl ring ring-logo ring-inset">
          <div className="flex items-center gap-4 mb-4">
            <Ping />
            <h2 className="text-3xl font-semibold tracking-wide uppercase font-inter">
              Update
            </h2>
            <Ping />
          </div>
          <p className="p-6 text-sm opacity-75 font-lato">
            We&apos;re happy to announce we are now offering pest control in
            Brevard County which will be serviced by Andy Anderson.
            <br />
            <br />
            Andy is a lifelong resident of Melbourne and he and Garry have been
            friends since high school.
          </p>
          <p className="p-6 font-lato">
            For Brevard appointments call or text Andy directly
          </p>
          <Button
            onClick={() => {
              toast.success('Phone Number Copied!');
              navigator.clipboard.writeText('3212656877');
            }}
          >
            321-265-6877
            <DocumentDuplicateIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex flex-col justify-center col-span-2 pl-6 text-sm">
          <div>
            <div className="inline-flex w-4 h-1 -translate-y-[.13rem] rounded self-baseline bg-logo mr-2" />
            <p className="inline">
              Welcome to B&C Pest Control, a locally-owned and family-operated
              business serving Sanford and Brevard County, Florida. Our company
              was founded over 30 years ago by Bob Carpenter, a trusted expert
              in the pest control industry. When Bob retired, he entrusted us,
              Garry and JJ Reese, with his legacy and we have been proudly
              continuing his tradition of excellence ever since.
            </p>
          </div>
          <div>
            <div className="inline-flex w-4 h-1 -translate-y-[.13rem] rounded self-baseline bg-logo mr-2" />
            <p className="inline">
              We specialize in once-a-year pest control treatments that keep
              your home pest-free all year round. If you have any issues during
              the year, we offer complimentary re-treatments at no additional
              cost.
            </p>
          </div>
          <div>
            <div className="inline-flex w-4 h-1 -translate-y-[.13rem] rounded self-baseline bg-logo mr-2" />
            <p className="inline">
              Bob’s philosophy was to buy the best product, use it the way it’s
              supposed to be used and it will work. Our philosophy is treating
              others the way we would like to be treated. We pride ourselves on
              developing personal relationships with our customers, and these
              foundations will continue to define B&C. Thank you for choosing
              B&C Pest Control, where your satisfaction is our top priority.
            </p>
          </div>
          <h6 className="font-dancing">Garry & JJ Reese</h6>
        </div>
      </div>
    </section>
  );
};

export default About;
