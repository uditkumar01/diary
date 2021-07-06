import { useEvent } from "../../context/EventProvider/EventProvider";
import "./EventCard.css";

export const EventCard = (): JSX.Element => {
  const { eventState } = useEvent();

  return (
    <div className="events">
      <h2>Your Events</h2>
      {eventState.events?.map((event, index) => {
        return (
          <div
            key={index.toString()}
            className={`event-card ${
              // eslint-disable-next-line no-nested-ternary
              event.type === "private-meeting"
                ? "event-card-pink"
                : event.type === "public-meeting"
                ? "event-card-purple"
                : "event-card-green"
            }`}
          >
            <div
              className={`event-card-icon ${
                // eslint-disable-next-line no-nested-ternary
                event.type === "private-meeting"
                  ? "event-card-icon-pink"
                  : event.type === "public-meeting"
                  ? "event-card-icon-purple"
                  : "event-card-icon-green"
              }`}
            >
              <img
                className="event-card-icon-img"
                src={
                  // eslint-disable-next-line no-nested-ternary
                  event.type === "private-meeting"
                    ? "/images/personal-meeting.png"
                    : event.type === "public-meeting"
                    ? "/images/public-meeting.png"
                    : "/images/event.png"
                }
                alt="personal-meeting"
              />
            </div>
            <div className="event-card-text">
              <h3>{event.eventName}</h3>
              <p>
                From: {event.from.hours} : {event.from.minutes} To:{" "}
                {event.to.hours} : {event.to.minutes}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
