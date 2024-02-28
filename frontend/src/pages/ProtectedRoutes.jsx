import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProtectedRoutes({ canActivate, redirectPath = "/" }) {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
