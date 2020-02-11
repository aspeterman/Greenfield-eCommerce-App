// import initialState from './initialState'
import axios from "axios"
const initalstate = {
    loading:false,
    question:[],
    error:''

}

    const questionReducer = (state = initalstate ,action) => {
        switch(action.type){
        case "FETCH_USERS_REQUEST":
            return{
            ...state,
            loading: true
            }
            case "FETCH_USERS_SUCCESS":
                   return{
                   ...state,
                   loading: false,
                   question: action.payload
                   }
            default: return state
           }
           
        }
export default questionReducer