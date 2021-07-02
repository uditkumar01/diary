import { CalendarDate } from "../../context/DateProvider/DateProvider.types";
import { daysInMonth } from "../../data/months";

export function getCalendarDate(
  index: number,
  rowNumber: number,
  initialDay: number,
  date: CalendarDate,
  monthDaysCount: number
): CalendarDate {
  const todayDate = new Date();

  let value: CalendarDate = {
    date: index + 2 + rowNumber * 7 - initialDay,
    month: date.month,
    year: date.year,
    type: "currentMonth",
  };

  if (date.month - 1 < 0 && value.date < 1) {
    value = {
      month: date.month + 11,
      year: date.year,
      date: daysInMonth[date.month + 11].days - (initialDay - 2 - index),
    };
  } else if (value.date < 1) {
    value = {
      month: date.month - 1,
      year: date.year,
      date: daysInMonth[date.month - 1].days - (initialDay - index - 2),
    };
  } else if (value.date > monthDaysCount) {
    value = {
      month: date.month + 1 > 11 ? 1 : date.month + 1,
      year: date.year,
      date: index + rowNumber * 7 - monthDaysCount - (initialDay - 2),
    };
  }

  if (
    value.date === todayDate.getDate() &&
    value.month === todayDate.getMonth() &&
    value.year === todayDate.getFullYear()
  ) {
    value = { ...value, type: "currentDay" };
  }
  return value;
}
