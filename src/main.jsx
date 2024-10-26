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
import Contact from './pages/Contact.jsx';
import BlogPost from './pages/blog/BlogPost.jsx';

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
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "blogpost",
    element: <BlogPost />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
