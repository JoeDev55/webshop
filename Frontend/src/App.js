import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import Products from './pages/Products.js';
import AboutUs from './pages/AboutUs.js';
import MyProfile from './pages/MyProfile.js';
import NotFound from './pages/NotFound.js';
import SignUp from './pages/SignUp.js';
import LogIn from './pages/LogIn.js';
import { useEffect, useState } from 'react';
function App() {

const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem('shoppingList');
    if (savedList) {
      setShoppingList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);


const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/products', element: <Products shoppingList={shoppingList} setShoppingList={setShoppingList}/> },
  { path: '/aboutUs', element: <AboutUs /> },
  { path: '/myProfile', element: <MyProfile /> },
  { path: '/signUp', element: <SignUp /> },
  { path: '/logIn', element: <LogIn /> },
  { path: '*', element: <NotFound /> }
]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
