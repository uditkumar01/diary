import { Dispatch, SetStateAction } from "react";
import { CalendarDate } from "../../context/DateProvider/DateProvider.types";

export interface AddEventModalProp {
  setaddEventModal: Dispatch<SetStateAction<boolean>>;
  dateValue: CalendarDate;
}
