import { createContext, useContext, useEffect, useReducer } from "react";

import { functionReduder, initialValue } from "../reducer/functionReducer";
import { ACTION_TYPE } from "../utils/constant";
import { meetups } from "../database/meetup";
export const CreateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(functionReduder, initialValue);
  const getData = () => {
    dispatch({ type: ACTION_TYPE.SUCCESS, payload: meetups });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <CreateContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateContext.Provider>
  );
};

export const useMeetup = () => useContext(CreateContext);
