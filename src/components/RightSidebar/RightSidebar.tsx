import "./RightSidebar.css";
import { EventCard } from "../EventCard/EventCard";

export function RightSidebar(): JSX.Element {
  return (
    <div className="right-sidebar">
      <EventCard />
    </div>
  );
}
