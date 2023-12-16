import { HTTP } from "../../HTTP/HTTP";
import { GET_DOCTOR, GET_VACCINE } from "../Types/Type";

export const getDoctorDetail = () => {
    return async (dispatch) => {
        let response = await HTTP.get('doctor/getAlldoctor');
        dispatch({type : GET_DOCTOR , data : response?.data?.data})
    }
}


export const addDoctorDetail = (data) => {
    return async (dispatch) => {
        let response = await HTTP.post('doctor/addDoctor', data);
        dispatch(getDoctorDetail())
    }
}


export const editDoctorDetail = (data) => {
    return async (dispatch) => {
        let response = await HTTP.post('doctor/updateDoctor', data);
        dispatch(getDoctorDetail())
    }
}

export const deleteDoctorDetail = (id) => {
    return async (dispatch) => {
        let response = await HTTP.delete('doctor/deleteDoctor?id='+id);
        dispatch(getDoctorDetail())
    }
}