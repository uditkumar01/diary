import "./CalendarNav.css";
import { useState } from "react";
import { CalendarNavProps } from "./CalendarNav.types";
import { IconButton } from "../IconButton/IconButton";
import { daysInMonth } from "../../data/months";
import { SetMonthYear } from "../SetMonthYear/SetMonthYear";
import { prevMonth } from "../../utils/calendarUtils/getPreviousMonth";
import { nextMonth } from "../../utils/calendarUtils/getNextMonth";

export function CalendarNav({
  dateDispatch,
  date,
}: CalendarNavProps): JSX.Element {
  const [chooseMonthYear, setChooseMonthYear] = useState<boolean>(false);

  return (
    <div className="calendar-nav">
      <IconButton
        className="icon-nav-button"
        handleClick={() => prevMonth({ date, dateDispatch })}
      >
        <img src="/images/leftArrow.svg" alt="previous-month" />
      </IconButton>
      <h3>
        <button
          type="button"
          onClick={() => setChooseMonthYear(!chooseMonthYear)}
        >
          {daysInMonth[date.month].name} {date.year}
        </button>
      </h3>
      <IconButton
        className="icon-nav-button"
        handleClick={() => nextMonth({ date, dateDispatch })}
      >
        <img src="/images/rightArrow.svg" alt="next-month" />
      </IconButton>
      {chooseMonthYear && (
        <SetMonthYear
          date={date}
          // setDate={setDate}
          // setInitialDay={setInitialDay}
          dateDispatch={dateDispatch}
          setChooseMonthYear={setChooseMonthYear}
        />
      )}
    </div>
  );
}

/* <IconButton className="icon-nav-button" handleClick={() => prevMonth()}>
        <img src="/images/leftArrow.svg" alt="previous-month" />
      </IconButton>
      <h3>
        {daysInMonth[date.month].name} {date.year}
      </h3>
      <IconButton className="icon-nav-button" handleClick={() => nextMonth()}>
        <img src="/images/rightArrow.svg" alt="next-month" />
      </IconButton> */
