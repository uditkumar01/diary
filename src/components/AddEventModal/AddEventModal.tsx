import { Dispatch, SetStateAction } from "react";
import "./AddEventModal.css";
import { IconButton } from "../IconButton/IconButton";
import { PickTime } from "../PickTime/PickTime";
import { InputEvent } from "../InputEvent/InputEvent";
import { Button } from "../Button/Button";

export type AddEventModalProp = {
  setaddEventModal: Dispatch<SetStateAction<boolean>>;
};

export function AddEventModal({
  setaddEventModal,
}: AddEventModalProp): JSX.Element {
  return (
    <div className="setUpEventModal">
      <form className="setUpEventModal-form">
        <IconButton
          className="close-button"
          onClick={() => setaddEventModal(false)}
        >
          <img src="/images/close.svg" alt="" />
        </IconButton>
        <InputEvent placeholderText="Add Event" />
        <PickTime />
        <PickTime />
        <Button className="block-btn m-0">Add Event</Button>
      </form>
    </div>
  );
}
