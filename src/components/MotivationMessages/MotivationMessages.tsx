import React, { useEffect } from "react"
import { TaskEntity } from "../../entities/TaskEntity"
import {
  connector,
  ContainerProps,
} from "./containers/MotivationMessages.container"
import Arrow from "../../assets/tasks/arrow.svg"

export const Wrapper: React.FC<{
  show: boolean
}> = props => {
  return (
    (props.show && (
      <>
        <div className="w-full pb-8 text-2xl font-bold text-center">
          <div className="leading-7 text-gray-700">Keep motivation !</div>
          <div className="leading-8 text-blue-400">
            And add new task in your daily routine.
          </div>
        </div>
        <img src={Arrow} className="m-auto"></img>
      </>
    )) || <></>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const MotivationMessages = connector(Container)
