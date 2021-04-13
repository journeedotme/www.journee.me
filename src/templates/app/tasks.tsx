import * as React from "react"
import { useIntl } from "react-intl"
import { RouteComponentProps } from "@reach/router"
import { Seo } from "../../components/Seo/Seo"
import { Navbar } from "../../components/Navbar/Navbar"
import { AddTaskButton } from "../../components/AddTaskButton/AddTaskButton"
import { AddTaskModal } from "../../components/AddTaskModal/AddTaskModal"
import { RenameTaskModal } from "../../components/RenameTaskModal/RenameTaskModal"
import { RemoveTaskModal } from "../../components/RemoveTaskModal/RemoveTaskModal"
import { ActionsTaskModal } from "../../components/ActionsTaskModal/ActionsTaskModal"
import { ModalOverlay } from "../../components/ModalOverlay/ModalOverlay"
import { Tasks } from "../../components/Tasks/Tasks"
import { MotivationMessages } from "../../components/MotivationMessages/MotivationMessages"

export const TasksRoute: React.FC<
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
          <Tasks />
        </div>
        <div className="py-8">
          <MotivationMessages />
        </div>
      </div>

      <ModalOverlay />
      <ActionsTaskModal />
      <AddTaskButton />
      <AddTaskModal />
      <RenameTaskModal />
      <RemoveTaskModal />
    </>
  )
}
