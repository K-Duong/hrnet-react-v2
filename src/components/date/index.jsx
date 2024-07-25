import DatePicker from "react-datepicker";

import { range } from "../../utils/range";
import { getYear } from "date-fns/getYear";
import { getMonth } from "date-fns/getMonth";

import "react-datepicker/dist/react-datepicker.css";

function DateSelector({ id, selected, handleChange }) {
  const years = range(1950, getYear(new Date()) + 1, 1);
  const maxDate = id === "dateOfBirth"
  ? new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  : new Date()
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <DatePicker
        id={id}
        className="date-wrapper p-2 bg-input w-5/6"
        todayButton={id === "dateOfBirth" ? null : "today"}
        maxDate={maxDate}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {">"}
            </button>
          </div>
        )}
        selected={selected}
        onChange={handleChange}
      />
    </>
  );
}

export default DateSelector;
