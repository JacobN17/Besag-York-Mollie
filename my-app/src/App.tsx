// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


<<<<<<< HEAD
<<<<<<< HEAD
// api endpoint
=======
// api endpointn
>>>>>>> daniel
const path: string = '/upload';
=======
import * as React from 'react';
import { Header } from './components';
>>>>>>> daniel

export const App: React.FC <{}> = (props) => {
  return (
<<<<<<< HEAD
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
=======
      <Header />
>>>>>>> daniel
  )
};

