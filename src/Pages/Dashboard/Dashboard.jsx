import React from "react";
import "./Dashboard.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { DiReact } from "react-icons/di";
import Countdown from "react-countdown";
import { signOut } from "../../HTTP/HTTP";
import { MdOutlineVaccines } from "react-icons/md";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import Swal from "sweetalert2";
import { Menu } from "../../Constant/Constant";

function Dashboard() {
  
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
  return (
    <>
      <div className="col-3 col-lg-2 sidebar d-flex flex-column justify-content-between d-none d-lg-flex">
        <div>
          <div className="d-flex justify-content-center mb-3">
            <img src="/logo.png" alt="" width={100} />
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
      </div>
    </>
  );
}

export default Dashboard;
