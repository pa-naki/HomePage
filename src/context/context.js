import React, { useState, createContext, useContext } from 'react';
import navitem from '../constants/navitem.js';



const GatsbyContext = createContext();

const GatsbyProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState(navitem);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, navLinks }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyProvider, GatsbyContext}