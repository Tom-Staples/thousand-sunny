import React from 'react';
import DestinationItem from './DestinationItem/DestinationItem';
import Indonesia from '../images/indonesia.png';
import China from '../images/china.png';
import Switzerland from '../images/switzerland.png';
import Montenegro from '../images/montenegro.png';
import Element from '../images/elementSection3.png';
import Element2 from '../images/element2Section3.png';
import Element3 from '../images/element3Section3.png';

const Section3 = () => {
  const destinations = {
    indonesia: Indonesia,
    china: China,
    switzerland: Switzerland,
    montenegro: Montenegro
  };

  const desintationsArray = Object.values(destinations).map((item, index) => {
    let justify = 'justify-self-center';
    if (index === 0) {
      justify = 'justify-self-start';
    }
    if (index === 3) {
      justify = 'justify-self-end';
    }
    return (
      <DestinationItem
        item={item}
        index={index}
        key={index}
        justify={justify}
      />
    );
  });

  return (
    <div className='mt-64 sm:mx-20 sm:px-20 sm:py-20 relative xs:mx-0 xs:px-5'>
      <img
        src={Element3}
        alt='circle symbol'
        className='absolute top-0 left-3/4'
      />
      <div className='gap-x-5 gap-y-52 xl:grid xl:grid-cols-4 xl:grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-3'>
        <h2 className='text-4xl font-playfairDisplay font-bold xl:col-span-2 md:col-span-1 xs:inline xs:mr-5'>
          Featured Destinations
        </h2>
        <span
          className='font-inter text-orange font-bold justify-self-end xl:col-span-2 md:col-span-1'
          href=''
        >
          View all>
        </span>
        {desintationsArray}
        <img
          src={Element}
          alt='plus symbol'
          className='absolute left-0 top-2/3'
        />
      </div>
      <img
        src={Element2}
        alt='circle symbol'
        className='absolute left-1/2 bottom-0'
      />
    </div>
  );
};

export default Section3;
