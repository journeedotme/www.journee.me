import {
  createDailyInterval,
  createDailyIntervalWithDayNumberAndName,
} from "../date"

describe("date test suite", () => {
  it("should return all dates from today", () => {
    jest.useFakeTimers("modern")

    jest.setSystemTime(new Date("2020-01-03").getTime())

    const dates = createDailyInterval(7)

    expect(dates).toMatchSnapshot()
  })

  it("should return all dates from today with name and number", () => {
    jest.useFakeTimers("modern")

    jest.setSystemTime(new Date("2020-01-03").getTime())

    const dates = createDailyIntervalWithDayNumberAndName(7)

    expect(dates).toMatchSnapshot()
  })
})
