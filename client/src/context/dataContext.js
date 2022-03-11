import { createContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  bookmark: [],//init from fetch api
  onHomePage : true
};

const reducer = (state, action) => {

  switch (action.type) {
    case "INIT_BOOKMARK":
        return{ ...state, bookmark: action.payload }
    case "DELETE_BOOKMARK":
        return{ ...state, bookmark: [] }
    case "ADD_BOOKMARK":
      return{ ...state, bookmarkSendAPI: action.payload }
    case "ON_HOME":
      return{ ...state, onHomePage: true}
    case "NOT_ON_HOME":
      return{ ...state, onHomePage: false}
    default:
      throw new Error();
  }
};

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[dataState, dispatchData]}>
      {children}
    </DataContext.Provider>
  );
};