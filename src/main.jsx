
import { createRoot } from 'react-dom/client'
import Homepage from './pages/Homepage'
import DisplayProduct from './pages/DisplayProduct'
import Contact from './pages/Contact'
import Webroot from './root/webroot.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Webroot/> ,
    children:[
      {
        path: "/",
        element:<Homepage/> ,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/DisplayProduct/:id",
        element: <DisplayProduct/>,
      },
      
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
