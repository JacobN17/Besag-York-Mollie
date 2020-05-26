import React from 'react';
import { Navbar } from './components/Navbar';
import { SidebarComponent } from './components/SidebarComponent';  
import { StanComponent } from './components/StanComponent';
import './App.css';

// navbar list
const navigation: Array<NavLink> = [
  {name: 'BYM', path: './home'}, 
  {name: 'Upload Data', path:'./upload'},
  {name: 'Share', path: './share'}
];

const path: string = '/upload';
const share: string = '/share'; // TODO: implement this 
//<SidebarComponent action={ path }/>

const App: React.FC = () => {
  return (
    <div className="container header-container">
      <ul className="app-header">
        <Navbar link={ navigation[0] } />
        <Navbar link={ navigation[1] } />
        <Navbar link={ navigation[2] } />
      </ul>
      
       
        
        <StanComponent action={ path }/>
        
        

    </div>
  )
}
export default App;