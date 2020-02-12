// import initialState from './initialState'
import axios from "axios"
const initalstate = {
    loading:false,
    question:[],
    error:'',
    count: 2
    

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
                   question: action.payload,
                   count: 2
                   }
                   case "Increment":
                    return{
                    ...state,
                    loading: false,
                    count: state.count + 1
                    }



            default: return state
           }
           
        }
export default questionReducer