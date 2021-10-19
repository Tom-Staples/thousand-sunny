import React from 'react';

const Story = props => {
  return (
    <div className='mb-10 md:-mt-60 xs:mt-5'>
      <img src={props.item.image} alt={`Trending story ${props.index + 1}`} />
      <h3 className='font-inter font-bold w-4/5 -mt-20 mb-5'>
        {props.item.title}
      </h3>
      <p className='font-inter font-normal text-variant1Gray w-4/5 text-sm mb-5'>
        {props.item.description}
      </p>
      <span className='font-inter font-semibold text-orange text-sm'>
        Read more
      </span>
    </div>
  );
};

export default Story;
