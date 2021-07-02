import "../styles.css";
import { CalendarGrid } from "../components/CalendarGrid/CalendarGrid";
import { Navbar } from "../components/Navbar/Navbar";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <CalendarGrid />
    </div>
  );
}
