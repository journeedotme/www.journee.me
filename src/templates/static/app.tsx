import React from "react"
import { Router } from "@reach/router"
import { PageProps } from "gatsby"
import { TasksRoute } from "../app/tasks"
import { Protected } from "../../components/Protected/Protected"
import { getUrl } from "../../configuration/getTranslations"
import { App } from "../../components/App/App"

const Application: React.FC<PageProps<any, { langKey: string }>> = props => (
  <App lang={props.pageContext.langKey}>
    <Router basepath={getUrl("/app/", props.pageContext.langKey).url}>
      <Protected path="/">
        <TasksRoute
          path="/"
          pathname={props.location.pathname}
          langKey={props.pageContext.langKey}
        />
      </Protected>
    </Router>
  </App>
)

export default Application
