import React from 'react';
import Nav from './Nav';
import Brand from './Brand';

const Header = () => {
  return (
    <section className='header'>
      <Brand />
      <Nav items={['Components', 'Samples', 'Misc']}/>
    </section>
  );
};

export default Header;