import * as React from "react"
import { useIntl } from "react-intl"
import { RouteComponentProps } from "@reach/router"
import { Seo } from "../../components/Seo/Seo"
import { Navbar } from "../../components/Navbar/Navbar"

export const Tasks: React.FC<
  {
    pathname: string
    langKey: string
  } & RouteComponentProps
> = props => {
  const intl = useIntl()

  return (
    <>
      <Seo
        index
        title={intl.formatMessage({ id: "tasks.seo.title" })}
        description={intl.formatMessage({ id: "tasks.seo.description" })}
        pathname={props.pathname}
        lang={props.langKey}
        canonical={"/tasks/"}
      />

      <div className="relative bg-gray-50 min-h-screen">
        <Navbar />
      </div>
    </>
  )
}
