import { CalendarDate } from "../DateProvider/DateProvider.types";

export interface EventsTypes {
  eventName: string;
  time: CalendarDate;
  type: string;
}

export type EventAction = {
  type: "ADD_EVENT";
};

export interface DataProviderProps {
  children: JSX.Element;
}

export interface InitialEventState {
  events: EventsTypes[] | null;
}
