import DatePicker from "react-datepicker";

import { range } from "../../utils/range";
import { getYear } from "date-fns/getYear";
import { getMonth } from "date-fns/getMonth";

import "react-datepicker/dist/react-datepicker.css";

function DateSelector({ id, selected, handleChange }) {
  const currentDate = new Date();

  let newYear = currentDate.getFullYear();
  let newMonth = currentDate.getMonth() + 6;
  if (newMonth > 11) {
    newYear += 1;
    newMonth -= 12;
  }
  const years = range(1950, newYear + 1, 1);
  //set the value of max date 
  ///- For "dateOfBirth", the employee must be at least 18 years old 
  ///- For "startDate", the date must be available 6 months from now 
  const maxDate =
    id === "dateOfBirth"
      ? new Date(
          currentDate.getFullYear() - 18,
          currentDate.getMonth(),
          currentDate.getDate()
        )
      : new Date(newYear, newMonth, currentDate.getDate());
 
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
