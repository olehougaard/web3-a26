import { configureStore } from '@reduxjs/toolkit'

const initState = {
  sum: 0
}

function reduce(state = initState, action) {
  switch(action.type) {
    case 'add':
      const addend = action.payload
      return { sum: state.sum + addend}
    case 'reset':
      return initState
    default:
      return state
  }
}

export const store = configureStore({reducer: reduce})
