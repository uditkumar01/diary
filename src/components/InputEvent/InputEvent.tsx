import { Dispatch } from "react";
import { AddEventActionState } from "../AddEventModal/addEventReducer";
import "./InputEvent.css";

export type InputEventType = {
  placeHolder?: string;
  inputText?: string;
  addEventDispatch: Dispatch<AddEventActionState>;
};

export const InputEvent = ({
  placeHolder,
  addEventDispatch,
  inputText,
}: InputEventType): JSX.Element => {
  return (
    <div className="input-box">
      <input
        className="input"
        type="text"
        value={inputText}
        required
        placeholder={placeHolder}
        onChange={(e) => {
          addEventDispatch({
            type: "ADD_EVENT_TITLE",
            payload: { eventTitle: e.target.value },
          });
        }}
      />
      <span className="focus-border" />
    </div>
  );
};
