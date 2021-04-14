import { createStoreForTests } from "../../../utils/createStoreForTests"

describe("menu tests suite", () => {
  it("as a user, i would like to open the menu", async () => {
    const { store, actions, di } = createStoreForTests()

    store.dispatch<any>(actions.drawer.open())

    expect(di.LocationService.getHistory()).toEqual({
      state: {},
      to: "/#drawer=open",
    })
  })
})
