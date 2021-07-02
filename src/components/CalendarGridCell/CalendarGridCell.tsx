import "./CalendarGridCell.css";
import { IconButton } from "../IconButton/IconButton";
import { CalendarGridCellProps } from "./CalendarGridCell.types.";

export function CalendarGridCell({
  value,
}: CalendarGridCellProps): JSX.Element {
  const addEvent = (): void => {};
  return (
    <td className="calendar-date">
      <IconButton
        className={value?.type ? value.type : `text-muted`}
        onClick={addEvent}
      >
        {value.date}
      </IconButton>
    </td>
  );
}
