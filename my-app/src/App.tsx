import React from 'react';
import { NavbarItem } from './components/NavbarItem';
import './App.css';

const navigation: Array<NavigationLink> = [
  {name: 'BYM', path: './home'}, 
  {name: 'Upload Data', path:'./upload'},
  {name: 'Share', path: './share'}
];

const App: React.FC = () => {
  return (
    <div>
      <ul>
        <NavbarItem link={navigation[0]} />
        <NavbarItem link={navigation[1]} />
        <NavbarItem link={navigation[2]} />
      </ul>
    </div>
  )
}

export default App;
