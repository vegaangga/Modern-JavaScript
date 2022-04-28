import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogPost from './container/BlogPost/BlogPost';
import reportWebVitals from './reportWebVitals';
import Tugas from './Tugas/Tugas'

// ReactDOM.render(
//   <BlogPost />,
//   document.getElementById('content')
// );

ReactDOM.render(
  <Tugas />,
  document.getElementById('content')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
