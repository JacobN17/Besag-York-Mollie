// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {App} from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// @ts-ignore
import * as React from 'react';
// @ts-ignore
import * as ReactDOM from 'react-dom';
// @ts-ignore
import { AppRouter } from './router';

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);
