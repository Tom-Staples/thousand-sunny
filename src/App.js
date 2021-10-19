import React from 'react';
import Header from './Header/Header';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className='bg-backgroundGray'>
      <div className='pt-10  w-4/5 mx-auto bg-white'>
        <Header />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </div>
  );
};

export default App;
