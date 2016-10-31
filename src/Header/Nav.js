import React, { Component } from 'react';
import NavItem from './NavItem';
import styles from './Header.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "components",
        "examples",
        "more..."        
      ],
      activeItem: props.activeItem || null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    if (item === this.state.activeItem) return;
    this.setState({activeItem: item});
  }

  render() {
    return (
      <ul className={styles.list}>
        {this.state.items.map((item) => 
          <NavItem key={item} 
            item={item} 
            isActive={this.state.activeItem === item}
            onClick={this.handleClick}
          />
        )}
      </ul>
    );
  }
};