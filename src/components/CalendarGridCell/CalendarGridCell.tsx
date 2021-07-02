import "./CalendarGridCell.css";
import { IconButton } from "../IconButton/IconButton";
import { CalendarGridCellProps } from "./CalendarGridCell.types.";

export function CalendarGridCell({
  value,
}: CalendarGridCellProps): JSX.Element {
  return (
    <td className="calendar-date">
      <IconButton className={value?.type ? value.type : `text-muted`}>
        {value.date}
      </IconButton>
    </td>
  );
}
