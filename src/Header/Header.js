import React from 'react';
import Nav from './Nav';
import Brand from './Brand';
import styles from './Header.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Brand />
      <Nav items={['Components', 'Samples', 'Misc']}/>
    </div>
  );
};

export default Header;