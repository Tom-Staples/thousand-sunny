import React from 'react';
import DropdownBox from './DropdownBox/DropdownBox';

const HolidayFinder = () => {
  const holidaySpecs = {
    location: ['France', 'USA', 'Spain', 'Australia'],
    activity: ['Relaxation', 'Skiing', 'Scuba-Diving', 'Exploration'],
    grade: ['5 Star', '4 Star', '3 Star', '2 Star'],
    date: ['Summer', 'Winter', 'Spring', 'Autumn']
  };

  const dropdownArray = Object.entries(holidaySpecs).map((item, index) => {
    return <DropdownBox item={item} index={index} key={index} />;
  });

  return (
    <div className='font-inter'>
      <h2 className='font-semibold'>Holiday finder</h2>
      <p>___</p>
      <form className='mt-10 text-lightBlack xs:grid grid-cols-1 grid-rows-5 w-full md:w-3/5 grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8'>
        {dropdownArray}
        <button className='bg-orange rounded-md px-7 py-3 text-white font-mulish font-bold sm:col-span-1 xs:col-span-2'>
          Explore
        </button>
      </form>
    </div>
  );
};

export default HolidayFinder;
