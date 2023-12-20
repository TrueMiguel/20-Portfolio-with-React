import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './App.css'

// brining in the required import from 'react-route-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing the page components
import Home from './pages/About.jsx';
import Error from './pages/Error.jsx'
import Portfolio from './card/CardPortfolio.jsx'
import Contact from './pages/Contact.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

// defining the accessible routes and which components respond to which URL. 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
