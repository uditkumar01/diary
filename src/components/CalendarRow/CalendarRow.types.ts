export interface CalendarDate {
  date: number;
  month: number;
  year: number;
  type?: string;
}

export interface CalendarRowProps {
  rowNumber: number;
  initialDay: number;
  date: CalendarDate;
}
