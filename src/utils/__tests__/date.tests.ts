import { createDailyInterval } from "../date"

describe("date test suite", () => {
  it("should return all dates from today", () => {
    jest.useFakeTimers("modern")

    jest.setSystemTime(new Date("2020-01-03").getTime())

    const dates = createDailyInterval(7)

    expect(dates).toEqual([
      "2020-01-03",
      "2020-01-02",
      "2020-01-01",
      "2019-12-31",
      "2019-12-30",
      "2019-12-29",
      "2019-12-28",
    ])
  })
})
