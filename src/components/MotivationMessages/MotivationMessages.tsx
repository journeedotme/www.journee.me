import React, { useEffect } from "react"
import { TaskEntity } from "../../entities/TaskEntity"
import {
  connector,
  ContainerProps,
} from "./containers/MotivationMessages.container"
import Arrow from "../../assets/tasks/arrow.svg"
import { FormattedMessage } from "../FormattedMessage/FormattedMessage"

export const Wrapper: React.FC<{
  show: boolean
}> = props => {
  return (
    (props.show && (
      <>
        <div className="w-full px-4 pb-8 text-2xl font-bold text-center">
          <div className="leading-7 text-gray-700">
            <FormattedMessage
              id="tasks.motivation"
              values={{
                b: element => (
                  <div className="leading-8 text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-blue-400">
                    {element}
                  </div>
                ),
              }}
            />
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
