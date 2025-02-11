import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.js'
import Home from './components/Home/Home.jsx'

// const router = createBrowserRouter({
//     path : '/',
//     element: <Layout />,
//     children:[{
//         path: "",
//         element :<Home />
//     }]
// })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
