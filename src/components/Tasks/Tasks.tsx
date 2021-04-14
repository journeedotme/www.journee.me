import React, { useEffect } from "react"
import { TaskEntity } from "../../entities/TaskEntity"
import { Task } from "../Task/Task"
import { connector, ContainerProps } from "./containers/Tasks.container"

export const Wrapper: React.FC<{
  tasks: TaskEntity[]
  onMount: () => void
}> = props => {
  useEffect(() => {
    props.onMount()
  }, [])

  return (
    <>
      {props.tasks.map(({ id }) => (
        <Task id={id} key={id} />
      ))}
    </>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Tasks = connector(Container)
