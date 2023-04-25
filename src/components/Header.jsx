import React from 'react';
import Image from 'next/image';
import { ScrollLink } from '@/components';

const Header = () => {
  return (
    <div className="fixed z-20 flex items-center justify-center w-full h-16 text-white bg-dark">
      <div className="flex items-center justify-between section">
        <ScrollLink to="home" className="cursor-pointer">
          <Image
            src="/header-logo-chunky-tight.png"
            width={80}
            height={80}
            alt="B&C_logo"
          />
        </ScrollLink>
        <nav className="flex font-medium font-interTight">
          {[
            ['home', 'Home'],
            ['about', 'About Us'],
            ['areas', 'Service Areas'],
            ['reviews', 'Reviews'],
          ].map((navItem, idx) => (
            <ScrollLink
              key={idx}
              to={navItem[0]}
              active="text-logo underline underline-offset-4 decoration-2"
              className="p-1 mx-2 transition duration-200 rounded-lg cursor-pointer last:mr-0 hover:text-logo hover:underline underline-offset-4 decoration-2"
            >
              <p>{navItem[1]}</p>
            </ScrollLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
