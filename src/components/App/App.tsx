import React, { useEffect } from "react"
import { connector, ContainerProps } from "./containers/App.container"

export type Props = {
  onMount: () => void
}

export const Wrapper: React.FC<Props> = ({ onMount, children }) => {
  useEffect(() => {
    onMount()
  }, [])

  return <>{children}</>
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const App = connector(Container)
