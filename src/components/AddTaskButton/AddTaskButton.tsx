import * as React from "react"
import Plus from "../Icons/outline/Plus"
import { connector, ContainerProps } from "./containers/AddTaskButton.container"

export const Wrapper: React.FC<{ onClick: () => void }> = props => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4">
      <button
        onClick={props.onClick}
        type="button"
        className="inline-flex items-center p-2 text-white border border-transparent rounded-full shadow-md bg-gradient-to-t from-blue-500 to-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const AddTaskButton = connector(Container)
