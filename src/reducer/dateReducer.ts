import {
  DateAction,
  InitialDateState,
} from "../context/DateProvider/DateProvider.types";

export const dateReducer = (
  state: InitialDateState,
  action: DateAction
): InitialDateState => {
  switch (action.type) {
    case "SET_DATE":
      return {
        ...state,
        date: action.payload.date,
      };
    case "SET_INITIALDAY":
      return {
        ...state,
        initialDay: action.payload.initialDay,
      };
    default:
      return state;
  }
};
