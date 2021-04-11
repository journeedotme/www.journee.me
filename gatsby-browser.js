import "./src/css/global.css"

import wrapWithIntl from "./wrap-with-intl"
import wrapWithProvider from "./wrap-with-provider"

export const wrapRootElement = wrapWithProvider
export const wrapPageElement = wrapWithIntl
