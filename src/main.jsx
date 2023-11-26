import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import MealDetails from './MealDetail/MealDetails';
import Main from './assets/Main';
import Login from './Forms/Login';
import Register from './Forms/Register';
import AuthProvider from './Hooks/AuthProvider';
import Meals from './MealDetail/Meals';
import Dashboard from './Layout/Dashboard';
import Cart from './Pages/Cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/meals/:id",
        element:<MealDetails></MealDetails>,
      },
      {
        path:"/meals",
        element:<Meals></Meals>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard/cart',
        element:<Cart></Cart>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
)
