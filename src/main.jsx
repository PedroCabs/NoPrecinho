import { StrictMode } from 'react'
import './index.css'
import ReactDOM from 'react-dom/client';
import React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "../src/pages/Home/Index.jsx"
import Search from "../src/pages/Search"
import Login from "../src/pages/Login"
import SignUp from './pages/SignUp/index.jsx';
/*
import SignUp from "../src/pages/SignUp"

import Product from "../src/pages/Product"*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
}, 
{
  path:"/search" ,
  element: <Search/>
},
{
  path: "/login",
  element: <Login/>
},
{
  path: "/signup",
  element: <SignUp/>
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
