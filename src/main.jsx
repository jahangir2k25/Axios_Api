import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import RootLayout from './RootLayout.jsx';
import App from './App.jsx';
import Shop from './Pages/Shop.jsx';
import About from './Pages/About';
import Contact from './Pages/Contact.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import Context from './ContextApi/Context.jsx';


const router =
  createBrowserRouter([
    {
      path: "/", Component: RootLayout,
      children: [
        { index: true, Component: App },
        { path: 'Shop', Component: Shop },
        { path: 'About', Component: About },
        { path: 'Contact', Component: Contact },
        { path: 'Product/:id', Component: ProductDetails }
      ]
    },
  ]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>,
)
