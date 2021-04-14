import { createStoreForTests } from "../../../utils/createStoreForTests"

describe("modal tests suite", () => {
  it("as a user, i would like to open the modal", async () => {
    const { store, actions } = createStoreForTests()

    let state = store.getState()

    expect(state.modal.open).toEqual(null)

    await store.dispatch<any>(actions.modal.open({ type: "add-task" }))

    state = store.getState()

    expect(state.modal.open?.type).toEqual("add-task")
  })
})
