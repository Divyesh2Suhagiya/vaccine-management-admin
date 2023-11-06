import React from 'react'
import './Dashboard.css'
import { Link, NavLink, Outlet} from 'react-router-dom'
import { DiReact } from "react-icons/di";
import Countdown from 'react-countdown';
import { signOut } from '../../HTTP/HTTP';
import { MdOutlineVaccines } from 'react-icons/md';

function Dashboard() {

  let Menu = [
    {
      displayName : 'Dashboard',
      link : '/',
      icon: ''
    },
    {
      displayName : 'Users',
      link : '/user',
      icon: ''
    },
    {
      displayName : 'Childs',
      link : '/child',
      icon: ''
    },
    {
      displayName : 'Vaccine',
      link : '/vaccine',
      icon: ''
    }
  ]
  return (
    <>
      
        <div className='col-3 col-lg-2 sidebar d-flex flex-column justify-content-between'>
          <div>
            <div className='d-flex justify-content-center mb-3'>
              <MdOutlineVaccines size={100} color='#0fca9a' />
            </div>
            <hr />
            {
              Menu.map((x,i) => {
                return <NavLink to={x.link} key={i}>{x.displayName}</NavLink>
              })
            }
          </div>
        </div>
    </>
  )
}

export default Dashboard
