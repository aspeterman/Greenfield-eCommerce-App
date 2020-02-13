// import initialState from './initialState'
import axios from "axios"
const initalstate = {
    loading:false,
    question:[],
    review:[],
    error:'',
    count: 2,
    Acount: 1

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
            case "FETCH_REVIEWS_REQUEST":
            return{
            ...state,
            loading: true
            }
            case "FETCH_REVIEWS_SUCCESS":
                    return{
                    ...state,
                    loading: false,
                    reviews: action.payload
                    }
                   case "Increment":
                    return{
                    ...state,
                    loading: false,
                    count: state.count + 1
                    }
                    case "IncrementAnswer":
                        return{
                        ...state,
                        loading: false,
                        Acount: state.Acount + 1
                        }



            default: return state
           }

        }
export default questionReducer