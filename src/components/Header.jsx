import React, { useState } from 'react';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu';
import { ScrollLink } from '@/components';
import styles from '@/styles/bmStyles';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

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
        <div className="flex sm:hidden">
          <Menu
            right
            styles={styles}
            width={280}
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            {[
              ['home', 'Home', 0],
              ['about', 'About Us', -120],
              ['areas', 'Service Areas', -10],
              ['reviews', 'Reviews', 0],
            ].map((navItem, index) => (
              <div
                key={index}
                className="pl-[45px] flex flex-col justify-center items-center"
              >
                <ScrollLink
                  activeClass="active"
                  to={navItem[0]}
                  offset={navItem[2]}
                  onClick={closeSideBar}
                >
                  {navItem[1]}
                </ScrollLink>
              </div>
            ))}
          </Menu>
        </div>
        <nav className="hidden font-medium sm:flex">
          {[
            ['home', 'Home', 0],
            ['about', 'About Us', -120],
            ['areas', 'Service Areas', -10],
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
