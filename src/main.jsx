import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='w-full max-w-7xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
