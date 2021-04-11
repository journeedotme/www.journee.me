import React from "react"
import google from "../../assets/social/icons/google.svg"
import { FormattedMessage } from "../FormattedMessage/FormattedMessage"
import {
  connector,
  ContainerProps,
} from "./containers/GoogleAuthenticationButton.container"

type Props = {
  onClick: () => void
}

export const Wrapper: React.FC<Props> = props => (
  <button
    onClick={props.onClick}
    type="button"
    className="inline-flex w-full items-center px-4 py-2 sm:py-3 leading border shadow-md border-transparent  text-lg font-semibold rounded-full  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  >
    <img src={google} className="-ml-1 mr-2 w-7 h-7" />
    <div className="w-full text-center text-gray-700">
      <FormattedMessage id="landing.hero.signin.button.text" />
    </div>
  </button>
)

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const GoogleAuthenticationButton = connector(Container)
