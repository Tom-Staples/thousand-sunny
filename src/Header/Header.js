import React, { useState } from 'react';
import Logo from '../images/logo.png';
import thousand from '../images/thousand.png';
import TopNav from './TopNav/TopNav';
import HolidayFinder from './HolidayFinder/HolidayFinder';
import Element from '../images/elementSection1.png';
import Element2 from '../images/element2Section1.png';
import Element3 from '../images/element3Section1.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleClick = name => {
    setActiveLink(name);
  };

  return (
    <div className='md:mx-20 xl:px-40 md:px-20 xs:px-5 xs:mx-0'>
      <div className='flex justify-between'>
        <div className='flex-none'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='flex-none text-right xs:text-left'>
          <TopNav handleClick={handleClick} activeLink={activeLink} />
        </div>
      </div>
      <div className='relative py-10 xl:grid xl:grid-cols-2 xl:gap-x-2'>
        <div>
          <p className='text-5xl font-playfairDisplay  font-bold mt-24 mb-24 relative'>
            Explore and <br />
            Travel
            <img
              src={Element3}
              alt='plus symbol'
              className='absolute left-96 top-0'
            />
          </p>
          <HolidayFinder />
          <img
            src={Element2}
            alt='circle symbol'
            className='absolute -left-20 top-1/2'
          />
        </div>
        <div className='md: mt-20'>
          <img src={thousand} alt='explore the globe' />
        </div>
        <img
          src={Element}
          alt='circle symbol'
          className='absolute bottom-0 left-1/2'
        />
      </div>
    </div>
  );
};

export default Header;
