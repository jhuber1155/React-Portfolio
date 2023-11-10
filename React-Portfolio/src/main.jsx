import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import About from '../src/components/pages/About';
import Portfolio from '../src/components/pages/About';
import Contact from '../src/components/pages/Contact';
import Resume from '../src/components/pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, //The ABOUT PAGE goes up here ????
    children: [
        {
            path: 'about',
            element: <About />
        },
        {
            path: 'portfolio',
            element: <Portfolio />,
        },
        {
            path: 'contact',
            element: <Contact />,
        },
        {
            path: 'resume',
            element: <Resume />,
        },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
