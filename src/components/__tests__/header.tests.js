import React from "react"
import renderer from "react-test-renderer"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<div>hello</div>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
