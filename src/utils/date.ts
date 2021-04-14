import dayjs from "dayjs"

export const createDailyInterval = (days: number) => {
  const dates = Array.from({ length: days })
    .map((value, index) => {
      const date = dayjs().subtract(index, "days")
      return date.format("YYYY-MM-DD")
    })
    .reverse()

  return dates
}

export const createDailyIntervalWithDayNumberAndName = (days: number) => {
  const dates = Array.from({ length: days })
    .map((value, index) => {
      const date = dayjs().subtract(index, "days")
      return { number: date.format("D"), day: date.format("ddd") }
    })
    .reverse()

  return dates
}
