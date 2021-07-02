import "./CalendarGridCell.css";
import { useState } from "react";
import { IconButton } from "../IconButton/IconButton";
import { CalendarGridCellProps } from "./CalendarGridCell.types.";
import { AddEventModal } from "../AddEventModal/AddEventModal";

export function CalendarGridCell({
  value,
}: CalendarGridCellProps): JSX.Element {
  const [addEventModal, setaddEventModal] = useState<boolean>(false);

  const addEvent = (): void => {
    setaddEventModal(!addEventModal);
  };
  return (
    <td className="calendar-date">
      {addEventModal && <AddEventModal setaddEventModal={setaddEventModal} />}
      <IconButton
        className={value?.type ? value.type : `text-muted`}
        onClick={addEvent}
      >
        {value.date}
      </IconButton>
    </td>
  );
}
