import axios from "axios";
import { HTTP_ADDRESS } from "../Constant/Constant";
import { setLoader } from "../Services/LoaderService";
import Swal from "sweetalert2";

let headers= {
    headers : {
        "Content-Type" : "application/json"
    }
}
export const errorPopup = (message) => {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
        timer : 3000  
      })
}
export const unAuthorizedLogout = (error) => {
    if(error.response?.status === 401){
        signOut();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.error,
        })
    }
}
export const signOut = () => {
    localStorage.clear();
    errorPopup('Session expired');
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
}
export const HTTP = {
    get : async (url) => {
        setLoader(true);
       
        return axios.get(`${HTTP_ADDRESS}${url}` , headers).then((res) => {
            setLoader(false);
            return res;
        }).catch((error) => {
            setLoader(false);
            unAuthorizedLogout(error);
        })
    },
    post : async (url,value) => {
        if(value){
            setLoader(true);
            return axios.post(`${HTTP_ADDRESS}${url}`, value , headers).then((res) => {
                setLoader(false);
                if(res.status == false){
                    errorPopup(res.data.message);
                }
                return res;
            }).catch((error) => {
                setLoader(false);
                unAuthorizedLogout(error);
                return error
            })
        }
    },
    patch : async (url,value) => {
        if(value){
            setLoader(true);
            return axios.patch(`${HTTP_ADDRESS}${url}`, value , headers).then((res) => {
                setLoader(false);
                if(res.status == false){
                    errorPopup(res.data.message);
                }
                return res;
            }).catch((error) => {
                setLoader(false);
                unAuthorizedLogout(error);
                return error
            })
        }
    },
    put : async (url, value) => {
        setLoader(true);
        return axios.put(`${HTTP_ADDRESS}${url}` , value, headers).then((res) => {
            setLoader(false);
            if(res.status == false){
                errorPopup(res.data.message);
            }
            return res;
        }).catch((error) => {
            setLoader(false);
            unAuthorizedLogout(error);
        })
    },
    delete : async (url) => {
        setLoader(true);
        return axios.delete(`${HTTP_ADDRESS}${url}` , headers).then((res) => {
            setLoader(false);
            if(res.data.StatusCode == 400){
                errorPopup(res.data.Message)
            }
            if(res.status == false){
                    errorPopup(res.data.message);
                }
            return res;
        }).catch((error) => {
            setLoader(false);
            unAuthorizedLogout(error);
        })
    },
}
