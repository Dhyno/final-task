import { createContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  bookmark: [],//init from fetch api,
  postBookmark: [],
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
    case "ADD_BOOKMARK_LIST":
      return{...state, postBookmark: [...state.postBookmark,action.payload]}
    case "FILTER_BOOKMARK_LIST":
      const list=state.postBookmark.filter( idList => idList!=action.payload)
      return{...state, postBookmark: list}
    case "CLEAR_BOOKMARK_LIST":
      return{ ...state, postBookmark: []}
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