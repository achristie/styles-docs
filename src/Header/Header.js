import React, { Component } from 'react';
import Nav from './Nav';
import styles from './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {  
    return (
      <div className={styles.header}>
        <Nav />
      </div>
    );
  }

  componentWillUnmount() {
    console.log('unmounted');
  }
  
};

export default Header;