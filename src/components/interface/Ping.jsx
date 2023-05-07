import React from 'react';

const Ping = () => {
  return (
    <span className="relative flex w-2 h-2 -translate-y-[1px]">
      <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-logo"></span>
      <span className="relative inline-flex w-2 h-2 rounded-full bg-logo"></span>
    </span>
  );
};

export default Ping;
