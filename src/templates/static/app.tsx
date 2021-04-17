import React from "react"
import { Router } from "@reach/router"
import { PageProps } from "gatsby"
import { TasksRoute } from "../app/tasks"
import { Protected } from "../../components/Protected/Protected"
import { getUrl } from "../../configuration/getTranslations"
import SigninRoute from "../app/signin"

const Application: React.FC<PageProps<any, { langKey: string }>> = props => (
  <Router basepath={getUrl("/app/", props.pageContext.langKey).url}>
    <Protected path="/">
      <TasksRoute
        path="/"
        pathname={props.location.pathname}
        langKey={props.pageContext.langKey}
      />
    </Protected>
    <SigninRoute
      path="/signin/"
      pathname={props.location.pathname}
      langKey={props.pageContext.langKey}
    />
  </Router>
)

export default Application
