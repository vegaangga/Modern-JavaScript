import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Vega from './Vega';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const Hello = () =>{
  return <p>Hello</p>
}

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<Vega />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
