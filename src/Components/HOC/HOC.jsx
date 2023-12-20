import {TfiShoppingCart} from 'react-icons/tfi'
import {BsSearch} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import { Link, NavLink } from 'react-router-dom'
import { signOut } from '../../HTTP/HTTP'
import Countdown from 'react-countdown'
import { HiOutlineArrowLeftOnRectangle } from 'react-icons/hi2'
import Swal from 'sweetalert2'
import { HiOutlineMenu } from "react-icons/hi";
import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import { MdOutlineVaccines } from 'react-icons/md'
import { Menu } from '../../Constant/Constant'

export const HOC = (Component) => {
    const NewComponent = () => {
        const [show, setshow] = useState(false)
          const logout = () => {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to signout!",
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: 'var(--theme-color)',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes!'
            }).then((result) => {
              if (result.isConfirmed) {
                localStorage.clear();
                  window.location.href = '/';
              }
            })
            
          }

          const openSidebar = () => {
            setshow(true)
          }
          const closeSidebar = () => {
            setshow(false)
          }
        return <>
        <div className='row dashboard m-0'>
            <Dashboard />
            <div className='col-12 col-lg-10 display_section p-0'>
                {/* <div className="header">
                    <div className="d-none d-lg-flex">
                        <input type="text" placeholder='Search....' /><button className='searchButton'><BsSearch color="white" /></button>
                    </div>
                    <div className="d-inline-block d-lg-none">
                        
                    </div>
                    <div className='d-flex align-items-center'>
                            <div>
                                <button onClick={logout} className="btn btn-danger"><HiOutlineArrowLeftOnRectangle size={20} /> Logout</button>
                            </div>
                    </div>
                </div> */}
                <div className='p-2 px-3 p-lg-5'>
                  <div className='d-block d-lg-none mb-3 cursor_pointer' onClick={openSidebar}>
                    <HiOutlineMenu size={30} />
                  </div>
                    <Component />
                </div>

                <Offcanvas show={show} onHide={closeSidebar}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                  <div>
                    <div className="d-flex justify-content-center mb-3">
                      <MdOutlineVaccines size={100} color="#0fca9a" />
                    </div>
                    <hr />
                    {Menu.map((x, i) => {
                      return (
                        <NavLink to={x.link} key={i}>
                          {x.displayName}
                        </NavLink>
                      );
                    })}
                  </div>
                  <div>
                    <button onClick={logout} className="btn btn-danger">
                      <HiOutlineArrowLeftOnRectangle size={20} /> Logout
                    </button>
                  </div>
                  </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
        </>
    }

    return NewComponent
} 
