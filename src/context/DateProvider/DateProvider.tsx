import React, { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../../reducer/dateReducer";
import { predictDay } from "../../utils/utils";
import {
  DataProviderProps,
  InitialDateContext,
  InitialDateState,
} from "./DateProvider.types";

export const DateContext = createContext<InitialDateContext>(
  {} as InitialDateContext
);

export const DateProvider = ({ children }: DataProviderProps): JSX.Element => {
  const date = new Date();
  const predictInitialDay = predictDay(
    1,
    date.getMonth() + 1,
    date.getFullYear()
  );

  const initialdateState: InitialDateState = {
    currentDate: date,
    date: {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    },
    initialDay: predictInitialDay,
  };

  const [dateState, dateDispatch] = useReducer(dateReducer, initialdateState);

  return (
    <DateContext.Provider value={{ dateState, dateDispatch }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = (): InitialDateContext => {
  return useContext<InitialDateContext>(DateContext);
};
