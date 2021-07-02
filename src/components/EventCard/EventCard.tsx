import "./EventCard.css";

export const events = [
  {
    eventName: "Meeting Call",
    time: "08:00 - 09:00",
    type: "event",
  },
  {
    eventName: "Java Chp1 teach",
    time: "05:00 - 07:00",
    type: "public-meeting",
  },
  {
    eventName: "Meeting Call",
    time: "12:00 - 03:00",
    type: "private-meeting",
  },
];

export const EventCard = (): JSX.Element => {
  return (
    <div className="events">
      <h2>Your Events</h2>
      {events.map((event) => {
        return (
          <div
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
            <div>
              <h3>{event.eventName}</h3>
              <p>{event.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
