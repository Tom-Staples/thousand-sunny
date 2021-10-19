import React from 'react';
import Stars from '../images/stars.png';
import Photo from '../images/photo.png';
import Element from '../images/elementSection5.png';

const Section5 = () => {
  return (
    <div className='mt-64 relative md:mx-20  md:px-20 md:grid md:grid-cols-2 xs:mx-5 xs:px-0'>
      <div>
        <h2 className='font-playfairDisplay text-4xl mb-36'>Testimonials</h2>
        <img src={Stars} alt='star rating' />
        <p className='mb-10  font-mulish font-black'>
          <q>
            Quisque in lacus a urna fermenum <br />
            euismod. Integer mi nibh, dapibus ac <br />
            scelerisque eu, facilisis quis purus. Morbi <br />
            blandit sit amet turpis nec
          </q>
        </p>
        <h3 className='font-inter font-black'>Edward Newgate</h3>
        <p className='font-inter'>Founder Circle</p>
        <img
          src={Element}
          alt='circle symbol'
          className='absolute top-1/2 left-0'
        />
      </div>
      <div className='pt-20'>
        <img src={Photo} alt='person giving the testimonial' />
      </div>
    </div>
  );
};

export default Section5;
