import React from "react"
import { render } from "@testing-library/react"
import { CustomIntlProvider } from "../CustomIntlProvider"
import { FormattedMessage } from "react-intl"
import { Provider } from "react-redux"
import { createStoreForTests } from "../../../utils/createStoreForTests"

describe("<CustomIntlProvider /> test suite", () => {
  it("should translate the text in english", async () => {
    const { store } = createStoreForTests()

    const wrapper = render(
      <Provider store={store}>
        <CustomIntlProvider langKey="en">
          <FormattedMessage id="landing.title" />
        </CustomIntlProvider>
      </Provider>
    )

    await wrapper.findByText("Hello")
  })

  it("should translate the text in french", async () => {
    const { store } = createStoreForTests()

    const wrapper = render(
      <Provider store={store}>
        <CustomIntlProvider langKey="fr">
          <FormattedMessage id="landing.title" />
        </CustomIntlProvider>
      </Provider>
    )

    await wrapper.findByText("Bonjour")
  })

  it("should select the default lang in store if no langKey provided", async () => {
    const { store, actions } = createStoreForTests()

    await store.dispatch<any>(actions.locale.store({ lang: "fr" }))

    const wrapper = render(
      <Provider store={store}>
        <CustomIntlProvider>
          <FormattedMessage id="landing.title" />
        </CustomIntlProvider>
      </Provider>
    )

    await wrapper.findByText("Bonjour")
  })
})
