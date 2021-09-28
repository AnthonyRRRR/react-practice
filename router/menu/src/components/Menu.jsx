import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  const [menuItems, setMenuItems] = useState([
    {
      name: 'Главная',
      link: '/',
      id: 1
    },
    {
      name: 'Дрифт-такси',
      link: '/drift',
      id: 2
    },
    {
      name: 'Time Attack',
      link: '/timeattack',
      id: 3
    },
    {
      name: 'Forza Karting',
      link: '/forza',
      id: 4
    }
  ])


  return (
    <nav className="menu">
      { menuItems.map(menuItem =>
        <NavLink
          key={menuItem.id}
          className="menu__item"
          activeClassName="menu__item-active"
          exact to={ menuItem.link }
        >
          { menuItem.name }
        </NavLink>
      ) }
    </nav>
  )
};

Menu.propTypes = {};

export default Menu