import React from 'react';

const Ping = () => {
  return (
    <span class="relative flex h-3 w-3">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-logo opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-logo"></span>
    </span>
  );
};

export default Ping;