import { useReducer } from "react";
import "./AddEventModal.css";
import { IconButton } from "../IconButton/IconButton";
import { PickTime } from "../PickTime/PickTime";
import { InputEvent } from "../InputEvent/InputEvent";
import { Button } from "../Button/Button";
import { AddEventInitialState, addEventReducer } from "./addEventReducer";
import { AddEventModalProp } from "./AddEventModal.types";
import { useEvent } from "../../context/EventProvider/EventProvider";
import { daysInMonth } from "../../data/months";
import { addEventHandler } from "./utils";

export const eventTypes = ["event", "public-meeting", "private-meeting"];

declare global {
  interface Window {
    gapi: any;
  }
}

window.gapi = window.gapi || {};

export function AddEventModal({
  setaddEventModal,
  dateValue,
}: AddEventModalProp): JSX.Element {
  const { eventDispatch } = useEvent();

  const addEventInitialState: AddEventInitialState = {
    eventTitle: "",
    fromHours: 0,
    fromMinutes: 0,
    toHours: 0,
    toMinutes: 0,
    fromMeridiem: "",
    toMeridiem: "",
    eventType: "public-meeting",
    msg: "",
  };

  const [addEventState, addEventDispatch] = useReducer(
    addEventReducer,
    addEventInitialState
  );

  // eslint-disable-next-line prefer-destructuring
  const gapi = window.gapi;
  const CLIENT_ID =
    "773289570483-jd3gpa7uv2gnm24eood7bh9k9ohts71i.apps.googleusercontent.com";
  const API_KEY = "AIzaSyADEIHXdxBMTxkYj7e7VDVxiVZtNhU34GM";
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  return (
    <div className="setUpEventModal">
      <form
        className="setUpEventModal-form"
        onSubmit={(e) =>
          addEventHandler({
            e,
            eventDispatch,
            addEventState,
            addEventDispatch,
            gapi,
            CLIENT_ID,
            API_KEY,
            DISCOVERY_DOCS,
            SCOPES,
          })
        }
      >
        <div className="setUpEventModal-header">
          <h2>
            {dateValue.date} {daysInMonth[dateValue.month].name}{" "}
            {dateValue.year}
          </h2>
          <IconButton
            className="close-button"
            onClick={() => setaddEventModal(false)}
          >
            <img src="/images/close.svg" alt="close" />
          </IconButton>
        </div>
        <InputEvent
          placeHolder="Add Event"
          inputText={addEventState.eventTitle}
          addEventDispatch={addEventDispatch}
        />
        <PickTime
          label="From :"
          type="from"
          addEventState={addEventState}
          addEventDispatch={addEventDispatch}
        />
        <PickTime
          label="To :"
          type="to"
          addEventState={addEventState}
          addEventDispatch={addEventDispatch}
        />
        <div className="setUpEventModal-eventType">
          <h3>Event Type :</h3>
          <select
            className="setUpEventModal-select"
            value={addEventState.eventType}
            onChange={(e) => {
              addEventDispatch({
                type: "SET_EVENT_TYPE",
                payload: { eventType: e.target.value },
              });
            }}
          >
            {eventTypes.map((eventType) => {
              return (
                <option value={eventType} key={eventType}>
                  {eventType}
                </option>
              );
            })}
          </select>
        </div>
        <p>{addEventState.msg}</p>
        <Button className="block-btn m-0" type="submit">
          Add Event
        </Button>
      </form>
    </div>
  );
}
