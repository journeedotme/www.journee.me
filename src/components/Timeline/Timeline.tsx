import * as React from "react"
import { createDailyIntervalWithDayNumberAndName } from "../../utils/date"
import { connector, ContainerProps } from "./containers/Timeline.container"

const Item: React.FC<{
  active?: boolean
  numeric: string
  day: string
}> = props => (
  <div
    className={`text-center px-2 py-2 ${
      props.active
        ? "bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg shadow-xl"
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
    <div className="relative">
      <div className="max-w-2xl px-2 py-2 mx-auto">
        <div className="w-full bg-gray-100 rounded-lg">
          <div className="grid grid-cols-7">
            {createDailyIntervalWithDayNumberAndName(7).map(
              ({ number, day }, index) => (
                <Item numeric={number} day={day} key={number} active={index === 6} />
              )
            )}
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
