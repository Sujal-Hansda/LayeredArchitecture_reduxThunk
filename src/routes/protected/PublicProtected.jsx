import React from 'react'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

const PublicProtected = () => {
    let {isAuthenticated,user,isLoading}  = useSelector((store)=>store.auth);

    if (isLoading) return <h1>State Loading...</h1>
  
    if (user)
  {
    return <Navigate to={"/main"}/>
  }
  return <Outlet/>
}

export default PublicProtected