import { HTTP } from "../../HTTP/HTTP";
import { GET_VACCINE } from "../Types/Type";

export const getVaccineDetail = () => {
    return async (dispatch) => {
        let response = await HTTP.get('vaccine/getAllVaccine');
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

export const deleteVaccineDetail = (id) => {
    return async (dispatch) => {
        let response = await HTTP.delete('vaccine/deleteVaccine?id='+id);
        dispatch(getVaccineDetail())
    }
}