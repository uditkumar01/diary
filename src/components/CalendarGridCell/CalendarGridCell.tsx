import { CalendarDate } from "../CalendarRow/CalendarRow.types";
import "./CalendarGridCell.css";
import { IconButton } from "..";

interface CalendarGridCellType {
  value: CalendarDate;
}
export function CalendarGridCell({ value }: CalendarGridCellType): JSX.Element {
  return (
    <td className="calendar-date">
      <IconButton className={value?.type ? value.type : `text-muted`}>
        {value.date}
      </IconButton>
    </td>
  );
}
