import { Link } from "gatsby"
import * as React from "react"
import { Drawer } from "../Drawer/Drawer"
import SvgMenu from "../Icons/outline/Menu"
import { Timeline } from "../Timeline/Timeline"
import { connector, ContainerProps } from "./containers/Navbar.container"

export const Wrapper: React.FC<{
  onOpen: () => void
  withTimeline?: boolean
}> = props => {
  return (
    <div className="relative z-10 bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <div className="flex justify-start">
            {/* TODO add localization */}
            <Link to="/app/tasks/">
              <span className="sr-only">Journee</span>
              <img className="w-auto h-9" src="/logo/logo.svg" alt="" />
            </Link>
          </div>
          <div className="-my-2 -mr-2">
            <button
              type="button"
              onClick={() => props.onOpen()}
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <SvgMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {props.withTimeline && <Timeline />}

      <Drawer />
    </div>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Navbar = connector(Container)
