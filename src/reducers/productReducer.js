const initialState = require('./initialState.js')


const setInitialState = (state = initialState.products, action) => {
  console.log(state.products)
  return state;
}



export default setInitialState;