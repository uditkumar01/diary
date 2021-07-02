import "./CalendarNav.css";
import { predictDay } from "../../utils/Utils";
import { CalendarNavProps } from "./CalendarNav.types";
import { IconButton } from "../IconButton/IconButton";
import { daysInMonth } from "../../data/months";

export function CalendarNav({
  setDate,
  date,
  setInitialDay,
}: CalendarNavProps): JSX.Element {
  const nextMonth = (): void => {
    const isNextYearsMonth = date.month > 10 ? 0 : date.month + 1;
    const isNextYear = date.month > 10 ? date.year + 1 : date.year;

    setDate(() => ({
      ...date,
      month: isNextYearsMonth,
      year: isNextYear,
    }));

    const predictInitialDay = predictDay(1, isNextYearsMonth + 1, isNextYear);
    return setInitialDay(predictInitialDay);
  };

  const prevMonth = (): void => {
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
    return setInitialDay(predictInitialDay);
  };
  return (
    <div className="calendar-nav">
      <IconButton className="icon-nav-button" handleClick={() => prevMonth()}>
        <img src="/images/leftArrow.svg" alt="previous-month" />
      </IconButton>
      <h3>
        {daysInMonth[date.month].name} {date.year}
      </h3>
      <IconButton className="icon-nav-button" handleClick={() => nextMonth()}>
        <img src="/images/rightArrow.svg" alt="next-month" />
      </IconButton>
    </div>
  );
}
