import React from "react"
import { render } from "../../../utils/for-tests/test-utils"
import Home from "../home"

describe("<Home /> test suite", () => {
  it("should render without error", () => {
    render(
      <Home pageContext={{ langKey: "en" }} location={{ pathname: "/" }} />
    )
  })
})
