import { Dispatch } from "react";
import {
  CalendarDate,
  DateAction,
} from "../../context/DateProvider/DateProvider.types";

export interface SetMonthType {
  date: CalendarDate;
  dateDispatch: Dispatch<DateAction>;
}
