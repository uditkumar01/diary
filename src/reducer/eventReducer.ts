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
      return {
        ...state,
        events: state.events
          ? state.events.concat({
              eventName: action.payload.eventName,
              from: {
                hours: action.payload.from.hours,
                minutes: action.payload.from.minutes,
              },
              to: {
                hours: action.payload.to.hours,
                minutes: action.payload.to.minutes,
              },
              type: action.payload.type,
            })
          : null,
      };
    default:
      console.log("Something went wrong");
      return state;
  }
};

//  eventName: action.payload.eventName,
//           from: {
//             hours: action.payload.from.hours,
//             minute: action.payload.from.minutes,
//           },
//           to: {
//             hours: action.payload.to.hours,
//             minute: action.payload.to.minutes,
//           },
