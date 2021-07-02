import { predictDay } from "../utils";
import { SetMonthType } from "./calenderTypes";

export const nextMonth = ({ date, dateDispatch }: SetMonthType): void => {
  const isNextYearsMonth = date.month > 10 ? 0 : date.month + 1;
  const isNextYear = date.month > 10 ? date.year + 1 : date.year;

  dateDispatch({
    type: "SET_DATE",
    payload: { date: { ...date, month: isNextYearsMonth, year: isNextYear } },
  });

  const predictInitialDay = predictDay(1, isNextYearsMonth + 1, isNextYear);
  dateDispatch({
    type: "SET_INITIALDAY",
    payload: { initialDay: predictInitialDay },
  });
};

// const nextMonths = (): void => {
//   const isNextYearsMonth = date.month > 10 ? 0 : date.month + 1;
//   const isNextYear = date.month > 10 ? date.year + 1 : date.year;

//   const predictInitialDay = predictDay(1, isNextYearsMonth + 1, isNextYear);

// };
