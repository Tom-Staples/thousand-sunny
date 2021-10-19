import React from 'react';
import Thousand02 from '../images/Thousand-02.png';
import Element from '../images/elementSection2.png';
import Element2 from '../images/element2Section2.png';

const Section2 = () => {
  return (
    <div className='mt-64 relative md:mx-20 md:px-20  md:grid md:grid-cols-2 xs:mx-0 xs:px-5'>
      <img
        src={Element}
        alt='plus symbol'
        className='absolute top-0 left-1/2'
      />
      <div>
        <img src={Thousand02} alt='Hot air balloon ride' />
      </div>
      <div className='p-5 self-center relative'>
        <h2 className='font-playfairDisplay text-4xl mb-5 font-bold'>
          A new way to explore the <br />
          world
        </h2>
        <p className='font-mulish text-variant1Gray mb-5'>
          For decades travellers have reached for Lonely Planet <br />
          Books when looking to plan and execute their perfect <br />
          trip, but now, they can also let Lonely Planet Experiences <br />
          lead the way
        </p>
        <button className='bg-orange rounded-md px-7 py-3 text-white font-inter font-semibold'>
          Learn More
        </button>
        <img
          src={Element2}
          alt='circle symbol'
          className='absolute left-72 bottom-16'
        />
      </div>
    </div>
  );
};

export default Section2;
