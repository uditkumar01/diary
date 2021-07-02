/* eslint-disable jsx-a11y/label-has-associated-control */
import "./PickTime.css";

export const PickTime = (): JSX.Element => {
  return (
    <div className="pick-time">
      <div className="time">
        <div className="input-box-time">
          <input className="input-time" placeholder="Hours" type="text" />
          <span className="focus-border" />
        </div>
        <p>:</p>
        <div className="input-box-time">
          <input className="input-time" placeholder="Min" type="text" />
          <span className="focus-border" />
        </div>
      </div>
      <div className="meridiem">
        <input type="radio" id="test" name="am" value="am" />
        <label htmlFor="test" className="meridiem-am">
          AM
        </label>
        <input type="radio" id="test2" name="pm" value="pm" />
        <label htmlFor="test2" className="meridiem-pm">
          PM
        </label>
      </div>
    </div>
  );
};
