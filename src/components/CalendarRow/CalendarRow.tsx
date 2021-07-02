import { CalendarGridCell } from "../CalendarGridCell/CalendarGridCell";
import { daysInMonth } from "../../data/months";
import { isLeapYear } from "../../utils/utils";
import { CalendarRowProps } from "./CalendarRow.types";
import { getCalendarDate } from "../../utils/calendarUtils/getCalendarDate";
import { CalendarDate } from "../../context/DateProvider/DateProvider.types";

export function CalendarRow({
  rowNumber,
  initialDay,
  date,
}: CalendarRowProps): JSX.Element {
  const monthDaysCount =
    isLeapYear(date.year) && date.month === 1
      ? daysInMonth[date.month].days + 1
      : daysInMonth[date.month].days;

  return (
    <tr className="calendar-row">
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
