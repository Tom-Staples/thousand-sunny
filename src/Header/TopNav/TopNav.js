import React from 'react';

const TopNav = props => {
  const navItems = [
    'Home',
    'Destinations',
    'About',
    'Partner',
    'Login',
    'Register'
  ];

  const listItems = navItems.map((item, index) => {
    if (item === 'Login') {
      return (
        <li
          key={index}
          className='mr-5 border border-orange rounded-md px-7 py-3 text-orange font-medium md:inline xs:mb-5'
        >
          <button>{item}</button>
        </li>
      );
    }
    if (item === 'Register') {
      return (
        <li
          key={index}
          className='mr-5 border bg-orange rounded-md px-7 py-3 text-white font-medium md:inline xs:mb-5'
        >
          <button>{item}</button>
        </li>
      );
    }
    return (
      <li
        key={index}
        className={`${
          props.activeLink === item ? 'text-black font-medium' : 'text-gray'
        } mr-5 md:inline xs:mb-5`}
      >
        <button
          onClick={() => {
            props.handleClick(item);
          }}
        >
          {item}
        </button>
      </li>
    );
  });

  return <ul className='font-inter mb-24'>{listItems}</ul>;
};

export default TopNav;
