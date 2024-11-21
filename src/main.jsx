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
import Careeres from './pages/Careeres.jsx';
import Terms from './pages/Terms.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import errorElement from './components/errorElement.jsx';

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
  {
    path: "careeres",
    element: <Careeres />,
  },
  {
    path: "terms",
    element: <Terms />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "errorElement",
    element: <errorElement />,
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
