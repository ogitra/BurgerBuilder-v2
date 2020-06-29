import React from 'react';
import classes from './layout.module.css';
import { Route, Switch } from 'react-router-dom';

import Header from './header/header';
import FooterNavBar from './footer/footerNavBar';
import Burger from '../burger/burger';
import ContactData from '../contactData/contactData';
import Orders from '../../container/orders/orders';

const Layout = () => (
  <div className={classes.layout__container}>
    <Header />
    <main>
      <Switch>
        <Route path='/contactdata' render={(props) => <ContactData {...props} />} />
        <Route path='/orders' render={(props) => <Orders {...props} />} />
        <Route render={(props) => <Burger {...props} />} />
      </Switch>
    </main>
    <FooterNavBar />
  </div>
);

export default Layout;
