import { predictDay } from "../utils";
import { SetMonthType } from "./calenderTypes";

export const prevMonth = ({ date, dateDispatch }: SetMonthType): void => {
  const isPreviousYearsMonth = date.month < 1 ? 11 : date.month - 1;
  const isPreviousYear = date.month < 1 ? date.year - 1 : date.year;

  // setDate(() => ({
  //   ...date,
  //   month: isPreviousYearsMonth,
  //   year: isPreviousYear,
  // }));

  dateDispatch({
    type: "SET_DATE",
    payload: {
      date: { ...date, month: isPreviousYearsMonth, year: isPreviousYear },
    },
  });

  const predictInitialDay = predictDay(
    1,
    isPreviousYearsMonth + 1,
    isPreviousYear
  );
  dateDispatch({
    type: "SET_INITIALDAY",
    payload: { initialDay: predictInitialDay },
  });
  // console.log(predictInitialDay);
  // setInitialDay(predictInitialDay);
};

// const prevMonths = (): void => {
//   const isPreviousYearsMonth = date.month < 1 ? 11 : date.month - 1;
//   const isPreviousYear = date.month < 1 ? date.year - 1 : date.year;

//   const predictInitialDay = predictDay(
//     1,
//     isPreviousYearsMonth + 1,
//     isPreviousYear
//   );

// };
