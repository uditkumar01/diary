import {
  EventAction,
  InitialEventState,
} from "../context/EventProvider/EventProvider.types";

export const eventReducer = (
  state: InitialEventState,
  action: EventAction
): InitialEventState => {
  switch (action.type) {
    case "ADD_EVENT":
      return state;
    default:
      console.log("Something went wrong");
      return state;
  }
};
