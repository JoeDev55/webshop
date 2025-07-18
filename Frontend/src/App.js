import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import Products from './pages/Products.js';
import MyProfile from './pages/MyProfile.js';
import NotFound from './pages/NotFound.js';
import SignUp from './pages/SignUp.js';
import LogIn from './pages/LogIn.js';
import Checkout from './pages/Checkout.js'
import Pay from './pages/Pay.js';
import Success from './pages/Success.js';
import Cancel from './pages/Cancel.js';
import { useEffect, useState } from 'react';
import { UserProvider } from './pages/UserContext.js';

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
  
  { path: '/myProfile', element: <MyProfile /> },
  { path: '/signUp', element: <SignUp /> },
  { path: '/logIn', element: <LogIn /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/pay', element: <Pay /> },
  { path: '/success', element: <Success /> },
  { path: '/cancel', element: <Cancel /> },
  { path: '*', element: <NotFound /> }
]);


  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
