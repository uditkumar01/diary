import { SyntheticEvent, useReducer } from "react";
import "./AddEventModal.css";
import { IconButton } from "../IconButton/IconButton";
import { PickTime } from "../PickTime/PickTime";
import { InputEvent } from "../InputEvent/InputEvent";
import { Button } from "../Button/Button";
import { AddEventInitialState, addEventReducer } from "./addEventReducer";
import { AddEventModalProp } from "./AddEventModal.types";
import { useEvent } from "../../context/EventProvider/EventProvider";
import { daysInMonth } from "../../data/months";

export const eventTypes = ["event", "public-meeting", "private-meeting"];

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

  const addEventHandler = (e: SyntheticEvent): void => {
    const checkHours = /^([1-9]|1[012])$/;
    const checkMins = /^(^[1-5]?[0-9]$)$/;

    e.preventDefault();
    if (
      Object.values(addEventState)
        .map((input) => input.length !== 0)
        .every(Boolean)
    ) {
      if (
        checkHours.test(addEventState.fromHours.toString()) &&
        checkMins.test(addEventState.fromMinutes.toString()) &&
        checkHours.test(addEventState.toHours.toString()) &&
        checkMins.test(addEventState.toMinutes.toString())
      ) {
        eventDispatch({
          type: "ADD_EVENT",
          payload: {
            eventName: addEventState.eventTitle,
            type: addEventState.eventType,
            from: {
              hours: addEventState.fromHours,
              minutes: addEventState.fromMinutes,
            },
            to: {
              hours: addEventState.toHours,
              minutes: addEventState.toMinutes,
            },
          },
        });
      } else {
        addEventDispatch({
          type: "SET_MESSAGE",
          payload: { msg: "Enter time in 1 to 12 format" },
        });
      }
    } else {
      addEventDispatch({
        type: "SET_MESSAGE",
        payload: { msg: "Enter all values" },
      });
    }
  };

  return (
    <div className="setUpEventModal">
      <form className="setUpEventModal-form" onSubmit={addEventHandler}>
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
