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
import ErrorRoute from './Pages/ErrorRoute';
import AllUsers from './Pages/AllUsers';
import Requested from './Pages/Requested';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorRoute></ErrorRoute>,
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
        path:'/dashboard/requested',
        element:<Requested></Requested>
      },
      {
        path:'/dashboard/users',
        element:<AllUsers></AllUsers>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
  </QueryClientProvider>
  
)
