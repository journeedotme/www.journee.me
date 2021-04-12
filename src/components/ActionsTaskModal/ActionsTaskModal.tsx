import * as React from "react"
import { BaseModal } from "../BaseModal/BaseModal"
import { FormattedMessage } from "../FormattedMessage/FormattedMessage"
import SvgPencil from "../Icons/outline/Pencil"
import SvgTrash from "../Icons/outline/Trash"

import {
  connector,
  ContainerProps,
} from "./containers/ActionsTaskModal.container"

const Item: React.FC<{
  icon: React.ReactElement
  label: React.ReactElement
  onClick: () => void
}> = props => (
  <button
    onClick={props.onClick}
    className="flex items-center w-full px-3 py-2 font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
    aria-current="page"
  >
    <span className="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 group-hover:text-gray-500">
      {props.icon}
    </span>
    <span>{props.label}</span>
  </button>
)

export const Wrapper: React.FC<{
  isOpen: boolean
  onClose: () => void
  onRename: () => void
  onRemove: () => void
}> = props => {
  return (
    <BaseModal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="inline-block w-full max-w-md px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl">
        <div className="space-y-1" aria-label="Sidebar">
          <Item
            icon={<SvgPencil />}
            label={<FormattedMessage id="modal.actions.rename" />}
            onClick={props.onRename}
          />

          <Item
            icon={<SvgTrash />}
            label={<FormattedMessage id="modal.actions.remove" />}
            onClick={props.onRemove}
          />
        </div>

        <button
          type="button"
          onClick={props.onClose}
          className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
      </div>
    </BaseModal>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const ActionsTaskModal = connector(Container)
