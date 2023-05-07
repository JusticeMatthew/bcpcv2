import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full h-32 bg-black">
      <div className="flex justify-between opacity-50 section">
        <div className="relative w-20 h-10 md:w-40 md:h-20">
          <Image src="/footer-logo.png" alt="B&C Logo" fill="true" />
        </div>
        <div className="flex flex-col text-xs">
          <h6 className="font-semibold">Contact us:</h6>
          <Link href="tel:4073302664">407-330-2664</Link>
          <Link href="email:info@bandcpestcontrol.com">
            info@bandcpestcontrol.com
          </Link>
          <p className="mt-1 font-semibold">For Brevard County call or text:</p>
          <Link href="tel:3212656877">321-265-6877</Link>
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
