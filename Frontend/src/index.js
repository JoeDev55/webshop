import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import Homepage from './pages/Homepage.js';
import Products from './pages/Products.js';
import AboutUs from './pages/AboutUs.js';
import MyProfile from './pages/MyProfile.js';
import NotFound from './pages/NotFound.js';
import reportWebVitals from './reportWebVitals';



const router = createBrowserRouter([
  {path: '/', element:<Homepage/>},
  {path: '/products',element:<Products/>},
  {path: '/aboutUs',element:<AboutUs/>},
  {path: '/myProfile',element:<MyProfile/>},
  {path: '*',element:<NotFound/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
