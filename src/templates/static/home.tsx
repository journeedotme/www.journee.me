import * as React from "react"
import { useIntl } from "react-intl"
import { ChevronRightIcon } from "@heroicons/react/solid"

import { Seo } from "../../components/Seo/Seo"
import { FormattedMessage } from "../../components/FormattedMessage/FormattedMessage"
import { GoogleAuthenticationButton } from "../../components/GoogleAuthenticationButton/GoogleAuthenticationButton"
import Logo from "../../../static/logo/logo.svg"
import Dashboard from "../../assets/landing/dashboard.png"

const footerNavigation = {
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/KM_Marques",
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/journeedotme/www.journee.me",
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

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
      <div className="bg-white">
        <main>
          {/* Hero section */}
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div>
                  <img className="w-auto h-11" src={Logo} alt="Journee" />
                </div>
                <div className="mt-20">
                  <div>
                    <a
                      href="https://www.github.com/journeedotme/www.journee.me"
                      className="inline-flex space-x-4"
                    >
                      <span className="rounded bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-500 tracking-wide uppercase">
                        <FormattedMessage id="landing.hero.label.title" />
                      </span>
                      <span className="inline-flex items-center space-x-1 text-sm font-medium text-blue-500">
                        <span>
                          <FormattedMessage id="landing.hero.label.description" />
                        </span>
                        <ChevronRightIcon
                          className="w-5 h-5"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </div>
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
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
                    <p className="mt-6 text-xl text-gray-500">
                      <FormattedMessage id="landing.hero.description" />
                    </p>
                  </div>
                  <div className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                    <GoogleAuthenticationButton />
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 w-screen left-1/2 bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                  <svg
                    className="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div className="relative px-8 mx-auto sm:max-w-3xl lg:max-w-xl lg:h-full">
                  <img
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src={Dashboard}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-24 sm:mt-32 sm:py-16">
            <div aria-hidden="true" className="hidden sm:block">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
              <svg
                className="absolute -ml-3 top-8 left-1/2"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                />
              </svg>
            </div>
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative px-6 py-10 overflow-hidden bg-blue-500 shadow-xl rounded-2xl sm:px-12 sm:py-20">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-blue-400 text-opacity-40"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                      className="text-blue-600 text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <div className="sm:text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      <FormattedMessage id="landing.cta.title" />
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 text-lg text-blue-100">
                      <FormattedMessage id="landing.cta.description" />
                    </p>
                  </div>
                  <form
                    action="#"
                    className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                  >
                    <GoogleAuthenticationButton />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-24 bg-gray-900 sm:mt-12">
          <div className="max-w-md px-4 py-12 mx-auto overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex justify-center mt-8 space-x-6">
              {footerNavigation.social.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
