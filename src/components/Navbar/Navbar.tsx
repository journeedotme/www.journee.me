import { Link } from "gatsby"
import * as React from "react"
import { Drawer } from "../Drawer/Drawer"
import SvgMenu from "../Icons/outline/Menu"
import { connector, ContainerProps } from "./containers/Navbar.container"

export const Wrapper: React.FC<{
  onOpen: () => void
}> = props => {
  return (
    <div className="relative bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start">
            {/* TODO add localization */}
            <Link to="/app/tasks/">
              <span className="sr-only">Journee</span>
              <img className="h-9 w-auto" src="/logo/logo.svg" alt="" />
            </Link>
          </div>
          <div className="-mr-2 -my-2">
            <button
              type="button"
              onClick={() => props.onOpen()}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <SvgMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <Drawer />
    </div>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Navbar = connector(Container)
