import * as React from "react"
import { useIntl } from "react-intl"
import { TaskEntity } from "../../entities/TaskEntity"
import { BaseModal } from "../BaseModal/BaseModal"
import { FormattedMessage } from "../FormattedMessage/FormattedMessage"

import {
  connector,
  ContainerProps,
} from "./containers/RenameTaskModal.container"

type Props = {
  isOpen: boolean
  id: TaskEntity["id"]
  name: TaskEntity["name"]
  onClose: () => void
  onRename: (params: { id: TaskEntity["id"]; name: TaskEntity["name"] }) => void
}

const Content: React.FC<Props> = props => {
  const intl = useIntl()
  const [name, setName] = React.useState(props.name)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.onRename({ id: props.id, name })
  }

  return (
    <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
      <div>
        <div className="mt-3 text-center sm:mt-5">
          <h3
            className="text-lg font-medium leading-6 text-gray-900"
            id="modal-title"
          >
            <FormattedMessage id="modal.rename-task.title" />
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              <FormattedMessage id="modal.rename-task.description" />
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mt-5">
          <div>
            <label htmlFor="task" className="sr-only">
              <FormattedMessage id="modal.rename-task.input.label" />
            </label>
            <input
              type="text"
              name="task"
              id="task"
              value={name}
              autoFocus
              required
              onChange={e => setName(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder={intl.formatMessage({
                id: "modal.rename-task.input.placeholder",
              })}
            />
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="inline-flex justify-center w-full px-4 py-2 text-base text-white rounded-md shadow-md bg-gradient-to-t from-blue-500 to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FormattedMessage id="modal.rename-task.submit" />
          </button>
        </div>
      </form>
    </div>
  )
}

export const Wrapper: React.FC<Props> = props => {
  return (
    <BaseModal isOpen={props.isOpen} onClose={props.onClose}>
      <Content {...props} />
    </BaseModal>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const RenameTaskModal = connector(Container)
