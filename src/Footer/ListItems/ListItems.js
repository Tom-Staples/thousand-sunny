import React from 'react';

const ListItems = props => {
  const listArray = props.items.map((item, index) => {
    return (
      <li key={index} className='mb-3'>
        {item}
      </li>
    );
  });

  return (
    <div>
      <h3 className='font-bold text-darkBlack text-lg mb-5'>{props.name}</h3>
      <ul>{listArray}</ul>
    </div>
  );
};

export default ListItems;
