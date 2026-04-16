import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import RootLayout from './layout/RootLayout';
import Stats from './pages/Stats';
import Timeline from './pages/Timeline';
import Home from './pages/Home';
import Error from '../src/Componats/shared/Error';
import FrindDetalis from './pages/FrindDetalis';
import TimelineProvider from "./context/TimelineContext";
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
   children:[
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/stats",
      element: <Stats/>,
    },
    {
      path: "/timeline",
      element: <Timeline/>,
    },
    {
      path: "/Frind/:id",
      element: <FrindDetalis/>,
    },
   ],
   errorElement: <Error/>,
  },
  
  
]);




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <Toaster />
    </TimelineProvider>
  </StrictMode>
);
