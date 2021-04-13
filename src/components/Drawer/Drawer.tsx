import React from "react"
import { Transition } from "@headlessui/react"
import { useLocation } from "@reach/router"
import { connector, ContainerProps } from "./containers/Drawer.container"
import { UserEntity } from "../../entities/UserEntity"
import X from "../Icons/outline/X"
import { Link } from "gatsby"

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
          className="absolute top-0 left-0 w-full min-h-screen bg-gray-900 opacity-20"
          onClick={() => props.onClose()}
        />
        <div className="container relative mx-auto bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="w-auto h-9"
                  src="/logo/logo.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  onClick={props.onClose}
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  to="/"
                  className="flex items-center py-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Home
                  </span>
                </Link>
                <Link
                  to="/app/tasks/"
                  className="flex items-center py-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    My Daily Routine
                  </span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="px-2 py-6 space-y-6">
            <div className="flex items-center px-4 mx-auto sm:px-6">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
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
                className="flex items-center py-3 -m-3 rounded-md hover:bg-gray-50"
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
