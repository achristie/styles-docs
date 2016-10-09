import React from 'react';
import NavItem from './NavItem';

const Nav = ({ items }) => {
  return (
    <ul>
      {items.map((item) => 
        <NavItem key={item} item={item} />
      )}
    </ul>
  );
};

export default Nav;