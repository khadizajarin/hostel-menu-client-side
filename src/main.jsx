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
import AddMeal from './Pages/AddMeal';
import AdminMeal from './Pages/AdminMeal';
import AllReviews from './Pages/AllReviews';
import Profile from './Pages/Profile';
import UserReviews from './Pages/UserReviews';
import ServeMeal from './Pages/ServeMeal';
import Upcoming from './Pages/Upcoming';
import PrivateRoute from './Hooks/PrivateRoute';
import AdminRoute from './Hooks/AdminRoute';

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
        element:<PrivateRoute><MealDetails></MealDetails></PrivateRoute>,
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
        element:<PrivateRoute><Requested></Requested></PrivateRoute>
      },
      {
        path:'/dashboard/users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'/dashboard/addMeal',
        element:<AdminRoute><AddMeal></AddMeal></AdminRoute>
      },
      {
        path: '/dashboard/meals',
        element : <AdminRoute><AdminMeal></AdminMeal></AdminRoute>
      },
      {
        path:'/dashboard/reviews',
        element: <AdminRoute><AllReviews></AllReviews></AdminRoute>
      },
      {
        path:'/dashboard/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/dashboard/userReview',
        element: <PrivateRoute><UserReviews></UserReviews></PrivateRoute>
      },
      {
        path:'/dashboard/serve',
        element : <AdminRoute><ServeMeal></ServeMeal></AdminRoute>
      },
      {
        path:'/dashboard/upcoming',
        element: <AdminRoute><Upcoming></Upcoming></AdminRoute>
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
