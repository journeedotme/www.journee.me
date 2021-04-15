import React, { ReactElement, useEffect } from "react"
import { connector, ContainerProps } from "./containers/App.container"

export type Props = {
  onMount: () => void
}

export const Wrapper: React.FC<Props> = props => {
  useEffect(() => {
    props.onMount()
  }, [])

  return <>{props.children}</>
}

export const Container: React.FC<
  ContainerProps & { children: ReactElement }
> = props => <Wrapper {...props} />

export const App = connector(Container)
