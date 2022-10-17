import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked,setIsClick] = useState(initialState);


 const handleClick = (click) =>{
   console.log(click)
   setIsClick({...initialState,[click]:true})
  }

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu,isClicked,handleClick }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
