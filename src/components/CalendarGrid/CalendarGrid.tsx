import "./CalendarGrid.css";
import { CalendarRow } from "../CalendarRow/CalendarRow";
import { CalendarWeeks } from "../CalendarWeeks/CalendarWeeks";
import { CalendarNav } from "../CalendarNav/CalendarNav";
import { useDate } from "../../context/DateProvider/DateProvider";

export function CalendarGrid(): JSX.Element {
  const { dateState, dateDispatch } = useDate();

  return (
    <div className="calendar-grid">
      <CalendarNav dateDispatch={dateDispatch} date={dateState.date} />
      <table className="calendar">
        <CalendarWeeks />
        <tbody>
          {[...Array(6)].map((ele, index) => (
            <CalendarRow
              key={index.toString()}
              initialDay={dateState.initialDay}
              date={dateState.date}
              rowNumber={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
