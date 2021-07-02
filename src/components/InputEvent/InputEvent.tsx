import "./InputEvent.css";

export type InputEventType = {
  placeholderText: string;
};

export const InputEvent = ({
  placeholderText,
}: InputEventType): JSX.Element => {
  return (
    <div className="input-box">
      <input className="input" type="text" placeholder={placeholderText} />
      <span className="focus-border">.</span>
    </div>
  );
};
