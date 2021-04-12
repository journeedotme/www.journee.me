import * as React from "react"
import { useIntl } from "react-intl"
import { RouteComponentProps } from "@reach/router"
import { Seo } from "../../components/Seo/Seo"
import { Navbar } from "../../components/Navbar/Navbar"
import { Task } from "../../components/Task/Task"
// TODO SVG shit
import Arrow from "../../assets/tasks/arrow.svg"
import { AddTaskButton } from "../../components/AddTaskButton/AddTaskButton"
import { AddTaskModal } from "../../components/AddTaskModal/AddTaskModal"
import { RenameTaskModal } from "../../components/RenameTaskModal/RenameTaskModal"
import { RemoveTaskModal } from "../../components/RemoveTaskModal/RemoveTaskModal"
import { ActionsTaskModal } from "../../components/ActionsTaskModal/ActionsTaskModal"

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

      <div className="relative min-h-screen bg-gray-50">
        <Navbar withTimeline />
        <div className="pt-2 space-y-2">
          <Task />
        </div>
        <div className="py-8">
          <div className="w-full pb-8 text-2xl font-bold text-center">
            <div className="leading-7 text-gray-700">Keep motivation !</div>
            <div className="leading-8 text-blue-400">
              And add new task in your daily routine.
            </div>
          </div>
          <img src={Arrow} className="m-auto"></img>
        </div>
      </div>

      <AddTaskButton />
      <AddTaskModal />
      <ActionsTaskModal />
      <RenameTaskModal />
      <RemoveTaskModal />
    </>
  )
}
