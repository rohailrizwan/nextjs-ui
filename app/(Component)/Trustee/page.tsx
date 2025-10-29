'use client';

import React from 'react';
import Image from 'next/image';
import topDeveloper from '../../(assets)/images/trustee/TopDeveloper.png';
import google from '../../(assets)/images/trustee/Google.png';
import jabber from '../../(assets)/images/trustee/Jabber.png';
import clutch from '../../(assets)/images/trustee/Clutch.png';
import trustpilot from '../../(assets)/images/trustee/Trustpilot.png';

const Clients: React.FC = () => {
  const logos = [
    { src: topDeveloper, alt: 'Top Developers' },
    { src: google, alt: 'Google' },
    { src: jabber, alt: 'Sitejabber' },
    { src: clutch, alt: 'Clutch' },
    { src: trustpilot, alt: 'Trustpilot' },
  ];

  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-around items-center gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                bg-white/80 
                backdrop-blur-sm
                shadow-[0_4px_15px_rgba(0,0,0,0.05)] 
                hover:shadow-[0_6px_25px_rgba(0,0,0,0.1)] 
                transition-all 
                duration-300 
                rounded-2xl 
                p-5 
                flex 
                items-center 
                justify-center 
                w-[130px] 
                lg:w-[160px] 
                h-[70px]
                hover:-translate-y-1
              "
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={50}
                className="object-contain max-h-full"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
