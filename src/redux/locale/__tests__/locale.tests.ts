import { createStoreForTests } from "../../../utils/createStoreForTests"

describe("locale tests suite", () => {
  it("if the navigator is in french, the lang fr should be loaded", async () => {
    const { store, actions, di } = createStoreForTests()

    await di.LangRepository.store({ id: "fr", locale: "fr" })

    let state = store.getState()

    expect(state.locale.lang).toEqual("en")

    await store.dispatch<any>(actions.locale.$load())

    state = store.getState()

    expect(state.locale.lang).toEqual("fr")
  })

  it("if the navigator is in a language not supported, the lang en should be loaded", async () => {
    const { store, actions, di } = createStoreForTests()

    await di.LangRepository.store({ id: "fake-lang", locale: "fake-lang" })

    let state = store.getState()

    expect(state.locale.lang).toEqual("en")

    await store.dispatch<any>(actions.locale.$load())

    state = store.getState()

    expect(state.locale.lang).toEqual("en")
  })
})
