import React from 'react';
import Thousand03 from '../images/Thousand-03.png';
import Element from '../images/elementSection4.png';
import Element2 from '../images/element2Section4.png';
import Element3 from '../images/element3Section4.png';

const Section4 = () => {
  return (
    <div className='mt-64 relative md:mx-20 md:px-20 md:py-20 md:grid md:grid-cols-2 xs:mx-0 xs:px-5 py-0'>
      <div className='self-center'>
        <img
          src={Element3}
          alt='circle symbol'
          className='absolute left-40 xl:top-1/4  md:top-0 xs:top-0'
        />
        <h2 className='font-playfairDisplay text-4xl mb-5 font-bold'>
          Guides by Thousand <br />
          Sunny
        </h2>
        <p className='font-mulish mb-10'>
          Packed with tips and advice from our on-the-ground <br />
          experts, our city guides app (iOS and Android) is the <br />
          ultimate resource before and during a trip.
        </p>
        <button className='bg-orange rounded-md px-7 py-3 text-white font-inter font-semibold'>
          Download
        </button>
        <img
          src={Element2}
          alt='plus symbol'
          className='absolute left-1/3 bottom-1/3'
        />
      </div>
      <div>
        <img
          src={Element}
          alt='plus symbol'
          className='absolute top-16 right-0'
        />
        <img src={Thousand03} alt='Mobile apps for thousand sunny' />
      </div>
    </div>
  );
};

export default Section4;
