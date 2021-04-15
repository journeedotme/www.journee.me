import * as React from "react"
import { CheckIcon } from "@heroicons/react/outline"
import { connector, ContainerProps } from "./containers/Check.container"

export const Wrapper: React.FC<{
  active: boolean
  onClick: () => void
}> = props => {
  return (
    <button
      onClick={props.onClick}
      className={`mx-auto text-center border-2 border-gray-200 rounded-full h-8 w-8 text-white ${
        props.active
          ? "bg-gradient-to-t from-blue-500 to-blue-400 border-none shadow-md text-white"
          : "bg-transparent shadow-inner text-gray-600"
      }`}
    >
      {props.active && (
        <CheckIcon
          style={{ filter: "drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.10))" }}
        />
      )}
    </button>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Check = connector(Container)
