import React, { ReactElement } from "react"
import { render } from "@testing-library/react"
import { CustomIntlProvider } from "../components/CustomIntlProvider/CustomIntlProvider"
import { createStoreForTests } from "./createStoreForTests"
import { Provider } from "react-intl/src/components/injectIntl"

const Providers = ({ children }) => {
  const { store } = createStoreForTests()

  return (
    <Provider store={store}>
      <CustomIntlProvider langKey="en">{children}</CustomIntlProvider>
    </Provider>
  )
}

const customRender = (ui: ReactElement, options?: any) => {
  return render(ui, { wrapper: Providers, ...options })
}

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
