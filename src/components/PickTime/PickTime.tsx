import "./PickTime.css";

export const PickTime = (): JSX.Element => {
  return (
    <div className="pick-time">
      <div className="time">
        <div className="input-box-time">
          <input className="input-time" placeholder="Hours" type="text" />
          <span className="focus-border">.</span>
        </div>
        <p>:</p>
        <div className="input-box-time">
          <input className="input-time" placeholder="Min" type="text" />
          <span className="focus-border">.</span>
        </div>
      </div>
      <div className="meridiem">
        <label htmlFor="test" className="meridiem-am">
          <input type="radio" id="test" name="am" value="am" />
          AM
        </label>
        <label htmlFor="test2" className="meridiem-pm">
          <input type="radio" id="test2" name="pm" value="pm" />
          PM
        </label>
      </div>
    </div>
  );
};
