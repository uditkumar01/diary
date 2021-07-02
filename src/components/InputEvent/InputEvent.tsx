import { ChangeEvent } from "react";
import "./InputEvent.css";

export type InputEventType = {
  placeHolder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputEvent = ({
  placeHolder,
  onChange,
}: InputEventType): JSX.Element => {
  return (
    <div className="input-box">
      <input
        className="input"
        type="text"
        placeholder={placeHolder}
        onChange={onChange}
      />
      <span className="focus-border" />
    </div>
  );
};
