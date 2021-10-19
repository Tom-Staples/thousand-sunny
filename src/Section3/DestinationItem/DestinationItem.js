import React from 'react';

const DesinationItem = props => {
  return (
    <div
      className={`xl:-mt-40 xl:${props.justify} md:justify-self-start md:-mt-48 xs:mb-5 xs:mt-5`}
    >
      <img src={props.item} alt={`Destination${props.index + 1}`} />
    </div>
  );
};

export default DesinationItem;
