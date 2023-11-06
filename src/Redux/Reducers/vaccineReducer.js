import { GET_CHILD, GET_USER, GET_VACCINE } from "../Types/Type"

let initialState = {
    vaccine : []
}

export const vaccineReducer = (state = initialState , action) => {
    switch(action.type){
        case  GET_VACCINE: 
            return {
                vaccine : action.data
            };
        default : 
            return state;
    }
}