import React, { useState } from 'react';

const DropdownBox = props => {
  //Controls the active value of the dropdown box
  const [activeValue, setActiveValue] = useState(props.item[0]);

  const handleChange = e => {
    setActiveValue(e.target.value);
  };

  const boxName =
    props.item[0].substring(0, 1).toUpperCase() + props.item[0].substring(1);
  const boxItems = props.item[1];

  const boxItemsDisplay = boxItems.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <select
      key={props.index}
      className='p-2 border rounded border-lightGray xs:col-span-2  sm:col-span-1'
      value={activeValue}
      onChange={handleChange}
    >
      <option>{boxName}</option>
      {boxItemsDisplay}
    </select>
  );
};

export default DropdownBox;
