import { ChangeEvent } from "react";
import "./InputEvent.css";

export type InputEventType = {
  placeHolder?: string;
  inputText?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputEvent = ({
  placeHolder,
  onChange,
  inputText,
}: InputEventType): JSX.Element => {
  return (
    <div className="input-box">
      <input
        className="input"
        type="text"
        value={inputText}
        placeholder={placeHolder}
        onChange={onChange}
      />
      <span className="focus-border" />
    </div>
  );
};
