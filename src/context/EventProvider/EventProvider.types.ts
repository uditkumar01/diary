export interface Time {
  hours: number;
  minutes: number;
}
export interface EventType {
  eventName: string;
  from: Time;
  to: Time;
  type: string;
}

export type EventAction = {
  type: "ADD_EVENT";
  payload: { eventName: string; from: Time; to: Time; type: string };
};

export interface DataProviderProps {
  children: JSX.Element;
}

export interface InitialEventState {
  events: EventType[] | null;
}
