/* eslint-disable */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: '/todo-list-with-reactjs',
      text: 'Home',
    },
    {
      id: 2,
      path: '/todo-list-with-reactjs/about',
      text: 'About',
    },
  ];

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="navBar">
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu
              style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
            />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                style={({ isActive }) =>
                  isActive
                    ? { color: 'orange', textDecoration: 'underline' }
                    : { color: 'black', textDecoration: 'none' }
                }
                onClick={() => closeMenu()}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
