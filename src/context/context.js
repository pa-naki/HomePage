import React, { useState } from 'react';
import navitem from '../constants/navitem.js';

export const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState(navitem);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, navLinks }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export default ({ element }) => <GatsbyProvider>{element}</GatsbyProvider>;