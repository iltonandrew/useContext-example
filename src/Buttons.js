import React from 'react';
import { useMenuUpdate, useMenu } from './hook';

export default function Buttons() {
  const toggleMenu = useMenuUpdate();
  return (
    <div>
      <button
        onClick={() => {
          toggleMenu('Button 1');
        }}
      >
        Button 1
      </button>
      <button onClick={() => toggleMenu('Button 2')}>Button 2</button>
      <button onClick={() => toggleMenu('Button 3')}>Button 3</button>
    </div>
  );
}
