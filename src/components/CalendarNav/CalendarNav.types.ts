import { Dispatch, SetStateAction } from "react";
import { CalendarDate } from "../CalendarRow/CalendarRow.types";

export interface CalendarNavProps {
  date: CalendarDate;
  setDate: Dispatch<SetStateAction<CalendarDate>>;
  setInitialDay: Dispatch<SetStateAction<number>>;
}
