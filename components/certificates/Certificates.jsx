import React from 'react';
import Image from 'next/image';
import HyperOne from '../customH1/HyperOne';

const Certificates = () => {
  const certificates = [
    { id: 1, name: 'Certificate 1', image: '/imgs/backend_and_api.png' },
    { id: 2, name: 'Certificate 2', image: '/imgs/enactus.jpeg' },

  ];

  return (
    <div id="certificates" className="py-16 w-full overflow-hidden">
      <HyperOne value="Certificates" />
      <div className="relative mt-8 overflow-hidden">
        {/* Applying different animation speeds based on screen size */}
        <ul className="flex gap-8 whitespace-nowrap scroll-sm-lg md:scroll-sm-md sm:scroll-sm-sm">
  {[...certificates, ...certificates].map((cert, index) => (
    <li key={`${cert.id}-${index}`} className="inline-flex flex-col items-center mx-4 w-48 sm:w-56 md:w-64 flex-shrink-0">
      <div className="relative w-full h-32 sm:h-36 md:h-60">
        <Image
          src={cert.image}
          alt={cert.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
};

export default Certificates;