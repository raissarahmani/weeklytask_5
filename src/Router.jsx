import React from 'react'
import { Routes, Route } from "react-router-dom";

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

function Router() {
  return (
    <Routes>
        <Route path="/" element = {<Dashboard />}>
            <Route index element = {<Home />} />
            <Route path="now-playing" element = {<HomeRouter />}>
              <Route index element = {<Home2 />} />
              <Route path="detail" element = {<Detail />} />
              <Route path="order" element = {<Order />} />
              <Route path="payment" element = {<Payment />} />
              <Route path="success" element = {<Success />} />
            </Route>
        </Route>

        <Route path="/auth" element = {<Auth />}>
            <Route index element = {<Signin />} />
            <Route path="register" element = {<Signup />} />
        </Route>

        {/* <Route path="/profile-page" element = {<ProfilePage />}> 
            <Route index element = {<Profile />} />
            <Route path="history" element = {<History />} />
        </Route> */}
    </Routes>
  )
}

export default Router
