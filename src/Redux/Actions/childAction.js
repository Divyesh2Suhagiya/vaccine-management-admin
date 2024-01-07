import { HTTP } from "../../HTTP/HTTP";
import { GET_CHILD } from "../Types/Type";

export const getChildDetail = () => {
    return async (dispatch) => {
        let response = await HTTP.get('child/getAllChild');
        dispatch({type : GET_CHILD , data : response?.data?.data})
    }
}

export const deleteChildDetail = (id) => {
    return async (dispatch) => {
        let response = await HTTP.delete('child/deleteChild?childId='+id);
        dispatch(getChildDetail())
    }
}