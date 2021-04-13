import dayjs from "dayjs"

export const createDailyInterval = (days: number) => {
  const dates = Array.from({ length: days }).map((value, index) => {
    const date = dayjs().subtract(index, "days")
    return date.format("YYYY-MM-DD")
  })

  return dates
}
