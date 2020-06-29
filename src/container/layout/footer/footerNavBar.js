import React from 'react';
import classes from './footerNavBar.module.css';
import { FaHamburger, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const FooterNavBar = () => (
  <nav className={classes.navBar__container}>
    <ul>
      <NavLink
        to='/'
        exact
        className={classes.navBar__containerItem}
        activeClassName={classes.navBar__containerItemActive}
      >
        <FaHamburger className='item_style' />
        <p className={classes.navBar__containerTitle}>Burger</p>
      </NavLink>
      <NavLink
        to='/orders'
        className={classes.navBar__containerItem}
        activeClassName={classes.navBar__containerItemActive}
      >
        <FaUserAlt className='item_style' />
        <p className={classes.navBar__containerTitle}>Pedidos</p>
      </NavLink>
      <NavLink
        to='/signin'
        className={classes.navBar__containerItem}
        activeClassName={classes.navBar__containerItemActive}
      >
        <FaSignInAlt className='item_style' />
        <p className={classes.navBar__containerTitle}>Login</p>
      </NavLink>
    </ul>
  </nav>
);

export default FooterNavBar;
