import { predictDay } from "../utils";
import { SetMonthType } from "./calenderTypes";

export const nextYear = ({ date, dateDispatch }: SetMonthType): void => {
  // setDate(() => ({
  //   ...date,
  //   year: date.year + 1,
  // }));
  dateDispatch({
    type: "SET_DATE",
    payload: { date: { ...date, year: date.year + 1 } },
  });
  const predictInitialDay = predictDay(1, date.month + 1, date.year + 1);
  // setInitialDay(predictInitialDay);
  dateDispatch({
    type: "SET_INITIALDAY",
    payload: { initialDay: predictInitialDay },
  });
};
