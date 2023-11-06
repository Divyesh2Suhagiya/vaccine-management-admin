import { GET_USER } from "../Types/Type"

let initialState = {
    user : []
}

export const userReducer = (state = initialState , action) => {
    switch(action.type){
        case  GET_USER: 
            return {
                user : action.data
            };
        default : 
            return state;
    }
}