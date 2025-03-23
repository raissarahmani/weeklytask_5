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
  return user?.email === 'test@admin.com' && user?.pass === '1234admin' ? <Navigate to="/admin" /> : <Navigate to="/" />
}

