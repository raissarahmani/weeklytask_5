import React from 'react'
import { Routes, Route } from "react-router";

import Dashboard from './Dashboard';
import Home from './pages/Home';
import HomeRouter from './pages/Home/HomeRouter';
import Home2 from './pages/Home2';
import Detail from './pages/Detail';
import Order from './pages/Order';
import Payment from './pages/Payment';
import Success from './pages/Success';

import Auth from './Auth';
import Signup from './pages/Signup'
import Signin from './pages/Signin'

import ProfilePage from './ProfilePage'
import Profile from './pages/Profile'
import History from './pages/History'

import AdminPage from './AdminPage';
import Admin from './pages/Admin';
import AdminMovie from './pages/AdminMovie';
import AdminAddMovie from './pages/AdminAddMovie'
import { AdminRoute, AuthRedirect, PrivateRoute } from './components/PrivateRoute';

function Router() {
  return (
    <Routes>
        <Route path="/" element = {<Dashboard />}>
            <Route index element = {<Home />} />
            <Route path="now-playing" element = {<HomeRouter />}>
              <Route index element = {<Home2 />} />
              <Route path="movie/:id" element = {<Detail />} />
              <Route element={<PrivateRoute />}>
                  <Route path="order" element = {<Order />} />
                  <Route path="payment" element = {<Payment />} />
                  <Route path="success" element = {<Success />} />
              </Route>
            </Route>
        </Route>

        <Route element = {<AuthRedirect/>}>
            <Route path="/auth" element = {<Auth />}>
                <Route index element = {<Signin />} />
                <Route path="register" element = {<Signup />} />
            </Route>
        </Route>

        <Route path="/profile-page" element = {<ProfilePage />}> 
            <Route index element = {<Profile />} />
            <Route path="history" element = {<History />} />
        </Route>

        <Route element = {<AdminRoute />} >
            <Route path="/admin" element = {<AdminPage />} >
            <Route index element = {<Admin />} />
                <Route path="movie-list" element = {<AdminMovie />} />
                <Route path="add-movie" element = {<AdminAddMovie />} />
            </Route>
        </Route>
    </Routes>
  )
}

export default Router
