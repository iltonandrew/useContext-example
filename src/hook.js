import React, { useContext, useState } from 'react';

const MenuContext = React.createContext();
const MenuUpdateContext = React.createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export function useMenuUpdate() {
  return useContext(MenuUpdateContext);
}

export function ThemeProvider({ children }) {
  const [menu, setMenu] = useState('default');

  function toggleMenu(menu) {
    setMenu(menu);
  }
  return (
    <MenuContext.Provider value={menu}>
      <MenuUpdateContext.Provider value={(menu) => toggleMenu(menu)}>{children}</MenuUpdateContext.Provider>
    </MenuContext.Provider>
  );
}
