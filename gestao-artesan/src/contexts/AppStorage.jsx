import React from 'react'
export const AppContext = React.createContext();
export const AppStorage = ({children}) => {
  
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}