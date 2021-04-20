import { ReactElement } from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../../redux/store"

const mapState = (
  state: RootState,
  props: { langKey: string; children: ReactElement }
) => ({
  ...props,
  langKey: props.langKey || state.locale.lang,
})

export const connector = connect(mapState, null)
export type ContainerProps = ConnectedProps<typeof connector>
