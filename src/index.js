import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home, Topics, Contact } from "./component/component";
import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <h1>Hello React Router DOM</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Topics">Topics</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Topics/*" element={<Topics />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/*" element={'Not found'}></Route>
        </Routes>
      </div>
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
