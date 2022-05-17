import { createContext, useReducer } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
  const reducerTuple = useReducer((state, action) => {
    switch (action.type) {
      case "set-my-number":
        return { 
          ...state, 
          myNumber: action.value, 
          latestType: 'MyNumber',
          latestVal: action.value,
        }
      case "set-my-number-1":
        return { 
          ...state, 
          myNumber1: action.value, 
          latestType: 'MyNumber1',
          latestVal: action.value,
        }
      case "set-my-number-2":
        return {
          ...state,
          myNumber: action.value,
          myNumber1: action.value,
          myNumber2: action.value,
          latestType: 'MyNumber2',
          latestVal: action.value,
        }
      case "toggle-modal":
        return {
          ...state,
          showModal: !state.showModal,
        }
      default:
        return state
    }
  }, {
    myNumber: 0,
    myNumber1: 0,
    myNumber2: 0,
    latestType: 'None', 
    latestVal: 0,
    showModal: false,
  })

  return (
    <AppContext.Provider value={reducerTuple}>
      {children}
    </AppContext.Provider>
  )
}
