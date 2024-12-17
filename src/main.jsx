import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

import App from './App.jsx';
import Services from './pages/Services.jsx';
import Faqs from './pages/Faqs.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import BlogPost from './pages/blog/BlogPost.jsx';
import Careeres from './pages/Careeres.jsx';
import Terms from './pages/Terms.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import errorElement from './components/errorElement.jsx';
import SkeletonLoader from './components/SeletonLoader.jsx';
import Layout from './components/Layout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all routes with Layout
    children: [
      {
        index: true, // Default route
        element: <App />, // Home page component
      },
      {
        path: "home",
        element: <App />, // Duplicate for `/home`
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
    ],
  },
  {
    path: "errorElement",
    element: <errorElement />,
  },
  {
    path: "loading",
    element: <SkeletonLoader />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
