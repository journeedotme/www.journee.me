import * as React from "react"
import { useIntl } from "react-intl"
import { Seo } from "../../components/Seo/Seo"
import { GoogleAuthenticationButton } from "../../components/GoogleAuthenticationButton/GoogleAuthenticationButton"
import { X } from "../../components/Icons/outline"
import Logo from "../../../static/logo/logo.svg"
import { FormattedMessage } from "../../components/FormattedMessage/FormattedMessage"
import { IntlLink } from "../../components/IntlLink/IntlLink"

const SigninRoute: React.FC<{
  location: { pathname: string }
  pageContext: { langKey: string }
}> = props => {
  const intl = useIntl()

  return (
    <>
      <Seo
        index
        title={intl.formatMessage({ id: "signin.seo.title" })}
        description={intl.formatMessage({ id: "signin.seo.description" })}
        pathname={props.location.pathname}
        lang={props.pageContext.langKey}
        canonical={"/signin/"}
      />

      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <IntlLink
          to="/"
          className="fixed top-0 right-0 block p-4 text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-8" />
        </IntlLink>
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="w-auto h-12 mx-auto"
              src={Logo}
              alt="Journee"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-800">
              <FormattedMessage
                id="signin.title"
                values={{
                  b: text => (
                    <span className="block text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-blue-300">
                      {text}
                    </span>
                  ),
                }}
              />
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <GoogleAuthenticationButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default SigninRoute
