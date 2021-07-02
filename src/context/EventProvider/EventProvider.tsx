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
  events: null,
};

export const EventProvider = ({ children }: DataProviderProps): JSX.Element => {
  const [eventState, eventDispatch] = useReducer(
    eventReducer,
    initialEventState
  );

  return (
    <EventContext.Provider value={{ eventState, eventDispatch }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (): InitialEventContext => {
  return useContext<InitialEventContext>(EventContext);
};
