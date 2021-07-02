import { Dispatch, SetStateAction } from "react";
import { daysInMonth } from "../../data/months";
import { ChooseMonthYear } from "../ChooseMonthYear/ChooseMonthYear";
// import { nextMonth, prevMonth, nextYear, prevYear } from "../utils";
import { IconButton } from "../IconButton/IconButton";
import "./SetMonthYear.css";
import {
  CalendarDate,
  DateAction,
} from "../../context/DateProvider/DateProvider.types";
import { nextMonth } from "../../utils/calendarUtils/getNextMonth";
import { prevMonth } from "../../utils/calendarUtils/getPreviousMonth";
import { prevYear } from "../../utils/calendarUtils/getPreviousYear";
import { nextYear } from "../../utils/calendarUtils/getNextYear";

export interface SetMonthYearType {
  date: CalendarDate;
  dateDispatch: Dispatch<DateAction>;
  setChooseMonthYear: Dispatch<SetStateAction<boolean>>;
}

export const SetMonthYear = ({
  date,
  dateDispatch,
  setChooseMonthYear,
}: SetMonthYearType): JSX.Element => {
  return (
    <div className="modal">
      <div className="modal-form">
        <div className="chooseMonthYear-header">
          <h2 className="selectMonthYear-title">{`${date.date} ${
            daysInMonth[date.month].name
          } ${date.year}`}</h2>
          <IconButton
            className="close-button"
            handleClick={() => setChooseMonthYear(false)}
          >
            <img src="/images/close.svg" alt="Close" />
          </IconButton>
        </div>
        <div className="chooseMonthYear">
          <ChooseMonthYear
            month={daysInMonth[date.month].short}
            choosePreviousMonth={() => prevMonth({ date, dateDispatch })}
            chooseNextMonth={() => nextMonth({ date, dateDispatch })}
          />
          <ChooseMonthYear
            year={date.year}
            choosePreviousYear={() => prevYear({ date, dateDispatch })}
            chooseNextYear={() => nextYear({ date, dateDispatch })}
          />
        </div>
      </div>
    </div>
  );
};
