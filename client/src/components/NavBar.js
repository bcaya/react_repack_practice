import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth'; 

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#4dd0e1',
  }
}

const additionalLinks = (history) => {
  
}

const NavBar = () => (
  <nav>
    <NavLink 
      exact
      activeStyle={styles.active} 
      to="/"
    >
      Home
    </NavLink>
    {' '}
    <NavLink 
      to="/about"
      activeStyle={styles.active}
    >
      About
    </NavLink>
    {additionalLinks(history)}
  </nav>
)

export default NavBar;