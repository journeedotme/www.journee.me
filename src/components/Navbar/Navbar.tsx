import * as React from "react"
import { Drawer } from "../Drawer/Drawer"
import SvgMenu from "../Icons/outline/Menu"
import { IntlLink } from "../IntlLink/IntlLink"
import { Timeline } from "../Timeline/Timeline"
import Logo from "../../../static/logo/logo.svg"
import { connector, ContainerProps } from "./containers/Navbar.container"

export const Wrapper: React.FC<{
  onOpen: () => void
  withTimeline?: boolean
  sticky?: boolean
}> = props => {
  return (
    <div
      className={`${
        props.sticky ? "fixed" : "relative opacity-0"
      } top-0 left-0 right-0 z-10 w-full bg-white shadow-sm sticked`}
    >
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <div className="flex justify-start">
            <IntlLink to="/app/">
              <span className="sr-only">Journee</span>
              <img className="w-auto h-9" src={Logo} alt="Journee" />
            </IntlLink>
          </div>
          <div className="-my-2 -mr-2">
            <button
              type="button"
              onClick={() => props.onOpen()}
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <SvgMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {props.withTimeline && <Timeline />}

      {props.sticky && <Drawer />}
    </div>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Navbar = connector(Container)
