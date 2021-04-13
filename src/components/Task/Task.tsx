import { Transition } from "@headlessui/react"
import * as React from "react"
import { TaskEntity } from "../../entities/TaskEntity"
import { createDailyInterval } from "../../utils/date"
import DotsVertical from "../Icons/outline/DotsVertical"
import { Check } from "./components/Check/Check"
import { connector, ContainerProps } from "./containers/Task.container"

export const Wrapper: React.FC<{
  onActions: () => void
  task: TaskEntity
}> = props => {
  return (
    <Transition
      show
      appear={true}
      enter="transform transition-all ease-out duration-300"
      enterFrom="-translate-y-full opacity-0"
      enterTo="translate-x-0 opacity-100"
    >
      <div className="relative bg-white shadow-sm">
        <div className="w-full pt-1 pb-5">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="px-4 text-lg font-medium leading-6 text-gray-800">
                {props.task.name}
              </div>
              <button className="p-3" onClick={props.onActions}>
                <DotsVertical className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            <div className="grid grid-cols-7 px-2 mx-auto mt-2">
              {createDailyInterval(7).map(date => (
                <Check id={date} task={props.task.id} key={date} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Task = connector(Container)
