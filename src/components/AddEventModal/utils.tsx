import { Dispatch, SyntheticEvent } from "react";
import { EventAction } from "../../context/EventProvider/EventProvider.types";
import { AddEventActionState, AddEventInitialState } from "./addEventReducer";

export type AddEventHandlerParams = {
  e: SyntheticEvent;
  addEventState: AddEventInitialState;
  eventDispatch: Dispatch<EventAction>;
  addEventDispatch: Dispatch<AddEventActionState>;
  gapi: any;
  CLIENT_ID: string;
  API_KEY: string;
  DISCOVERY_DOCS: string[];
  SCOPES: string;
};

export const addEventHandler = ({
  e,
  addEventState,
  eventDispatch,
  addEventDispatch,
  gapi,
  CLIENT_ID,
  API_KEY,
  DISCOVERY_DOCS,
  SCOPES,
}: AddEventHandlerParams): void => {
  const checkHours = /^([1-9]|1[012])$/;
  const checkMins = /^(^[1-5]?[0-9]$)$/;

  e.preventDefault();
  //   if (
  //     Object.values(addEventState)
  //       .map((input) => input.length !== 0)
  //       .every(Boolean)
  //   ) {
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
  //   } else {
  //     addEventDispatch({
  //       type: "SET_MESSAGE",
  //       payload: { msg: "Enter all values" },
  //     });
  //   }
  gapi.load("client:auth2", () => {
    console.log("loaded client");

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });

    gapi.client.load("calendar", "v3", () => console.log("bam!"));

    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        const event = {
          summary: "Awesome Event!",
          location: "Mumbai, India",
          description: "Really great refreshments",
          start: {
            dateTime: "2021-07-09T06:00:00+05:30",
            // dateTime: "2021-07-09T09:00:00-07:00",
            timeZone: "Asia/Kolkata",
          },
          end: {
            dateTime: "2021-07-09T07:00:00+05:30",
            timeZone: "Asia/Kolkata",
          },
          recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
          attendees: [
            { email: "uditkumarussa@gmail.com" },
            { email: "chaudharimehul2001@gmail.com" },
          ],
          reminders: {
            useDefault: false,
            overrides: [
              { method: "email", minutes: 24 * 60 },
              { method: "popup", minutes: 10 },
            ],
          },
        };

        const request = gapi.client.calendar?.events.insert({
          calendarId: "primary",
          resource: event,
        });

        request.execute((reqEvent: any) => {
          console.log(reqEvent);
          window.open(reqEvent.htmlLink);
        });
      });
  });
};
