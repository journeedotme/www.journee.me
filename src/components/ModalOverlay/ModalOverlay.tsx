import { Transition } from "@headlessui/react"
import * as React from "react"

import { connector, ContainerProps } from "./containers/ModalOverlay.container"

export const Wrapper: React.FC<{
  isOpen: boolean
  onClick: () => void
}> = props => {
  return (
    <Transition
      show={props.isOpen}
      className="relative z-20"
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        onClick={props.onClick}
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        aria-hidden="true"
      ></div>
    </Transition>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const ModalOverlay = connector(Container)
