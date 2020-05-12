// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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

// export default App;


import React from 'react';
import { Navbar } from './components/Navbar';
import './components/Navbar.css';
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