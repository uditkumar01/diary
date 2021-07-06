export type AddEventActionState =
  | {
      type: "ADD_EVENT_TITLE";
      payload: { eventTitle: string };
    }
  | { type: "SET_FROM_HOURS"; payload: { fromHours: string } }
  | { type: "SET_FROM_MIN"; payload: { fromMinutes: string } }
  | { type: "SET_TO_HOURS"; payload: { toHours: string } }
  | { type: "SET_TO_MIN"; payload: { toMinutes: string } }
  | { type: "SET_FROM_MERIDIEM"; payload: { fromMeridiem: string } }
  | { type: "SET_TO_MERIDIEM"; payload: { toMeridiem: string } }
  | { type: "SET_MESSAGE"; payload: { msg: string } }
  | { type: "SET_EVENT_TYPE"; payload: { eventType: string } };

export interface AddEventInitialState {
  eventTitle: string;
  fromHours: number;
  fromMinutes: number;
  toHours: number;
  toMinutes: number;
  fromMeridiem: string;
  toMeridiem: string;
  eventType: string;
  msg: string;
}

export const addEventReducer = (
  state: AddEventInitialState,
  action: AddEventActionState
): AddEventInitialState => {
  switch (action.type) {
    case "ADD_EVENT_TITLE":
      return { ...state, eventTitle: action.payload.eventTitle };
    case "SET_FROM_HOURS":
      return { ...state, fromHours: parseInt(action.payload.fromHours, 10) };
    case "SET_FROM_MIN":
      return {
        ...state,
        fromMinutes: parseInt(action.payload.fromMinutes, 10),
      };
    case "SET_TO_HOURS":
      return { ...state, toHours: parseInt(action.payload.toHours, 10) };
    case "SET_TO_MIN":
      return { ...state, toMinutes: parseInt(action.payload.toMinutes, 10) };
    case "SET_FROM_MERIDIEM":
      return { ...state, fromMeridiem: action.payload.fromMeridiem };
    case "SET_TO_MERIDIEM":
      return { ...state, toMeridiem: action.payload.toMeridiem };
    case "SET_EVENT_TYPE":
      return { ...state, eventType: action.payload.eventType };
    case "SET_MESSAGE":
      return { ...state, msg: action.payload.msg };
    default:
      return state;
  }
};
