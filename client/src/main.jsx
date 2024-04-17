import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./Pages/Home"
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }, 
  {
    path: "/profile",
    element: <Profile />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
