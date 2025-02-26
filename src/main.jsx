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
import Ambasador from './pages/Ambasador.jsx';
import Dashbaord from './pages/admin/inxex.jsx';
import Stores from './pages/admin/stores/Stores.jsx';
import Users from './pages/admin/users/Users.jsx';
import Agents from './pages/admin/Agents/Agents.jsx';
import Transactions from './pages/admin/transactions/Transactions.jsx';
import Orders from './pages/admin/orders/Orders.jsx';
import Settings from './pages/admin/settings/Settings.jsx';
import Support from './pages/admin/support/support.jsx';



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
      {
        path: "become-ambassador",
        element: <Ambasador />,
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
  {
    path: "dashboard",
    element: <Dashbaord />,
  },
  {
    path: "dashboard/stores",
    element: <Stores />,
  },
  {
    path: "dashboard/users",
    element: <Users />,
  },
  {
    path: "dashboard/agents",
    element: <Agents />,
  },
  {
    path: "dashboard/transactions",
    element: <Transactions />,
  },
  {
    path: "dashboard/orders",
    element: <Orders />,
  },
  {
    path: "dashboard/support",
    element: <Support />,
  },
  {
    path: "dashboard/settings",
    element: <Settings />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
