import React from 'react';
import { NavbarItem } from './components/NavbarItem';

const navigation: Array<NavigationLink> = [
  {name: 'BYM', path: './home'}, 
  {name: 'Upload Data', path:'./upload'},
  {name: 'Share', path: './share'}
];

const App: React.FC = () => {
  return (
    <div>
        <NavbarItem link={navigation[0]} />
        <NavbarItem link={navigation[1]} />
        <NavbarItem link={navigation[2]} />
    </div>
  )
}

export default App;
