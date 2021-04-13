import * as React from "react"
import { useIntl } from "react-intl"
import { Link, PageProps } from "gatsby"

import { Seo } from "../../components/Seo/Seo"
import metadata from "../../configuration/metadata.json"
import { FormattedMessage } from "../../components/FormattedMessage/FormattedMessage"
import SvgChevronRight from "../../components/Icons/solid/ChevronRight"
import { GoogleAuthenticationButton } from "../../components/GoogleAuthenticationButton/GoogleAuthenticationButton"

const Home: React.FC<{
  location: { pathname: string }
  pageContext: { langKey: string }
}> = props => {
  const intl = useIntl()

  return (
    <>
      <Seo
        index
        title={intl.formatMessage({ id: "landing.seo.title" })}
        description={intl.formatMessage({ id: "landing.seo.description" })}
        pathname={props.location.pathname}
        lang={props.pageContext.langKey}
        canonical={"/"}
      />

      <div className="min-h-screen overflow-hidden bg-gray-900">
        <div className="relative">
          <header className="relative z-10">
            <div className="pt-6">
              <nav
                className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center justify-between w-auto w-full">
                    <Link to="/app/tasks/">
                      <span className="sr-only">{metadata.name}</span>
                      <img
                        className="w-auto h-10 sm:h-12"
                        src="/logo/logo.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </header>

          <main>
            <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <a
                        href={metadata.github}
                        target="blank"
                        className="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-b from-blue-400 to-blue-600 shadow-sm rounded-full">
                          <FormattedMessage id="landing.hero.label.title" />
                        </span>
                        <span className="ml-4 text-sm">
                          <FormattedMessage id="landing.hero.label.description" />
                        </span>
                        <SvgChevronRight className="w-5 h-5 ml-2 text-gray-500" />
                      </a>

                      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <FormattedMessage
                          id="landing.hero.title"
                          values={{
                            b: element => (
                              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500">
                                {element}
                              </span>
                            ),
                          }}
                        />
                      </h1>
                      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        <FormattedMessage id="landing.hero.description" />
                      </p>
                      <div className="mt-10 sm:mt-12">
                        <GoogleAuthenticationButton />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                      <img
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="/landing/illustration.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Home
