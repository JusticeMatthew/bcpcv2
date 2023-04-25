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
      <div className="grid grid-cols-3 grid-rows-1 section h-2/3">
        <div className="flex flex-col items-center justify-center text-center rounded-2xl ring ring-logo ring-inset">
          <div className="flex items-center gap-4 mb-4">
            <Ping />
            <h2 className="text-2xl font-semibold tracking-wide uppercase font-inter">
              Update
            </h2>
            <Ping />
          </div>
          <p className="p-6 text-sm opacity-90">
            We&apos;re happy to announce we are now offering pest control in
            Brevard County which will be serviced by Andy Anderson.
            <br />
            <br />
            Andy is a lifelong resident of Melbourne and he and Garry have been
            friends since high school.
          </p>
          <p className="p-6">
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
        <div className="flex items-center justify-center col-span-2">
          About Us
        </div>
      </div>
    </section>
  );
};

export default About;
