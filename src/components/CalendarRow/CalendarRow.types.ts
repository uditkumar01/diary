import { CalendarDate } from "../../context/DateProvider/DateProvider.types";

export interface CalendarRowProps {
  rowNumber: number;
  initialDay: number;
  date: CalendarDate;
}
