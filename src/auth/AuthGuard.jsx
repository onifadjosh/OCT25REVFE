import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthGuard = ({isAuthenticated, redirect_path="/login", children}) => {

    if(!isAuthenticated){
        return <Navigate  to={redirect_path} replace/>
    }else{
      return children?children:<Outlet/>
    }
  
}

export default AuthGuard