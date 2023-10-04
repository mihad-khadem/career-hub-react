import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import Jobs from './Components/Jobs/Jobs'
import Statistics from './Components/Statistics/Statistics'
import Blog from './Components/Blogs/Blog'
import ErrorPage from './Components/Error/ErrorPage'
import JobDetails from './Components/JobDetail/JobDetails'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/job/:id',
        element:<JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
