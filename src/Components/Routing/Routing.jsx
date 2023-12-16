import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Login/Login'
import Home from '../../Pages/Home/Home'
import User from '../../Pages/Users/User'
import Child from '../../Pages/Child/Child'
import Vaccine from '../../Pages/vaccine/Vaccine'
import Doctor from '../../Pages/Doctor/Doctor'

function Routing() {
    const [isLogin, setisLogin] = useState(localStorage.getItem('islogin'))
  return (
    <>
        <BrowserRouter>
                {
                    isLogin == null ? 
                    <>
                    <Routes>
                        <Route path="/" element={<Navigate to='/login' />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Navigate to='/' />} />
                    </Routes>
                    </> :
                    <>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/child" element={<Child />} />
                        <Route path="/vaccine" element={<Vaccine />} />
                        <Route path="/doctor" element={<Doctor />} />
                        <Route path="*" element={<Navigate to='/' />} />
                    </Routes>
                    </>
                }
                
        </BrowserRouter>
    </>
  )
}

export default Routing