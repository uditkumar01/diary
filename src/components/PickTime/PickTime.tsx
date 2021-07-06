/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch } from "react";
import {
  AddEventActionState,
  AddEventInitialState,
} from "../AddEventModal/addEventReducer";
import "./PickTime.css";

export interface PickTimeProps {
  label: string;
  type: "from" | "to";
  addEventState: AddEventInitialState;
  addEventDispatch: Dispatch<AddEventActionState>;
}

export const PickTime = ({
  label,
  type,
  addEventState,
  addEventDispatch,
}: PickTimeProps): JSX.Element => {
  return (
    <div className="pick-time">
      <h3>{label}</h3>
      <div className="pick-time-body">
        <div className="time">
          <div className="input-box-time">
            <input
              className="input-time"
              placeholder="Hours"
              maxLength={2}
              pattern="\d{2}"
              type="text"
              required
              // value={addEventState.fromHours}
              // value={
              //   type === "from"
              //     ? addEventState.fromHours
              //     : addEventState.toHours
              // }
              onChange={(e) => {
                console.log(e.target.value);
                return type === "from"
                  ? addEventDispatch({
                      type: "SET_FROM_HOURS",
                      payload: { fromHours: e.target.value },
                    })
                  : addEventDispatch({
                      type: "SET_TO_HOURS",
                      payload: { toHours: e.target.value },
                    });
              }}
            />
            <span className="focus-border" />
          </div>
          <p>:</p>
          <div className="input-box-time">
            <input
              className="input-time"
              placeholder="Min"
              type="text"
              maxLength={2}
              pattern="\d{1,2}"
              required
              // value={
              //   // type === "from"
              //   // ?
              //   addEventState.fromMinutes
              //   // : addEventState.toMinutes
              // }
              onChange={(e) => {
                return type === "from"
                  ? addEventDispatch({
                      type: "SET_FROM_MIN",
                      payload: { fromMinutes: e.target.value },
                    })
                  : addEventDispatch({
                      type: "SET_TO_MIN",
                      payload: { toMinutes: e.target.value },
                    });
              }}
            />
            <span className="focus-border" />
          </div>
        </div>
        <div className="meridiem">
          <input
            type="radio"
            name={type === "from" ? "from-meridiem" : "to-meridiem"}
            value="am"
            onChange={(e) => {
              return type === "from"
                ? addEventDispatch({
                    type: "SET_FROM_MERIDIEM",
                    payload: { fromMeridiem: e.target.value },
                  })
                : addEventDispatch({
                    type: "SET_TO_MERIDIEM",
                    payload: { toMeridiem: e.target.value },
                  });
            }}
          />
          <label htmlFor="test" className="meridiem-am">
            AM
          </label>
          <input
            type="radio"
            name={type === "from" ? "from-meridiem" : "to-meridiem"}
            value="pm"
            onChange={(e) => {
              return type === "from"
                ? addEventDispatch({
                    type: "SET_FROM_MERIDIEM",
                    payload: { fromMeridiem: e.target.value },
                  })
                : addEventDispatch({
                    type: "SET_TO_MERIDIEM",
                    payload: { toMeridiem: e.target.value },
                  });
            }}
          />
          <label htmlFor="test2" className="meridiem-pm">
            PM
          </label>
        </div>
      </div>
    </div>
  );
};
