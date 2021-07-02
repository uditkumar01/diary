import "./MainGrid.css";
import { UserCard } from "../UserCard/UserCard";
import { CalendarGrid } from "../CalendarGrid/CalendarGrid";
import { RightSidebar } from "../RightSidebar/RightSidebar";

export function MainGrid(): JSX.Element {
  return (
    <div className="main-grid">
      <div className="body-container">
        <UserCard />
        <div className="body-content">
          <CalendarGrid />
        </div>
      </div>
      <div className="right-content">
        <RightSidebar />
      </div>
    </div>
  );
}
