import React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router';

const NavItem = ({ onClick, item, isActive }) => {
  return (
    <li 
      className={[styles.item, isActive ? styles.active : ""].join(" ")} 
      onClick={() => onClick(item)}>
      <Link to={`/${item}`} 
        className={styles.link}>
        {item}
      </Link>
    </li>
  );
};

export default NavItem;