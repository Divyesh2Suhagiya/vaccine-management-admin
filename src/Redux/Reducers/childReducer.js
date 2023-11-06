import { GET_CHILD, GET_USER } from "../Types/Type"

let initialState = {
    child : []
}

export const childReducer = (state = initialState , action) => {
    switch(action.type){
        case  GET_CHILD: 
            return {
                child : action.data
            };
        default : 
            return state;
    }
}