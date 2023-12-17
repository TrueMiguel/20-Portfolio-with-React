// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';

// brining in the required import from 'react-route-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing the page components
import Home from './pages/Home.jsx';
// import Error from './pages/Error.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

// defining the accessible routes and which components respond to which URL. 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
