import { GET_CHILD, GET_USER, GET_VACCINE } from "../Types/Type"
import { HTTP } from "../../HTTP/HTTP"
import { HTTP_ADDRESS } from "../../Constant/Constant"

export const getUserDetail = () => {
    return async (dispatch) => {
        let response = await HTTP.get('user/getAllUsers');
        dispatch({type : GET_USER , data : response?.data?.data})
    }
}