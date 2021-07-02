import { Dispatch, SetStateAction } from "react";
import "./SetupEventModal.css";
import { IconButton } from "../IconButton/IconButton";
import { PickTime } from "../PickTime/PickTime";
import { InputEvent } from "../InputEvent/InputEvent";

export type SetupEventModalProp = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const SetupEventModal = (): JSX.Element => {
  return (
    <div className="setUpEventModal">
      <form className="setUpEventModal-form">
        <IconButton
          className="close-btn"
          //   onClick={() => setShowModal(false)}
        >
          <img src="/images/close.svg" alt="" />
        </IconButton>
        <InputEvent placeholderText="Add Event" />
        <PickTime />
      </form>
    </div>
  );
};
