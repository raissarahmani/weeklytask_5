import { Navigate, Outlet } from "react-router"
import { useSelector } from "react-redux"

export const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user)
  return user ? <Outlet /> : <Navigate to="/auth" />
}

export const AuthRedirect = () => {
  const user = useSelector((state) => state.auth.user)
  return user ? <Navigate to="/" /> : <Outlet />
}

export const AdminRoute = () => {
  const user = useSelector((state) => state.auth.user)
  return user?.role === 'admin' ? <Outlet /> : <Navigate to="/" />
}

export const ClientRoute = () => {
  const user = useSelector((state) => state.auth.user)
  return user?.role !== 'admin' ? <Outlet /> : <Navigate to="/admin" />
}