import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../app/layout/authLayout'
import PublicProtected from './protected/PublicProtected'
import LoginPage from '../features/auth/ui/pages/loginPage'
import RegisterPage from '../features/auth/ui/pages/registerPage'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layout/mainLayout'
import HomePage from '../shared/ui/pages/HomePage'
import ProductPage from '../features/products/ui/pages/ProductPage'
import CartPage from '../features/cart/ui/pages/CartPage'
import OrderPage from '../features/order/ui/pages/OrderPage'
import { useDispatch } from 'react-redux'
import { hydrateUserAction } from '../features/auth/state/authAction'
import AboutPage from '../shared/ui/pages/AboutPage'

const AppRoutes = () => {

  let dispatch = useDispatch()

  useEffect(()=>
  {
    (()=>{
        try {
          dispatch(hydrateUserAction())
        } catch (error) {
          console.log("Error in hydration",error);
          
        }
    })()
  },[])




  let router = createBrowserRouter([
    {
      path:"/",
      element:<PublicProtected />,
      children:[
        {
          path:"",
          element:<AuthLayout/>,
          children:[
            {
            path:"",
            element:<LoginPage/>,
          },
          {
            path:"register",
            element:<RegisterPage/>
          }
        ]
        }
      ]
    },
    {
      path:"/main",
      element:<MainProtected/>,
      children:[{
        path:"",
        element:<MainLayout/>,
        children:[{
          path:"",
          element:<HomePage/>
        },
        {
          path:"product",
          element:<ProductPage/>
        },
        {
          path:"cart",
          element:<CartPage/>
        },
        {
          path:"orders",
          element:<OrderPage/>
        },
                {
          path:"about",
          element:<AboutPage/>
        },

      ]
      }]
    }
  ])


  return <RouterProvider router={router} />
}

export default AppRoutes