import { StrictMode } from 'react'
import './index.css'
import ReactDOM from 'react-dom/client';
import React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from '../src/pages/Home'
/*import Login from "../src/pages/Login"
import SignUp from "../src/pages/SignUp"
import Search from "../src/pages/Search"
import Product from "../src/pages/Product"*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
}, 

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
