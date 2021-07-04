import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import "./AddEventModal.css";
import { IconButton } from "../IconButton/IconButton";
import { PickTime } from "../PickTime/PickTime";
import { InputEvent } from "../InputEvent/InputEvent";
import { Button } from "../Button/Button";
import { CalendarDate } from "../../context/DateProvider/DateProvider.types";

export interface AddEventModalProp {
  setaddEventModal: Dispatch<SetStateAction<boolean>>;
  dateValue: CalendarDate;
}

export function AddEventModal({
  setaddEventModal,
  dateValue,
}: AddEventModalProp): JSX.Element {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  const addEventHandler = (): void => {
    if (inputText) {
      console.log(inputText);
    }
  };

  return (
    <div className="setUpEventModal">
      <form className="setUpEventModal-form">
        <IconButton
          className="close-button"
          onClick={() => setaddEventModal(false)}
        >
          <img src="/images/close.svg" alt="" />
        </IconButton>
        <InputEvent
          placeHolder="Add Event"
          inputText={inputText}
          onChange={handleInputChange}
        />
        <PickTime />
        <PickTime />
        <Button className="block-btn m-0" onClick={addEventHandler}>
          Add Event
        </Button>
      </form>
    </div>
  );
}
