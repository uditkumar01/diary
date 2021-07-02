import "./MainGrid.css";
import { UserCard } from "../UserCard/UserCard";
import { CalendarGrid } from "../CalendarGrid/CalendarGrid";

export function MainGrid(): JSX.Element {
  return (
    <div className="main-grid">
      <div className="body-container">
        <UserCard />
        <div className="body-content">
          <CalendarGrid />
        </div>
      </div>
      <div className="right-content">bye</div>
    </div>
  );
}
