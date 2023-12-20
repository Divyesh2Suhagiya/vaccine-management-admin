import {TfiShoppingCart} from 'react-icons/tfi'
import {BsSearch} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import { Link } from 'react-router-dom'
import { signOut } from '../../HTTP/HTTP'
import Countdown from 'react-countdown'
import { HiOutlineArrowLeftOnRectangle } from 'react-icons/hi2'
import Swal from 'sweetalert2'

export const HOC = (Component) => {
    const NewComponent = () => {


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
        return <>
        <div className='row dashboard m-0'>
            <Dashboard />
            <div className='col-9 col-lg-10 display_section p-0'>
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
                <div className='p-5'>
                    <Component />
                </div>
            </div>
        </div>
        </>
    }

    return NewComponent
} 
