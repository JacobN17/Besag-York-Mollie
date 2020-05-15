import React from 'react';
import { Navbar } from './components/Navbar';
import { SidebarComponent } from './components/SidebarComponent';  
import './App.css';

// navbar list
const navigation: Array<NavLink> = [
  {name: 'BYM', path: './home'}, 
  {name: 'Upload Data', path:'./upload'},
  {name: 'Share', path: './share'}
];

<<<<<<< HEAD
// api endpoint
=======
// api endpointn
>>>>>>> daniel
const path: string = '/upload';

const App: React.FC = () => {
  return (
    <div className="container header-container">
      <ul className="app-header">
        <Navbar link={navigation[0]} />
        <Navbar link={navigation[1]} />
        <Navbar link={navigation[2]} />
<<<<<<< HEAD
      </div>
      
      
        <SidebarComponent action={ path }/>
     


=======
      </ul>
      
        <SidebarComponent action={ path }/>
>>>>>>> daniel
    </div>
  )
}
export default App;