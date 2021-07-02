export interface CalendarDate {
  date: number;
  month: number;
  year: number;
  type?: string;
}

export type DateAction =
  | { type: "SET_DATE"; payload: { date: CalendarDate } }
  | { type: "SET_INITIALDAY"; payload: { initialDay: number } };

export interface InitialDateState {
  currentDate: Date;
  date: CalendarDate;
  initialDay: number;
}

export type InitialDateContext = {
  dateState: InitialDateState;
  dateDispatch: (action: DateAction) => void;
};

export interface DataProviderProps {
  children: JSX.Element;
}
