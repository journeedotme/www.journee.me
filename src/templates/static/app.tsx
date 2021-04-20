import React from "react"
import { Router } from "@reach/router"
import { PageProps } from "gatsby"
import { TasksRoute } from "../app/tasks"
import { Protected } from "../../components/Protected/Protected"
import SigninRoute from "../app/signin"

const Application: React.FC<PageProps> = props => (
  <Router basepath="/app/">
    <Protected path="/">
      <TasksRoute path="/" pathname={props.location.pathname} />
    </Protected>
    <SigninRoute path="/signin/" pathname={props.location.pathname} />
  </Router>
)

export default Application
