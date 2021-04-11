import { createStoreForTests } from "../../../utils/createStoreForTests"

describe("menu tests suite", () => {
  it("as a user, i would like to open the menu", async () => {
    const { store, di } = createStoreForTests()

    expect(di.LocationService.getHistory()).toEqual({
      state: {},
      to: "/#drawer=open",
    })
  })
})
