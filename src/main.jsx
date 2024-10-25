import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './pages/Services.jsx';
import Faqs from './pages/Faqs.jsx';
import Blog from './pages/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <App />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "faqs",
    element: <Faqs />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
