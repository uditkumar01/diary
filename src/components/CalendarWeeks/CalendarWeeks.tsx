import { weeksData } from "../../data/weeks";
import "./CalendarWeeks.css";

export function CalendarWeeks() {
  return (
    <thead>
      <tr>
        {weeksData.map((weekDay) => {
          return <th key={weekDay.short}>{weekDay.short}</th>;
        })}
      </tr>
    </thead>
  );
}
