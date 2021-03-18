import React from 'react';
import { useMenu } from './hook';

export default function Rest() {
  const menu = useMenu();
  return <h1>{menu}</h1>;
}
