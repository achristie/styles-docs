import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <section className='header'>
      <Nav items={['Components', 'Samples', 'Misc']}/>
    </section>
  );
};

export default Header;