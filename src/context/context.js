import React, { useState, createContext, useContext } from 'react';
import navitem from '../constants/navitem.js';

const GatsbyContext = createContext();

const GatsbyProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState(navitem);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const showSidebar = () => {
    setIsSidebarOpen(true);
  };
  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, navLinks, showSidebar, hideSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  );
};

export { GatsbyProvider, GatsbyContext };
