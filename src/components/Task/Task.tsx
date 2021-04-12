import * as React from "react"
import SvgCheck from "../Icons/outline/Check"
import SvgDotsVertical from "../Icons/outline/DotsVertical"
import { connector, ContainerProps } from "./containers/Task.container"

const Item: React.FC<{
  active?: boolean
}> = props => (
  <div
    className={`text-center border-2 border-gray-200 rounded-full h-8 w-8 text-white ${
      props.active
        ? "bg-blue-400 border-blue-400 text-white"
        : "bg-transparent text-gray-600"
    }`}
  >
    {props.active && <SvgCheck />}
  </div>
)

export const Wrapper: React.FC = props => {
  return (
    <div className="relative bg-white shadow-sm">
      <div className="w-full pt-1 pb-5">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="px-4 text-lg font-medium leading-6 text-gray-800">
              Meditation
            </div>
            <button className="p-3">
              <SvgDotsVertical className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          <div className="flex justify-between px-4 mt-2">
            <Item />
            <Item />
            <Item active />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Task = connector(Container)
