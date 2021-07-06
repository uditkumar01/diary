import { createContext, useContext, useReducer } from "react";
import { eventReducer } from "../../reducer/eventReducer";
import {
  DataProviderProps,
  EventAction,
  InitialEventState,
} from "./EventProvider.types";

export interface InitialEventContext {
  eventState: InitialEventState;
  eventDispatch: (action: EventAction) => void;
}

export const EventContext = createContext<InitialEventContext>(
  {} as InitialEventContext
);

const initialEventState: InitialEventState = {
  events: [
    {
      eventName: "Meeting Call",
      from: { hours: 2, minutes: 12 },
      to: { hours: 2, minutes: 12 },
      type: "event",
    },
    {
      eventName: "Java Chp1 teach",
      from: { hours: 2, minutes: 12 },
      to: { hours: 2, minutes: 12 },
      type: "public-meeting",
    },
    {
      eventName: "Meeting Call",
      from: { hours: 2, minutes: 12 },
      to: { hours: 2, minutes: 12 },
      type: "private-meeting",
    },
  ],
};

export const EventProvider = ({ children }: DataProviderProps): JSX.Element => {
  const [eventState, eventDispatch] = useReducer(
    eventReducer,
    initialEventState
  );

  console.log(eventState);

  return (
    <EventContext.Provider value={{ eventState, eventDispatch }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (): InitialEventContext => {
  return useContext<InitialEventContext>(EventContext);
};
