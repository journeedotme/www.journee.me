import React from "react"
import { Router } from "@reach/router"
import { PageProps } from "gatsby"
import { TasksRoute } from "../app/tasks"

const App: React.FC<PageProps<any, { langKey: string }>> = props => (
  <Router basepath="/app/">
    <TasksRoute
      path="/tasks/"
      pathname={props.location.pathname}
      langKey={props.pageContext.langKey}
    />
  </Router>
)

export default App
