import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtecedRoutes=()=> {
        const IsAuth=window.sessionStorage.getItem('TokenValue:')
        console.log("Value of IsAuth: ",IsAuth);
    
      return IsAuth ? <Outlet/> : <Navigate to ="/login"/>
};

export default ProtecedRoutes;