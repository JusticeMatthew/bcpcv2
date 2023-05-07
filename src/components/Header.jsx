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
        <nav className="flex font-medium">
          {[
            ['home', 'Home', 0],
            ['about', 'About Us', -120],
            ['areas', 'Service Areas', -120],
            ['reviews', 'Reviews', 0],
          ].map((navItem, idx) => (
            <ScrollLink
              key={idx}
              to={navItem[0]}
              offset={navItem[2]}
              active="text-logo"
              className="px-4 py-2 transition duration-200 rounded cursor-pointer last:mr-0 hover:text-logo hover:bg-mid"
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
