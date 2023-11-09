import { GET_CHILD, GET_USER, GET_VACCINE } from "../Types/Type"
import { HTTP } from "../../HTTP/HTTP"
import { HTTP_ADDRESS } from "../../Constant/Constant"

export const getUserDetail = () => {
    return async (dispatch) => {
        let response = await HTTP.get('user/getAllUsers');
        dispatch({type : GET_USER , data : response?.data?.data})
    }
}

export const getChildDetail = () => {
    return async (dispatch) => {
        let response = await HTTP.get('child/getAllChild?lang=en');
        dispatch({type : GET_CHILD , data : response?.data?.data})
    }
}

export const getVaccineDetail = () => {
    return async (dispatch) => {
        let response = await HTTP.get('vaccine/getAllVaccine?lang=en');
        dispatch({type : GET_VACCINE , data : response?.data?.data})
    }
}


export const addVaccineDetail = (data) => {
    return async (dispatch) => {
        let response = await HTTP.post('vaccine/addVaccine', data);
        dispatch(getVaccineDetail())
    }
}


export const editVaccineDetail = (data) => {
    return async (dispatch) => {
        let response = await HTTP.post('vaccine/updateVaccine', data);
        dispatch(getVaccineDetail())
    }
}