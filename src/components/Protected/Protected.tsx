import * as React from "react"
import Logo from "../../../static/logo/logo.svg"
import { connector, ContainerProps } from "./containers/Protected.container"

export const Wrapper: React.FC<{
  onMount: () => void
  authenticated: boolean
}> = props => {
  React.useEffect(() => props.onMount(), [])

  if (props.authenticated) return <>{props.children}</>
  
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <img src={Logo} alt="Journee" className="w-20 h-auto animate-pulse" />
      </div>
    </>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const Protected = connector(Container)
