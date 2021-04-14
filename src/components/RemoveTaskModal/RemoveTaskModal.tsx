import * as React from "react"
import { TaskEntity } from "../../entities/TaskEntity"
import { BaseModal } from "../BaseModal/BaseModal"
import { FormattedMessage } from "../FormattedMessage/FormattedMessage"
import { Exclamation, X } from "../Icons/outline"

import {
  connector,
  ContainerProps,
} from "./containers/RemoveTaskModal.container"

export const Wrapper: React.FC<{
  isOpen: boolean
  id: TaskEntity["id"]
  onClose: () => void
  onRemove: (id: TaskEntity["id"]) => void
}> = props => {
  return (
    <BaseModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
        <div className="sm:flex sm:items-start">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <Exclamation className="w-6 h-6 text-red-600" />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              className="text-lg font-medium leading-6 text-gray-900"
              id="modal-title"
            >
              <FormattedMessage id="modal.remove-task.title" />
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                <FormattedMessage id="modal.remove-task.description" />
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            onClick={() => props.onRemove(props.id)}
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            <FormattedMessage id="modal.remove-task.submit" />
          </button>
          <button
            type="button"
            onClick={() => props.onClose()}
            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
          >
            <FormattedMessage id="modal.remove-task.cancel" />
          </button>
        </div>
      </div>
    </BaseModal>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const RemoveTaskModal = connector(Container)
