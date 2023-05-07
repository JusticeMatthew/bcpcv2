import React from 'react';
import Image from 'next/image';

const ServiceAreas = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen skew-y-3 bg-logo">
      <div id="areas" className="-skew-y-3">
        <div className="flex justify-between section text-dark">
          <div className="flex flex-col">
            <h2 className="mb-10 text-5xl font-bebas">Where we work</h2>
            <h3 className="mb-4 font-semibold uppercase">
              seminole & west volusia
            </h3>
            <div className="flex gap-36">
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
            <div className="flex gap-[11.4rem]">
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

          <div className="relative w-96 h-96">
            <Image
              fill="true"
              src="/florida.png"
              alt="florida with location icons in brevard and sanford"
              className="object-cover overflow-visible"
            />
          </div>
          <Image
            src="/logo-small-zinc-900.png"
            alt="B&C logo"
            width={300}
            height={300}
            className="absolute bottom-0 translate-y-4 right-60 rotate-12"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 translate-y-10 -skew-y-3 bg-logo" />
    </section>
  );
};

export default ServiceAreas;
