import React, { ReactElement } from "react"
import { render } from "@testing-library/react"
import { CustomIntlProvider } from "../components/CustomIntlProvider/CustomIntlProvider"

const AllTheProviders = ({ children }) => (
  <CustomIntlProvider langKey="en">{children}</CustomIntlProvider>
)

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
