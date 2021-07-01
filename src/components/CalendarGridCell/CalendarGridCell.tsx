import "./CalendarGridCell.css";
import { IconButton } from "../";
import { CalendarDate } from "../CalendarRow/CalendarRow.types";
interface CalendarGridCellType {
  value: CalendarDate;
}
export function CalendarGridCell({ value }: CalendarGridCellType) {
  return (
    <td className={"calendar-date"}>
      <IconButton className={value?.type ? value.type : `text-muted`}>
        {value.date}
      </IconButton>
    </td>
  );
}
