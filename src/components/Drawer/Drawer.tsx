import React from "react"
import { Transition } from "@headlessui/react"
import { useLocation } from "@reach/router"
import { connector, ContainerProps } from "./containers/Drawer.container"
import { UserEntity } from "../../entities/UserEntity"
import SvgX from "../Icons/outline/X"

export type DrawerProps = {
  onClose: () => void
  onLogout: () => void
  user: UserEntity | null
}

export const DrawerWrapper: React.FC<DrawerProps> = props => {
  const location = useLocation()

  const isOpen = location.href?.includes("drawer=open") || false

  return (
    <Transition
      show={isOpen}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform">
        <div
          className="absolute top-0 left-0 w-full min-h-screen bg-transparent"
          onClick={() => props.onClose()}
        />
        <div className="container mx-auto relative rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-9 w-auto"
                  src="/logo/logo.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  onClick={props.onClose}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <SvgX className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="#"
                  className="-m-3 py-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Home
                  </span>
                </a>
                <a
                  href="#"
                  className="-m-3 py-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    My Daily Routine
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-2 space-y-6">
            <div className="mx-auto px-4 flex items-center sm:px-6">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=dAdD8ntwdB&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {props.user?.username}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {props.user?.email}
                </div>
              </div>
            </div>
            <div className="px-3">
              <a
                href="#"
                className="-m-3 py-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <span className="ml-3 text-base font-medium text-gray-900">
                  Sign out
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export const DrawerContainer: React.FC<ContainerProps> = props => (
  <DrawerWrapper {...props} />
)

export const Drawer = connector(DrawerContainer)
