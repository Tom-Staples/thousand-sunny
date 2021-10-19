import React from 'react';
import ListItems from './ListItems/ListItems';
import Logo from '../images/logo.png';
import Twitter from '../images/twitter.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Linkedin from '../images/linkedin.png';
import Youtube from '../images/youtube.png';

const Footer = () => {
  const destinations = ['Africa', 'Antartica', 'Asia', 'Europe', 'America'];
  const shop = [
    'Destination Guides',
    'Pictorial & Gifts',
    'Special Offers',
    'Delivery Times',
    'FAQs'
  ];
  const interests = [
    'Adventure Travel',
    'Art And Culture',
    'Wildlife And Nature',
    'Family Holidays',
    'Food And Drink'
  ];

  const socialIcons = [Twitter, Facebook, Instagram, Linkedin, Youtube];

  const socialIconsArray = socialIcons.map((icon, index) => {
    return (
      <img
        src={icon}
        key={index}
        alt='social media icon'
        className='inline mx-5'
      />
    );
  });
  return (
    <div className='gap-x-16 mt-64 bg-footerGray pt-20 px-20 font-mulish font-light text-footerTextGray md:grid md:grid-cols-4 md:grid-rows-2 xs:px-5 xs:py-5 xs:text-center'>
      <div className='xs:mb-10'>
        <img alt='logo' src={Logo} className='xs:inline' />
        <p className='mt-5 mb-10'>
          Plan and book your perfect trip with <br />
          expert advice, travel tips and destination <br />
          information from us
        </p>
        <p>©2020 Thousand Sunny. All rights reserved</p>
      </div>
      <ListItems name='Destinations' items={destinations} />
      <ListItems name='Shop' items={shop} />
      <ListItems name='Interests' items={interests} />
      <div className='col-span-4 border-t border-footerDividerGray mt-20 pt-5 text-center'>
        {socialIconsArray}
      </div>
    </div>
  );
};

export default Footer;
