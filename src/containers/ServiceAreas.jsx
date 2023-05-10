import React from 'react';
import Image from 'next/image';

const ServiceAreas = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen overflow-hidden skew-y-3 bg-logo">
      <div
        id="areas"
        className="flex items-center justify-center w-full h-[95%] -skew-y-3"
      >
        <div className="flex items-center justify-center md:justify-between section text-dark">
          <div className="relative flex flex-col">
            <div className="absolute inline w-24 h-16 -right-4 sm:right-0 top-2 rotate-12 md:hidden">
              <Image
                src="/logo-small-zinc-900.png"
                alt="B&C Logo"
                fill="true"
              />
            </div>
            <div className="absolute inline w-24 h-16 -bottom-4 right-10 sm:right-16 -rotate-12 md:hidden">
              <Image
                src="/logo-small-zinc-900.png"
                alt="B&C Logo"
                fill="true"
              />
            </div>
            <h2 className="mb-10 text-5xl font-bebas">Where we work</h2>
            <h3 className="mb-4 font-semibold uppercase">
              seminole & west volusia
            </h3>
            <div className="flex gap-20 sm:gap-32 whitespace-nowrap">
              <ul>
                <li>Altamonte Springs</li>
                <li>Apopka</li>
                <li>Casselberry</li>
                <li>Chuluota</li>
                <li>DeBary</li>
                <li>DeLand</li>
                <li>Deltona</li>
                <li>Fern Park</li>
              </ul>
              <ul>
                <li>Lake Mary</li>
                <li>Longwood</li>
                <li>Maitland</li>
                <li>Orange City</li>
                <li>Oviedo</li>
                <li>Sanford</li>
                <li>Sorrento</li>
                <li>Winter Springs</li>
              </ul>
            </div>
            <h3 className="my-4 font-semibold uppercase">brevard county</h3>
            <div className="flex gap-[7.5rem] sm:gap-[10.5rem]">
              <ul>
                <li>Melbourne</li>
                <li>Merritt Island</li>
                <li>Palm Bay</li>
              </ul>
              <ul>
                <li>Rockledge</li>
                <li>Suntree</li>
                <li>Viera</li>
              </ul>
            </div>
            <div className="mt-10 text-sm">
              <h3 className="font-bold">Nearby but not on the list?</h3>
              <p>Call us at 407-330-2644</p>
            </div>
          </div>
          <div className="relative hidden mt-24 md:inline">
            <div className="relative w-80 h-80 lg:w-[29rem] lg:h-[29rem]">
              <Image
                fill="true"
                src="/florida.png"
                alt="florida with location icons in brevard and sanford"
                className="object-contain"
              />
            </div>
            <div className="relative w-56 h-40 mg:-translate-x-32 mg:h-56 lg:-translate-x-20 lg:-translate-y-32 mg:w-72">
              <Image
                src="/logo-small-zinc-900.png"
                alt="B&C logo"
                fill="true"
                className="rotate-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 translate-y-10 -skew-y-3 bg-logo" />
    </section>
  );
};

export default ServiceAreas;
