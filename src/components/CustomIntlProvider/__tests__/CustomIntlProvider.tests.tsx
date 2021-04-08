import React from "react"
import { render } from "@testing-library/react"
import { CustomIntlProvider } from "../CustomIntlProvider"
import { FormattedMessage } from "react-intl"

describe("<CustomIntlProvider /> test suite", () => {
  it("should translate the text in english", async () => {
    const wrapper = render(
      <CustomIntlProvider langKey="en">
        <FormattedMessage id="landing.title" />
      </CustomIntlProvider>
    )

    await wrapper.findByText("Hello")
  })

  it("should translate the text in french", async () => {
    const wrapper = render(
      <CustomIntlProvider langKey="fr">
        <FormattedMessage id="landing.title" />
      </CustomIntlProvider>
    )

    await wrapper.findByText("Bonjour")
  })
})
