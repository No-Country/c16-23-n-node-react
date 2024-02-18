import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes () {

  if(localStorage.getItem('token')) {
    return <Outlet />
  } else {
    return <Navigate to='/login' />
  }
}

export default ProtectedRoutes