import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import RootLayout from './layout/RootLayout';
import Stats from './pages/Stats';
import Timeline from './pages/Timeline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
   children:[
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/stats",
      element: <Stats/>,
    },
    {
      path: "/timeline",
      element: <Timeline/>,
    },

    
   ],
   errorElement: <div>Error</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,
  </StrictMode>
)
