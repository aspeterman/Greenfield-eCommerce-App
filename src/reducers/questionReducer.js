import initialState from './initialState'
const questionReducer = (state = initialState,action) => {
    switch(action.type){
        case 'Filter' :
        return state

        case 'Likes' :
         return state + 1



    }
    return state
 

}
export default questionReducer