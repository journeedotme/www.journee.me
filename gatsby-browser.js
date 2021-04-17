import "./src/css/global.css"
import "firebase/auth"
import "firebase/firestore"
import "firebase/analytics"

import wrapWithIntl from "./wrap-with-intl"
import wrapWithProvider from "./wrap-with-provider"

export const wrapRootElement = wrapWithProvider
export const wrapPageElement = wrapWithIntl
