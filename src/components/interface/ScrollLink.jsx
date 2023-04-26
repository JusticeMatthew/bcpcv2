import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ children, to, active, className }) => {
  return (
    <Link
      href="/"
      to={to}
      activeClass={active}
      spy={true}
      smooth={true}
      duration={500}
      className={className}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
