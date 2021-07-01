import "./CalendarNav.css";
import { daysInMonth } from "../../data/months";
import { IconButton } from "../";
import { predictDay } from "../../utils/Utils";
import { CalendarNavProps } from "./CalendarNav.types";

export const CalendarNav = ({
  setDate,
  date,
  setInitialDay,
}: CalendarNavProps) => {
  const nextMonth = () => {
    const isNextYearsMonth = date.month > 10 ? 0 : date.month + 1;
    const isNextYear = date.month > 10 ? date.year + 1 : date.year;

    setDate(() => ({
      ...date,
      month: isNextYearsMonth,
      year: isNextYear,
    }));

    const predictInitialDay = predictDay(1, isNextYearsMonth + 1, isNextYear);
    setInitialDay(predictInitialDay);
  };

  const prevMonth = () => {
    const isPreviousYearsMonth = date.month < 1 ? 11 : date.month - 1;
    const isPreviousYear = date.month < 1 ? date.year - 1 : date.year;

    setDate(() => ({
      ...date,
      month: isPreviousYearsMonth,
      year: isPreviousYear,
    }));
    const predictInitialDay = predictDay(
      1,
      isPreviousYearsMonth + 1,
      isPreviousYear
    );
    setInitialDay(predictInitialDay);
  };
  console.log(date.month);
  return (
    <div className="calendar-nav">
      <IconButton className={"icon-nav-button"} handleClick={() => prevMonth()}>
        <img src="/images/leftArrow.svg" alt="previous-month" />
      </IconButton>
      <h3>
        {daysInMonth[date.month].name} {date.year}
      </h3>
      <IconButton className={"icon-nav-button"} handleClick={() => nextMonth()}>
        <img src="/images/rightArrow.svg" alt="next-month" />
      </IconButton>
    </div>
  );
};
