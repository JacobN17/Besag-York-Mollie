import React from 'react';
import { Navbar } from './components/Navbar';
import './App.css';

const navigation: Array<NavLink> = [
  {name: 'BYM', path: './home'}, 
  {name: 'Upload Data', path:'./upload'},
  {name: 'Share', path: './share'}
];

const App: React.FC = () => {
  return (
    <div className="container header-container">
      <div className="app-header">
        <Navbar link={navigation[0]} />
        <Navbar link={navigation[1]} />
        <Navbar link={navigation[2]} />
      </div>
    </div>
    
  )
}

export default App;
