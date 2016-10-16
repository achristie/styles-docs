import React from 'react';
import styles from './Header.scss';

const NavItem = ({ onClick, item, isActive }) => {
  return (
    <li 
      className={[styles.item, isActive ? styles.active : ""].join(" ")} 
      onClick={() => onClick(item)}>
      <a className={styles.link}> {item} </a>
    </li>
  );
};

export default NavItem;