import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { store } from '../../app/store'
import { Navigate } from 'react-router'

const MainProtected = () => {

  let {isAuthenticated,user,isLoading}  = useSelector((store)=>store.auth);
  if (isLoading) return <h1>Loading state...</h1>
  if (!user)
  {
    return <Navigate to={"/"}/>
  }

  return <Outlet/>
}

export default MainProtected