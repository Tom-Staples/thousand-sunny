import React from 'react';
import Story from './Story/Story';
import Story1 from '../images/story1.png';
import Story2 from '../images/story2.png';
import Story3 from '../images/story3.png';
import Story4 from '../images/story4.png';
import Element from '../images/elementSection6.png';
import Element2 from '../images/element2Section6.png';
import Element3 from '../images/element3Section6.png';

const Section6 = () => {
  const stories = {
    story1: {
      image: Story1,
      title: 'The many benefits of taking a healing holiday',
      description:
        "'Healing holidays' are on the rise to help maximise your health and happines..."
    },
    story2: {
      image: Story2,
      title: 'The best Kyoto restaurant to try Japanese food',
      description:
        "From tofu to teahouses, here's our guide to Kyoto's best restaurants to visit..."
    },
    story3: {
      image: Story3,
      title: 'Skip Chicken Itza and head to this remote Yucatan',
      description:
        "It's remote and challenging to get, but braving the jungle and exploring these ruins without the..."
    },
    story4: {
      image: Story4,
      title: "Surf's up at these beginner spots around the world",
      description:
        "If learning to surf has been on your to-do list for a while, the good news is; it's never too late..."
    }
  };

  const storiesArray = Object.values(stories).map((item, index) => {
    return <Story item={item} index={index} key={index} />;
  });

  return (
    <div className='mt-64 relative gap-y-52 gap-x-5 md:mx-20 md:py-10 md:x-20 xl:grid xl:grid-cols-4 xl:grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-3 xs:mx-5 xs:pl-0'>
      <img
        src={Element}
        alt='plus symbol'
        className='absolute top-0 left-1/3'
      />
      <h2 className='font-playfairDisplay font-bold text-4xl xl:col-span-2 md:col-span-1 xs:inline xs:mr-5'>
        Trending stories
      </h2>
      <span className='justify-self-end text-orange font-inter font-semibold pr-10 xl:col-span-2 md:col-span-1'>
        View all>
      </span>
      {storiesArray}
      <img
        src={Element3}
        alt='circle symbol'
        className='absolute left-0 top-2/3'
      />
      <img
        src={Element2}
        alt='circle symbol'
        className='absolute left-2/3 bottom-0'
      />
    </div>
  );
};

export default Section6;
