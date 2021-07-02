import { IconButton } from "../IconButton/IconButton";

export interface ChooseMonthYearType {
  month?: string;
  year?: number;
  chooseNextMonth?: () => void;
  choosePreviousMonth?: () => void;
  choosePreviousYear?: () => void;
  chooseNextYear?: () => void;
}

export const ChooseMonthYear = ({
  month,
  year,
  chooseNextMonth,
  choosePreviousMonth,
  choosePreviousYear,
  chooseNextYear,
}: ChooseMonthYearType): JSX.Element => {
  return (
    <div className="pick-month">
      {choosePreviousYear && (
        <IconButton
          className="icon-nav-button"
          onClick={() => choosePreviousYear()}
        >
          <img src="/images/upArrow.svg" alt="upArrow" />
        </IconButton>
      )}

      {choosePreviousMonth && (
        <IconButton
          className="icon-nav-button"
          onClick={() => choosePreviousMonth()}
        >
          <img src="/images/upArrow.svg" alt="upArrow" />
        </IconButton>
      )}
      <p className="selectMonthYear-month">{month || year}</p>
      {chooseNextYear && (
        <IconButton
          className="icon-nav-button"
          onClick={() => chooseNextYear()}
        >
          <img src="/images/downArrow.svg" alt="downArrow" />
        </IconButton>
      )}
      {chooseNextMonth && (
        <IconButton
          className="icon-nav-button"
          onClick={() => chooseNextMonth()}
        >
          <img src="/images/downArrow.svg" alt="downArrow" />
        </IconButton>
      )}
    </div>
  );
};
