import { GET_DOCTOR } from "../Types/Type"

let initialState = {
    doctor : []
}

export const doctorReducer = (state = initialState , action) => {
    switch(action.type){
        case  GET_DOCTOR: 
            return {
                doctor : action.data
            };
        default : 
            return state;
    }
}