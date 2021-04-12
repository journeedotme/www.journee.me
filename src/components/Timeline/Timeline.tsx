import * as React from "react"
import { connector, ContainerProps } from "./containers/Timeline.container"

const Item: React.FC<{
  active?: boolean
  numeric: number
  day: string
}> = props => (
  <div
    className={`text-center px-2 py-2 ${
      props.active
        ? "bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg shadow-lg"
        : ""
    }`}
  >
    <div
      className={`font-medium leading-6 ${
        props.active ? "text-white" : "text-gray-900"
      }`}
    >
      {props.numeric}
    </div>
    <div
      className={`text-xs leading-none ${
        props.active ? "text-white" : "text-gray-600"
      }`}
    >
      {props.day}
    </div>
  </div>
)

export const Wrapper: React.FC = props => {
  return (
    <div className="relative bg-white">
      <div className="px-2 py-2 mx-auto max-w-7xl">
        <div className="w-full bg-gray-100 rounded">
          <div className="grid grid-cols-7">
            <Item numeric={8} day={"Mon"} />
            <Item numeric={9} day={"Tue"} />
            <Item numeric={10} day={"Wed"} active />
            <Item numeric={11} day={"Thu"} />
            <Item numeric={12} day={"Fri"} />
            <Item numeric={13} day={"Sat"} />
            <Item numeric={14} day={"Sun"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Timeline = connector(Container)
