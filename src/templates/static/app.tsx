import React from "react"
import { Router } from "@reach/router"
import { PageProps } from "gatsby"
import { Tasks } from "../app/tasks"

const App: React.FC<PageProps<any, { langKey: string }>> = props => (
  <Router basepath="/app/">
    <Tasks
      path="/tasks/"
      pathname={props.location.pathname}
      langKey={props.pageContext.langKey}
    />
  </Router>
)

export default App
