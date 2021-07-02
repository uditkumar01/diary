import "./CalendarGrid.css";
import { useState } from "react";
import { CalendarRow } from "../CalendarRow/CalendarRow";
import { CalendarWeeks } from "../CalendarWeeks/CalendarWeeks";
import { predictDay } from "../../utils/Utils";
import { CalendarDate } from "../CalendarRow/CalendarRow.types";
import { CalendarNav } from "../CalendarNav/CalendarNav";

export function CalendarGrid(): JSX.Element {
  const currentDate = new Date();
  const predictInitialDay = predictDay(
    1,
    currentDate.getMonth() + 1,
    currentDate.getFullYear()
  );
  const [date, setDate] = useState<CalendarDate>({
    date: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  });
  const [initialDay, setInitialDay] = useState(predictInitialDay);

  return (
    <div className="calendar-grid">
      <CalendarNav
        setDate={setDate}
        date={date}
        setInitialDay={setInitialDay}
      />
      <table className="calendar">
        <CalendarWeeks />
        <tbody>
          {[...Array(6)].map((ele, index) => (
            <CalendarRow
              key={index.toString()}
              initialDay={initialDay}
              date={date}
              rowNumber={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
