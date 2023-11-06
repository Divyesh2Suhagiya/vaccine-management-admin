import axios from "axios"
import { HTTP_ADDRESS } from "../Constant/Constant"
import Swal from "sweetalert2"
import { setLoader } from "./LoaderService"
import { errorPopup } from "../HTTP/HTTP"

export const headerToken = {
  headers : {
    "Authorization" : 'Bearer ' + localStorage.getItem('token')
  }
}

const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

export const login = data => {
  console.log(username, password)
    setLoader(true);
    if(data.username == username && data.password == password){

            localStorage.setItem('islogin' , true)

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
              })
              

            setTimeout(() => {
                window.location.href = '/';
            }, 1200);
          }else{
            errorPopup("Please enter valid username and password")
            setLoader(false);
          }
}