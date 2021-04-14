import { Transition } from "@headlessui/react"
import * as React from "react"

export const BaseModal: React.FC<{
  isOpen: boolean
  center?: boolean
  onClose: () => void
}> = props => {
  return (
    <Transition show={props.isOpen} className="relative z-30">
      <div
        className="fixed inset-0 z-30 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center">
          <Transition.Child>
            <div
              onClick={props.onClose}
              className="fixed inset-0"
              aria-hidden="true"
            ></div>
          </Transition.Child>

          <Transition.Child
            className="w-full transition-all transform"
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            {props.children}
          </Transition.Child>
        </div>
      </div>
    </Transition>
  )
}
