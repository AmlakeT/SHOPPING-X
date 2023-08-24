import React from 'react'
import { useReducer } from 'react'
 
 const initialState = {
  count: 0,
  message: ''
 }
 const reducer =(state, action) => {
  switch(action.type) {
   case "INCREMENT": 
      return {...state, count: state.count + 1}
   case "DECREMENT":
      return {...state, count:state.count - 1}
   case "RESET":
     return {...state, count: 0 }
   case "SET-MESSAGE":
    return {...state, message: action.payload}
   default:
    return state 
  }
 }

const App = () => {
  const [state, dispatch] = useReducer(reducer,initialState)
  
  const incerement = () => {
     dispatch({type: "INCREMENT"})
     dispatch({type: "SET-MESSAGE", payload: "Incremented!"})
  }
  const decrement = () => {
    dispatch({type: "DECREMENT"})
    dispatch({type: "SET-MESSAGE", payload: "Decremented!"})
  }
  const reset = () => {
    dispatch({type: "RESET"})
    dispatch({type: "SET-MESSAGE", payload: "Reset to 0!"})
  }

  return (
    <div className='text-center py-3 w-1/2 m-auto mt-7 rounded-lg bg-blue-500 text-white'>
       <p>{state.count}</p>
       <p>{state.message}</p>
       <div className='py-5 space-x-4'>
        <button className='border px-3 py-1 rounded ' onClick={incerement}>Increment</button>
        <button className='border px-3 py-1 rounded ' onClick={decrement}>Decrement</button>
        <button className='border px-3 py-1 rounded ' onClick={reset}>Reset</button>
       </div>
    </div>
  )
}

export default App