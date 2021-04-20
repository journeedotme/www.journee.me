import React, { ReactNode } from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState, props: { langKey?: string, children?: ReactNode }) => ({
  ...props,
  langKey: props.langKey || state.locale.lang,
})

const mapDispatch = () => ({})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
