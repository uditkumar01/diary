import "../styles.css";
import { Navbar } from "../components/Navbar/Navbar";
import { MainGrid } from "../components/MainGrid/MainGrid";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <MainGrid />
      </div>
    </div>
  );
}
