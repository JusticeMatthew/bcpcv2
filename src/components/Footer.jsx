import React from 'react';
import Image from 'next/image';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full h-32 bg-black">
      <div className="flex items-center justify-between opacity-50 section">
        <div className="relative w-40 h-20">
          <Image src="/footer-logo.png" alt="B&C Logo" fill="true" />
        </div>
        <div className="text-xs">
          <h6 className="mb-1 font-semibold">Contact</h6>
          <p>407-330-2664</p>
          <p>info@bandcpestcontrol.com</p>
          <p className="mt-1 font-semibold">For Brevard County call or text:</p>
          <p>321-265-6877</p>
        </div>
        <div className="text-xs">
          <p>Copyright © 2023 B&C Pest Control</p>
          <p>
            Website designed & built by&nbsp;
            <SparklesIcon className="inline-flex w-3 h-3" />
            &nbsp;Majic
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
