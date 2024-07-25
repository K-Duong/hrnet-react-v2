import dayjs from "dayjs";

export const dateFormater = (date) => {
  return dayjs(date).format("MM/DD/YYYY")
}