import "./CalendarRow.css";
import { CalendarGridCell } from "../";
import { daysInMonth } from "../../data/months";
import { isLeapYear } from "../../utils/Utils";
import { CalendarRowProps, CalendarDate } from "./CalendarRow.types";
import { getCalendarDate } from "../../utils/CalendarUtils/getCalendarDate";

export function CalendarRow({ rowNumber, initialDay, date }: CalendarRowProps) {
  const monthDaysCount =
    isLeapYear(date.year) && date.month === 1
      ? daysInMonth[date.month].days + 1
      : daysInMonth[date.month].days;

  return (
    <tr className={"calendar-row"}>
      {[...Array(7)].map((ele, index) => {
        const value: CalendarDate = getCalendarDate(
          index,
          rowNumber,
          initialDay,
          date,
          monthDaysCount
        );

        return <CalendarGridCell key={index.toString()} value={value} />;
      })}
    </tr>
  );
}
