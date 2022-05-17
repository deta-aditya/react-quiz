import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [query, setQuery] = useState('')

  return (
    <AppContext.Provider value={{query, setQuery}}>
      {children}
    </AppContext.Provider>
  )
}
