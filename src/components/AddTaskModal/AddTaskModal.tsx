import { Transition } from "@headlessui/react"
import * as React from "react"
import { BaseModal } from "../BaseModal/BaseModal"

import { connector, ContainerProps } from "./containers/AddTaskModal.container"

export const Wrapper: React.FC<{
  isOpen: boolean
  onClose: () => void
}> = props => {
  return (
    <BaseModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full sm:p-6">
        <div>
          <div className="mt-3 text-center sm:mt-5">
            <h3
              className="text-lg font-medium leading-6 text-gray-900"
              id="modal-title"
            >
              Create a new task
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Fill the input with the name of the task. You will be able to
                change the name later.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <label htmlFor="task" className="sr-only">
              Task
            </label>
            <input
              type="text"
              name="task"
              id="task"
              autoFocus
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              // TODO translate
              placeholder="Wakup at 8am..."
            />
          </div>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base text-white rounded-md shadow-md bg-gradient-to-t from-blue-500 to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </BaseModal>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const AddTaskModal = connector(Container)
